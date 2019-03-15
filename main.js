const timer = document.getElementById('timer');
const toggleBtn = document.getElementById('toggle');
const resetBtn = document.getElementById('reset');
const stopwatchContainer = document.querySelector('.stopwatch-container');

const watch = new Stopwatch(timer);

function toggleTimer() {
  if (!watch.isOn) {
    watch.start();
    toggleBtn.textContent = 'Stop';
    toggleBtn.classList.add('stop');
    stopwatchContainer.classList.add('start');
  } else {
    watch.stop();
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.remove('stop');
    stopwatchContainer.classList.remove('start');
    watch.logTime();
  }
}

function resetTimer() {
  watch.reset();
}

toggleBtn.addEventListener('click', toggleTimer);

resetBtn.addEventListener('click', resetTimer);
