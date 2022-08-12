
// ACTIONS
    // Feed
    // Pet

// Player will start the game by entering their pet alien's name and hitting the start button. 
// Player will have to interact (feed & pet) with the object to keep it healthy and happy. 
// Need to set interval times that reduce fullness(hunger) and happiness overtime 
// Need to set win/loss rules
    // Player wins after keeping pet alive after time threshold
    // Player loses when happiness and hunger meters hit 0 before time threshold

// BUTTONS
const startBtn = document.querySelector('#start-button');
const feedBtn = document.querySelector('#feed-button');
const playBtn = document.querySelector('#play-button');
const actionBtn = document.querySelector('.action-buttons');
// PAGES
let mainPage = document.querySelector('.main-screen');
let gamePage = document.querySelector('.game-screen');
const screen = document.querySelector('.screen');

let aImg = document.querySelector('#alien-body');

let message = document.querySelector('.message');

// TIME
let ticks = 0;

// NEW OBJECT
class Aliengotchi {
    constructor(hunger=100, happiness=100) {
        this.hunger = hunger;
        this.happiness = happiness;
    }
    eat() {
        this.hunger += 10;
    }
    play() {
        this.hunger -= 5;
        this.happiness += 10;
    }
    ticks() {
        this.hunger --;
        this.happiness -=2;
    }
}

// NEW ALIEN
const alien = new Aliengotchi();

// EVENT LISTENERS
feedBtn.addEventListener('click', function() {
    alien.eat();
});
playBtn.addEventListener('click', function () {
    alien.play();
});
startBtn.addEventListener('click', function (e) {
    e.preventDefault();
    getNameValue();
    startGame();
}); 

// FUNCTION TOGGLE

document.querySelector('.game-screen').classList.toggle('hide');

function startGame() {
    document.querySelector('.main-screen').classList.toggle('hide');
    document.querySelector('.game-screen').classList.toggle('hide');
    }

function loseAction() {
    document.querySelector('.action-buttons').classList.toggle('hide');
    aImg.src = './Assets/alien-died.png';
}

let interval = setInterval(alienFunction, 500); 

// ALIEN FUNCTION 
function alienFunction() {
    hMeter.value = alien.hunger;
    hapMeter.value = alien.happiness;
    alien.ticks();
    if ((hMeter.value >= 60) || (hapMeter.value >= 60)) {
        aImg.src='./Assets/alien-happy.png';
    };

    if (hapMeter.value <= 60) {
        aImg.src = './Assets/alien-sad.png';
    };

    if (hMeter.value <= 60) {
        aImg.src = './Assets/alien-hungry.png';
    };
        
    if ((hMeter.value <= 33) || (hapMeter.value <= 33)) {
        aImg.src = './Assets/alien-sad.png';
    };
        
    if ((hMeter.value <= 0) || (hapMeter.value <= 0)) {
        clearInterval(interval);
        loseAction();
        message.innerHTML = 'You done now lost!'
    };
    }

let hMeter = document.querySelector('#hunger')
let hapMeter = document.querySelector('#happiness')

// ALIEN NAME FUNCTION

function getNameValue() {
    let alienName = document.querySelector('#name-input').value;
    document.querySelector('#alien-name').innerHTML = alienName
}