
let img = document.querySelector('.map img');
let posX = document.getElementById('posX');
let posY = document.getElementById('posY');
let up = document.getElementById('up');
let dw = document.getElementById('dw');
let dx = document.getElementById('dx');
let sx = document.getElementById('sx');
let stamina = document.getElementById('stamina');

let x = 0;
let y = 0;

staminaStart = 100;
staminaRatio = 5;
stamina.style.width = `${staminaStart}%`;

img.src = 'img/start-woods.jpg';
posX.innerText = x;
posY.innerText = y;

up.addEventListener('click', () => {
    x++;
    staminaStart -= staminaRatio;
    stamina.style.width = `${staminaStart}%`;
    posX.innerText = x;
});

dw.addEventListener('click', () => {
    x--;
    staminaStart -= staminaRatio;
    stamina.style.width = `${staminaStart}%`;
    posX.innerText = x;
});
dx.addEventListener('click', () => {
    y++;
    staminaStart -= staminaRatio;
    stamina.style.width = `${staminaStart}%`;
    posY.innerText = y;
});
sx.addEventListener('click', () => {
    y--;
    staminaStart -= staminaRatio;
    stamina.style.width = `${staminaStart}%`;
    posY.innerText = y;
});




