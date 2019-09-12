// LISTENERS
up.addEventListener('click', () => {
    x++;
    posX.innerText = x;
    renderStamina();
    renderPosition();
    renderMap();
});

dw.addEventListener('click', () => {
    x--;
    posX.innerText = x;
    renderStamina();
    renderPosition();
    renderMap();
});

dx.addEventListener('click', () => {
    y++;
    posY.innerText = y;
    renderStamina();
    renderPosition();
    renderMap();
});

sx.addEventListener('click', () => {
    y--;
    posY.innerText = y;
    renderStamina();
    renderPosition();
    renderMap();
});

rest.addEventListener('click', () => {
    let hoursRest = prompt('how many hours you want to rest? ');
    healthLeft += (healthRatio + (hoursRest * statusMultiplier / 2));
    staminaLeft += (staminaRatio + (hoursRest * statusMultiplier));
    health.style.width = `${healthLeft}%`;
    renderStamina();
});

luck.addEventListener('click', () => {
    dice = diceRoll(12);
    if (dice % 2 != 0) {
        log.innerText = `You have rolled a ${dice}`
        setTimeout(() => {
            log.innerText = 'You feel refreshed'
            stamina.style.width = '100%';
            health.style.width = '100%';
        }, 1500);
    } else {
        log.innerText = 'Your nightmare is restarting'
        img.src = 'img/events/death.jpg'
        stamina.style.width = '0%';
        health.style.width = '0%';
        setTimeout(() => {
            stamina.style.width = '0%';
            health.style.width = '0%';
            init();
        }, 3000);
    }
});

run.addEventListener('click', () => {
    dice = diceRoll(12);
    if (dice % 2 != 0) {
        x = diceRoll(2);
        y = diceRoll(2);
        posX.innerText = x;
        posY.innerText = y;
        position = [x, y]
        renderMap();
        log.innerText = 'Your run desperate for your life'
    } else {
        log.innerText = 'You try to run, with no success'
        run.disabled = true;
    }
});

