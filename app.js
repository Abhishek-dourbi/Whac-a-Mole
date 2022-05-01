const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const startButton = document.querySelector('.start-button');

let result = 0;
let hitPositiion;
let currentTime = 10;
let timerId = null;
let countDownTimerId = null;

function randomSquare() {
    squares.forEach(square => square.classList.remove('mole'));

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPositiion = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(hitPositiion === square.id) {
            result++;
            score.textContent = result;
            hitPositiion = null;
        }
    })
})

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over, Your final score is ' + result);
    }
}

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
    countDownTimerId = setInterval(countDown, 1000);
}

startButton.addEventListener('click', moveMole);