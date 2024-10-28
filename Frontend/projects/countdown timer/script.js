let countdown;
let timeLeft = 10;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', startCountdown);

function startCountdown() {
    clearInterval(countdown); 
    timeLeft = 10; 
    timerElement.textContent = timeLeft; // Display initial time

    countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.textContent = "Time's up!";
        }
    }, 1000);
}
