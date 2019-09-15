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
    console.log(position)
};

function renderStamina() {
    stamina.innerText = staminaValue;

};

function renderHealth() {
    health.innerText = healthValue;

};

function renderMap() {
    newMap = maps
        .filter(element => JSON.stringify(element.position) == JSON.stringify(position));
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
};

function renderMonster() {
    dice = diceRoll(3);
    newMonster = monsters[dice];
    img.src = newMonster.image;
    loc.innerText = newMonster.name;
    desc.innerText = newMonster.description;
    fight.disabled = true;
    roll.disabled = false;
};

function monsterAttack() {
    setTimeout(() => {
        if (newMonster.health >= 0) {
            monsterDamage = (diceRoll(10) + newMonster.damage - armourDefence);
            healthValue -= monsterDamage;
            textAnimation(`> The Mob hits You for ${monsterDamage}`, 2000);
            checkStatus();
            renderHealth();
        }
    }, 2000);
};
function monsterDeath() {
    score += 10;
    img.src = 'img/events/monsterDeath.jpg';
    textAnimation('> You slay the monster.', 2000);
    setTimeout(() => {
        renderPosition();
        renderMap();
    }, 2000);
};

function heroAttack(ratio) {
    staminaValue -= staminaRatioAttack;
    renderStamina();
    let myDamage = diceRoll(10);
    newMonster.health -= (myDamage + ratio);
    textAnimation(`> You hit for ${myDamage + ratio}`, 2000);
    checkStatus();
    if (newMonster.health <= 0) monsterDeath();
};

function heroDeath() {
    textAnimation(`> SCORE: ${score}. Your nightmare is restarting`, 3000);
    img.src = 'img/events/death.jpg'
    renderStamina();
    renderHealth();
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
    if (staminaValue >= 100) staminaValue = 100;
    if (healthValue >= 100) healthValue = 100;
};

function textAnimation(text, time) {
    log.innerText = '';
    log.innerText = text;
    setTimeout(() => {
        log.innerText = '> ';
    }, time);
};

function checkEvent() {
    search.disabled = true;
    switch (newMap[0].location) {
        case 'MAPPA 12':
            checkItems(book);
            break;
        case 'MAPPA 4':
            checkItems(eye);
            break;
        case 'MAPPA 11':
            textAnimation('You find the Portal', 2000);
            break;
        default:
            textAnimation('You start searching...', 2000);
    }
};

function checkItems(item) {
    if (item.hidden == false) {
        textAnimation(`You already have this ${item.id}`, 2000);
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

