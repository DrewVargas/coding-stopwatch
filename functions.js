function toggleTimer() {
  if (!watch.isOn) {
    startTimer();
  } else {
    stopTimer();
  }
}

function startTimer() {
  watch.start();
  toggleBtn.textContent = 'Stop';
  toggleBtn.classList.add('stop');
  stopwatchContainer.classList.add('start');
}

function stopTimer() {
  watch.stop();
  toggleBtn.textContent = 'Start';
  toggleBtn.classList.remove('stop');
  stopwatchContainer.classList.remove('start');
}

function clearStorage() {
  localStorage.clear();
  document.location.reload();
}

function displayTable() {
  let inStorage = localStorage.getItem('time');

  if (inStorage) {
    const timeList = JSON.parse(localStorage.getItem('time'));

    timeList.forEach(item => watch.addTime(item));
  }
}

function resetTimer() {
  watch.reset();
}

function logTimer() {
  stopTimer();
  watch.logTime();
  watch.reset();
  console.log(watch.date);
}
