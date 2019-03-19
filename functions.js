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

function showContainer(element) {
  if (element.classList.contains('hide-form')) {
    element.classList.remove('hide-form');
    element.classList.add('show-form');
  } else {
    element.classList.add('show-form');
  }
}

function hideContainer(element) {
  if (element.classList.contains('show-form')) {
    element.classList.remove('show-form');
    element.classList.add('hide-form');
  } else {
    element.classList.add('hide-form');
  }
}

function addCategory(value) {
  const option = document.createElement('option');
  option.innerHTML = `<option value="${value}">${value}</option>`;
  dropdownMenu.appendChild(option);
}

function resetTimer() {
  watch.reset();
}

function logTimer() {
  stopTimer();
  hideContainer(tableContainer);
  hideContainer(stopwatchContainer);
  showContainer(formContainer);
  console.log(watch.date.getMinutes(watch.time));
}
