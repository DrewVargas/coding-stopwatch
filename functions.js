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

function categoryList() {
  let categoryStore = localStorage.getItem('categories');

  if (categoryStore) {
    const categoryList = JSON.parse(localStorage.getItem('categories'));

    categoryList.forEach(category => addCategory(category));
  }
}

function displayTable() {
  let inStorage = localStorage.getItem('time');

  if (inStorage) {
    const timeList = JSON.parse(localStorage.getItem('time'));

    timeList.forEach(item => watch.addTime(item));
  }
}

function categorySelect() {
  const categoryValue = categoryInput.value;
  addCategory(categoryValue);
  watch.storeCategory(categoryValue);
  dropdownMenu.value = categoryValue;
  console.log(dropdownMenu.value);
  categoryInput.value = '';
}

function logButton() {
  if (watch.time === 0) {
    logBtn.classList.add('log-btn');
    logBtn.disabled = true;
  } else if (watch.time > 0) {
    logBtn.classList.remove('log-btn');
    logBtn.disabled = false;
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

function disableRowButton() {
  const descriptionValue = descriptionInput.value;
  const categoryValue = dropdownMenu.value;
  if (descriptionValue === '' || categoryValue === '') {
    submitBtn.classList.add('log-btn');
    submitBtn.disabled = true;
  } else if (descriptionValue.length > 0 || categoryValue.length > 0) {
    submitBtn.classList.remove('log-btn');
    submitBtn.disabled = false;
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
  console.log(watch.time);
}
