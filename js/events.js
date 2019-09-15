// LISTENERS
up.addEventListener('click', () => {
    x++;
    posX.innerText = x;
    staminaValue -= staminaRatioMove;
    checkStatus();
    renderStamina();
    renderPosition();
    renderMap();
});

dw.addEventListener('click', () => {
    x--;
    posX.innerText = x;
    staminaValue -= staminaRatioMove;
    checkStatus();
    renderStamina();
    renderPosition();
    renderMap();
});

dx.addEventListener('click', () => {
    y++;
    posY.innerText = y;
    staminaValue -= staminaRatioMove;
    checkStatus();
    renderStamina();
    renderPosition();
    renderMap();
});

sx.addEventListener('click', () => {
    y--;
    posY.innerText = y;
    staminaValue -= staminaRatioMove;
    checkStatus();
    renderStamina();
    renderPosition();
    renderMap();
});

rest.addEventListener('click', () => {
    let hoursRest = prompt('> how many hours you want to rest? ', 'More your rest, more the risk');
    let dice = diceRoll(100);
    console.log(dice)
    if (dice <= (5 * hoursRest)) {
        position = [10, 10];
        renderMap();
    } else {
        healthValue += Math.floor(healthValue * (hoursRest / staminaRatioRest));
        staminaValue += Math.floor(staminaValue * (hoursRest / healthRatioRest));
        textAnimation(`You sleep ${hoursRest} hours and feel better`, 2000);
        console.log(Math.floor(staminaValue * (hoursRest / healthRatioRest)))
    }
    checkStatus();
    renderHealth();
    renderStamina();
    rest.disabled = true;
});

pray.addEventListener('click', () => diceRoll(12) % 2 != 0 ? heroRevive() : heroDeath());

run.addEventListener('click', () => {
    if (diceRoll(100) <= 30) {
        x = diceRoll(2);
        y = diceRoll(2);
        posX.innerText = x;
        posY.innerText = y;
        staminaValue -= staminaRatioRun;
        renderPosition();
        renderMap();
        renderStamina();
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
    heroAttack(hammerDamage);
    monsterAttack();
});

eye.addEventListener('click', () => {
    textAnimation('a wired pendant with incarved a green stone', 2000);
})

search.addEventListener('click', () => {
    staminaValue -= staminaRatioSearch;
    renderStamina();
    checkEvent();
    setTimeout(() => {
        let dice = diceRoll(4);
        switch (dice) {
            case 0:
            case 1:
                checkItems(weapon);
                break;
            case 2:
            case 3:
                checkItems(armor);
                break;
            default:
                textAnimation('You find nothing interesting', 2000);
        }
    }, 2000);
});

weapon.addEventListener('click', () => {
    weapon.disabled = true;
    weapon.style.color = 'red';
    hammerDamage = 20;
    textAnimation('You brandish a nice hammer. You feel the power', 2000);
});

armor.addEventListener('click', () => {
    armor.disabled = true;
    armor.style.color = 'red';
    armourDefence = 20;
    textAnimation('You wear a nice leather jacket. You look cool', 2000);
});

guide.addEventListener('click', () => {
    alert('Go around and survive, I will put a nice guide later');
})
