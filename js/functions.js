function init() {
    location.reload(true);
}

function diceRoll(range) {
    let diceRoll = Math.floor(Math.random() * range);
    return diceRoll;
}

function renderPosition() {
    position[0] = x
    position[1] = y
    console.log(position)
}

function renderStamina(ratio) {
    staminaValue -= ratio;
    stamina.innerText = staminaValue;
}

function renderHealth(ratio) {
    healthValue -= ratio;
    health.innerText = healthValue;
}

function renderMap() {
    let newMap = maps
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
}

function renderMonster() {
    dice = diceRoll(3);
    newMonster = monsters[dice];
    img.src = newMonster.image;
    loc.innerText = newMonster.name;
    desc.innerText = newMonster.description;
    fight.disabled = true;
    roll.disabled = false;
}

function monsterAttack() {
    setTimeout(() => {
        if (newMonster.health >= 0) {
            monsterDamage = (diceRoll(6) + newMonster.damage)
            healthValue -= monsterDamage;
            textAnimation(`> The Mob hits You for ${monsterDamage}`, 2000);
            renderHealth(0);
            checkStatus();
        }
    }, 2000);

}
function monsterDeath() {
    renderPosition();
    renderMap();
    up.disabled = false;
    run.disabled = true;
    fight.disabled = true;
    pray.disabled = true;
    textAnimation('> You slay the monster. You continue your walk', 3000);
}

function heroAttack() {
    renderStamina(10);
    let myDamage = diceRoll(20);
    newMonster.health -= myDamage;
    textAnimation(`> You hit for ${myDamage}`, 2000);
    checkStatus();
    if (newMonster.health <= 0) monsterDeath();
}

function heroDeath() {
    textAnimation('> Your nightmare is restarting', 2000);

    img.src = 'img/events/death.jpg'
    renderStamina(staminaValue);
    renderHealth(healthValue);
    setTimeout(() => {
        init();
    }, 5000);
}

function heroRevive() {
    textAnimation('> You have recieved a blessing', 2000);
    setTimeout(() => {
        staminaValue = 100;
        healthValue = 100;
        renderStamina(0);
        renderHealth(0);
        pray.disabled = true;
        textAnimation('> You feel refreshed', 2000);
    }, 2000);
}

function checkStatus() {
    if (healthValue <= 0 || staminaValue <= 0) heroDeath();
    if (staminaValue >= 100) staminaValue = 100;
    if (healthValue >= 100) healthValue = 100;
}

function textAnimation(text, time) {
    log.innerText = text;
    setTimeout(() => {
        log.innerText = '> ';
    }, time);
}

function choiceEvent() {
    let text;
    let favDrink = prompt("What's your favorite cocktail drink?", "Daiquiri");
    switch (favDrink) {
        case "Martini":
            text = "Excellent choice. Martini is good for your soul.";
            break;
        case "Daiquiri":
            text = "Daiquiri is my favorite too!";
            break;
        case "Cosmopolitan":
            text = "Really? Are you sure the Cosmopolitan is your favorite?";
            break;
        default:
            text = "I have never heard of that one..";
    }
    document.getElementById("demo").innerHTML = text;
}




