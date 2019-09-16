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
    rest.disabled = true;
    let hoursRest = prompt('> how many hours you want to rest? ');
    let dice = diceRoll(100);
    if (dice <= (10 * hoursRest)) {
        position = [10, 10];
        renderMap();
    } else {
        staminaValue += (hoursRest * staminaRatioRest);
        healthValue += (hoursRest * healthRatioRest);
        textAnimation(`You sleep ${hoursRest} hours and feel better`, 2000);
    }
    checkStatus();
    renderHealth();
    renderStamina();
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
    let boss = monsters.filter(element => element.name == 'Demogorgone');
    let noBoss = monsters.filter(element => element.name != 'Demogorgone');
    (newMap[0].location != 'MAPPA 11') ? renderMonster(noBoss, 3) : renderMonster(boss, 0);
});

roll.addEventListener('click', () => {
    heroAttack(baseDamage, hammerDamage);
    monsterAttack();
});

eye.addEventListener('click', () => {
    if (newMap[0].location != 'MAPPA 11') {
        textAnimation('a wired pendant with incarved a green stone', 2000);
    } else {
        eye.disabled = true;
        activeEye = 1;
        finalEvent();
    }
});

book.addEventListener('click', () => {
    if (newMap[0].location != 'MAPPA 11') {
        textAnimation('a book with ritual words in it', 2000);
    } else {
        book.disabled = true;
        activeBook = 1;
        finalEvent();
    }
});

search.addEventListener('click', () => {
    staminaValue -= staminaRatioSearch;
    renderStamina();
    checkEventItems();
    setTimeout(() => {
        let dice = diceRoll(ratioItemDrop);
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
    hammerDamage = 5;
    textAnimation('You brandish a nice hammer. You feel the power', 2000);
});

armor.addEventListener('click', () => {
    armor.disabled = true;
    armor.style.color = 'red';
    armourDefence = 5;
    textAnimation('You wear a nice leather jacket. You look cool', 2000);
});

guide.addEventListener('click', () => {
    alert('Go around and survive, I will put a nice guide later');
})
