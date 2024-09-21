const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let isRunning = false;
let startTime;
let elapsedTime = 0;
let interval;

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;

        interval = setInterval(() => {
            let currentElapsedTime = Date.now() - startTime;

            let seconds = Math.floor(currentElapsedTime / 1000);
            let milliseconds = currentElapsedTime % 1000;

            document.getElementById('second').textContent = seconds;
            document.getElementById('ms').textContent = milliseconds.toString().padStart(3, '0');
        }, 1);
    }
});

stopButton.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
        elapsedTime = Date.now() - startTime;
    }
});

resetButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(interval);
    elapsedTime = 0;
    document.getElementById('second').textContent = 0;
    document.getElementById('ms').textContent = '000';
});