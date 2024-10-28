let blinkInterval;
const blinkingText = document.getElementById('Soumyaranjan Jena');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton.addEventListener('click', startBlinking);
stopButton.addEventListener('click', stopBlinking);

function startBlinking() {
    stopBlinking(); 
    blinkInterval = setInterval(() => {
        blinkingText.style.visibility = (blinkingText.style.visibility === 'hidden' ? '' : 'hidden');
    }, 500); // Blink every 500 milliseconds
}

function stopBlinking() {
    clearInterval(blinkInterval);
    blinkingText.style.visibility = ''; 
}
