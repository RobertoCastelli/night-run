function init() { 
    location.reload(true);
};

function diceRoll(range) {
    let diceRoll = Math.floor(Math.random() * range);
    return diceRoll;
};

function renderPosition() {
    position[0] = x
    position[1] = y
};

function renderStamina() {
    stamina.innerText = staminaValue;
};

function renderHealth() {
    health.innerText = healthValue;
};

function renderMap() {
    newMap = maps.filter(element => JSON.stringify(element.position) == JSON.stringify(position));
    loc.innerText = newMap[0].location;
    desc.innerText = newMap[0].description;
    img.src = newMap[0].image;
    log.innerHTML = newMap[0].log;
    up.disabled = newMap[0].btnDisableUp;
    dw.disabled = newMap[0].btnDisableDw;
    dx.disabled = newMap[0].btnDisableDx;
    sx.disabled = newMap[0].btnDisableSx;
    fight.disabled = newMap[0].btnDisableFight;
    rest.disabled = newMap[0].btnDisableRest;
    run.disabled = newMap[0].btnDisableRun;
    pray.disabled = newMap[0].btnDisablePray;
    roll.disabled = newMap[0].btnDisableRoll;
    search.disabled = newMap[0].btnDisableSearch;
    book.hidden = newMap[0].btnDisableBook;
    eye.hidden = newMap[0].btnDisableEye;
    guide.disabled = newMap[0].btnDisableGuide;
    armor.hidden = newMap[0].btnDisableArmor;
    weapon.hidden = newMap[0].btnDisableWeapon;
    if (ritual == 1 && newMap[0].location == "MAPPA 11") dw.disabled = false; // OPEN SOUTH LOCATION IF YOU BEAT THE BOSS
};

function renderMonster(monsters, range) {
    dice = diceRoll(range);
    newMonster = monsters[dice];
    newMonster.health = 50; // REGENERATES MOB HEALTH (da migliorare)
    img.src = newMonster.image;
    loc.innerText = newMonster.name;
    desc.innerText = newMonster.description;
    // YOU CAN ONLY FIGHT
    fight.disabled = true;
    roll.disabled = false;
    pray.disabled = true;
    run.disabled = true;
};

function monsterAttack() {
    setTimeout(() => {
        if (newMonster.health >= 0) {
            monsterDamage = (diceRoll(6) + newMonster.damage - armourDefence);
            healthValue -= monsterDamage;
            textAnimation(`> The Mob hits for ${monsterDamage}`, 2000);
            checkStatus();
            renderHealth();
        }
    }, 2000);
};
function monsterDeath() {
    img.src = 'img/events/monsterDeath.jpg';
    textAnimation('> You slay the monster.', 2000);
    setTimeout(() => {
        // RETURN TO MAP LOCATION AFTER YOU KILL MOSNTER
        renderPosition();
        renderMap();
    }, 2000);
};

function heroAttack(base, hammer) {
    staminaValue -= staminaRatioAttack;
    renderStamina();
    let myDamage = diceRoll(base);
    newMonster.health -= (myDamage + hammer);
    textAnimation(`> You hit for ${myDamage + hammer}`, 2000);
    checkStatus();
    if (newMonster.health <= 0) monsterDeath();
}

function heroDeath() {
    textAnimation(`> Your nightmare is restarting`, 3000);
    img.src = 'img/events/death.jpg'
    setTimeout(() => {
        init();
    }, 4000);
};

function heroRevive() {
    textAnimation('> You have recieved a blessing', 2000);
    setTimeout(() => {
        staminaValue = 100;
        healthValue = 100;
        renderStamina();
        renderHealth();
        pray.disabled = true;
        textAnimation('> You feel refreshed', 2000);
    }, 2000);
};

function checkStatus() {
    if (healthValue <= 0 || staminaValue <= 0) heroDeath();
    // SET 100 AS MAX VALUE
    if (staminaValue >= 100) staminaValue = 100;
    if (healthValue >= 100) healthValue = 100;
};

function textAnimation(text, time) {
    // CLEAR TEXT AFTER 2s
    log.innerText = text;
    setTimeout(() => {
        log.innerText = '> ';
    }, time);
};

function checkEventItems() {
    // CHECK/FIND EYE & BOOK ONLY IN MAP 4 - 12
    search.disabled = true;
    switch (newMap[0].location) {
        case 'MAPPA 12':
            checkItems(book);
            break;
        case 'MAPPA 4':
            checkItems(eye);
            break;
        default:
            textAnimation('You start searching...', 2000);
    }
};

function checkItems(item) {
    // CHECK/FIND ITEMS
    if (item.hidden == false) {
        textAnimation(`You have this ${item.id}`, 2000);
    } else {
        activateHiddenButton(item);
        maps.forEach(element => {
            switch (item) {
                case weapon:
                    element.btnDisableWeapon = false;
                    break;
                case armor:
                    element.btnDisableArmor = false;
                    break;
                case book:
                    element.btnDisableBook = false;
                    break;
                case eye:
                    element.btnDisableEye = false;
                    break;
            }
        });
        textAnimation(`You find this ${item.id}`, 2000);
    }
};

function activateHiddenButton(button) {
    button.style.color = 'black';
    button.style.opacity = 1;
    button.hidden = false;
}

function finalEvent() {
    // RITUAL CORRECT (1° EYE - 2° BOOK)
    if (activeBook == 1 && activeEye == 1) {
        textAnimation('You start the ritual. No escape', 2000);
        book.classList.add('glow');
        // ONLY FIGHT
        search.disabled = true;
        rest.disabled = true;
        fight.disabled = false;
        sx.disabled = true;
        ritual = 1;
    }
    // RITUAL INCORRECT - BOOK START
    else if (activeBook == 1 && activeEye == 0) {
        textAnimation('You start reading...', 2000);
        // NO ESCAPE
        book.disabled = false;
        sx.disabled = true;
        search.disabled = true;
        // DAMAGE EVERY 1s x 10s
        let migraine = setInterval(() => {
            healthValue -= 1;
            rest.disabled = true;
            log.innerText = 'You feel pain...'
            renderHealth();
            checkStatus();
        }, 1000);
        // OPEN WEST AFTER 10s
        setTimeout(() => {
            sx.disabled = false;
            clearInterval(migraine);
            textAnimation('Finally You find a way out', 2000);
        }, 10000);
        // RESET BOOK FLAG
        activeBook = 0;
        renderStamina();
    }
    // RITUAL INCORRECT - EYE START
    else if (activeBook == 0 && activeEye == 1) {
        eye.classList.add('glow');
        textAnimation('You insert the eye in the portal...', 2000);
    }
}








