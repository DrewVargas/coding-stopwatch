const timer = document.getElementById('timer');
const toggleBtn = document.getElementById('toggle');
const resetBtn = document.getElementById('reset');

const watch = new Stopwatch(timer);

function toggleTimer() {
  if (!watch.isOn) {
    watch.start();
    toggleBtn.textContent = 'Stop';
    toggleBtn.classList.add('stop');
  } else {
    watch.stop();
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.remove('stop');
  }
}

function resetTimer() {
  watch.reset();
}

toggleBtn.addEventListener('click', toggleTimer);

resetBtn.addEventListener('click', resetTimer);
