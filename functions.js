function init() {
    location.reload(true);
}

function renderPosition() {
    position[0] = x
    position[1] = y
    console.log(position)
}

function renderStamina() {
    staminaLeft -= staminaRatio;
    stamina.style.width = `${staminaLeft}%`;
}

function renderMap() {
    let newMap = maps
        .filter(element => JSON.stringify(element.position) == JSON.stringify(position));
    loc.innerText = newMap[0].location;
    desc.innerText = newMap[0].description;
    img.src = newMap[0].image;
    log.innerText = newMap[0].log;
    up.disabled = newMap[0].btnDisableUp;
    dw.disabled = newMap[0].btnDisableDw;
    dx.disabled = newMap[0].btnDisableDx;
    sx.disabled = newMap[0].btnDisableSx;
    fight.disabled = newMap[0].btnDisableFight;
    rest.disabled = newMap[0].btnDisableRest;
    run.disabled = newMap[0].btnDisableRun;
    luck.disabled = newMap[0].btnDisableLuck;
}

function diceRoll(range) {
    let diceRoll = Math.floor(Math.random() * range);
    console.log(diceRoll)
    return diceRoll;
}






