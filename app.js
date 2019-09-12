// VARIABLES
let img = document.querySelector('.map img');
let posX = document.getElementById('posX');
let posY = document.getElementById('posY');
let up = document.getElementById('up');
let dw = document.getElementById('dw');
let dx = document.getElementById('dx');
let sx = document.getElementById('sx');
let stamina = document.getElementById('stamina');
let health = document.getElementById('health');
let loc = document.getElementById('location');
let desc = document.getElementById('description');
let log = document.getElementById('log');
let rest = document.getElementById('rest');
let luck = document.getElementById('luck');
let run = document.getElementById('run');
let fight = document.getElementById('fight');

// INIT IMAGE
img.src = 'img/maps/start-woods.jpg';

// INIT POSITION
let x = 0;
let y = 0;
posX.innerText = x;
posY.innerText = y;

// INIT STATUS
let statusMultiplier = 10;
let staminaLeft = 100;
let staminaRatio = 10;
let healthLeft = 70;
let healthRatio = 10;
stamina.style.width = `${staminaLeft}%`;
health.style.width = `${healthLeft}%`;

// INIT BUTTONS
sx.disabled = true;
dw.disabled = true;
up.disabled = false;
dx.disabled = false;
fight.disabled = true;
run.disabled = true;
rest.disabled = false;
luck.disabled = true;

// INIT MESSAGE
let logStart = "You don't remember anything, your head hurts and some blood is leaking";
log.innerText = logStart;

// COORDINATES
let position = [x, y];

// A SIMPLE DICE :)
let dice;



