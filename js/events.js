// LISTENERS
up.addEventListener('click', () => {
    x++;
    posX.innerText = x;
    renderStamina(10);
    renderPosition();
    renderMap();
    checkStatus();
});

dw.addEventListener('click', () => {
    x--;
    posX.innerText = x;
    renderStamina(10);
    renderPosition();
    renderMap();
    checkStatus();
});

dx.addEventListener('click', () => {
    y++;
    posY.innerText = y;
    renderStamina(10);
    renderPosition();
    renderMap();
    checkStatus();
});

sx.addEventListener('click', () => {
    y--;
    posY.innerText = y;
    renderStamina(10);
    renderPosition();
    renderMap();
    checkStatus();
});

rest.addEventListener('click', () => {
    let hoursRest = prompt('> how many hours you want to rest? ', 'More your rest, more the risk');
    let dice = diceRoll(100);
    if (dice <= 10 + (4 * hoursRest)) {
        position = [10, 10];
        renderMap();
    } else {
        textAnimation(`You sleep ${hoursRest} hours and feel better`, 2000);
        healthValue += (hoursRest * statusMultiplier);
        staminaValue += (hoursRest * statusMultiplier);
    }
    checkStatus();
    renderHealth(0);
    renderStamina(0);
    rest.disabled = true;
});

pray.addEventListener('click', () => diceRoll(12) % 2 != 0 ? heroRevive() : heroDeath());

run.addEventListener('click', () => {
    if (diceRoll(12) % 2 != 0) {
        x = diceRoll(2);
        y = diceRoll(2);
        posX.innerText = x;
        posY.innerText = y;
        renderPosition();
        renderMap();
        renderStamina(30);
        textAnimation('> Your run desperate for your life', 2000);
    } else {
        textAnimation('> You try to run, with no success', 2000);
        run.disabled = true;
    }
    checkStatus();
});

fight.addEventListener('click', () => {
    renderMonster()
    run.disabled = true;
    pray.disabled = true;
});

roll.addEventListener('click', () => {
    heroAttack();
    monsterAttack();
});

search.addEventListener('click', () => {
    search.disabled = true;
    renderStamina(10);
    let dice = diceRoll(100);
    if (dice <= 10) {
        position = [10, 10];
        renderMap();
    } else if (dice <= 30) {
        textAnimation('> You found a crowbar!', 2000);
    } else {
        textAnimation('> Nothing happens', 2000);
    }
});
