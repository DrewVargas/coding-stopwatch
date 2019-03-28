const timer = document.getElementById('timer');
const toggleBtn = document.getElementById('toggle');
const resetBtn = document.getElementById('reset');
const stopwatchContainer = document.querySelector('.stopwatch-container');
const logBtn = document.getElementById('log-time');
const clearBtn = document.getElementById('clear');
const tableContainer = document.querySelector('.table-container');
const tableBody = document.querySelector('.table-body');
const formContainer = document.querySelector('.form-container');
const xBtn = document.querySelector('.x-btn');
const formHeader = document.getElementById('form-header');
const descriptionInput = document.getElementById('description');
const categoryInput = document.getElementById('add-category');
const categoryBtn = document.getElementById('add-btn');
const dropdownMenu = document.getElementById('dropdown');
const submitBtn = document.getElementById('submit-btn');

const watch = new Stopwatch(timer);

setInterval(logButton, 1000);
setInterval(disableRowButton, 1000);

categoryBtn.addEventListener('click', e => {
  e.preventDefault();
  categorySelect();
});

toggleBtn.addEventListener('click', toggleTimer);

resetBtn.addEventListener('click', resetTimer);

clearBtn.addEventListener('click', clearStorage);

logBtn.addEventListener('click', () => {
  formHeader.textContent = watch.timeFormatter(watch.time);
  logTimer();
  dropdownMenu.value = '';
});

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  watch.logTime();
  hideContainer(formContainer);
  showContainer(stopwatchContainer);
  showContainer(tableContainer);
  document.location.reload();
  descriptionInput.value = '';
  dropdownMenu.value = '';
});

xBtn.addEventListener('click', () => {
  hideContainer(formContainer);
  showContainer(stopwatchContainer);
  showContainer(tableContainer);
  descriptionInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  displayTable();
  categoryList();
});
