const timer = document.getElementById('timer');
const toggleBtn = document.getElementById('toggle');
const resetBtn = document.getElementById('reset');
const stopwatchContainer = document.querySelector('.stopwatch-container');
const logBtn = document.getElementById('log-time');
const clearBtn = document.getElementById('clear');
const tableBody = document.querySelector('.table-body');

const watch = new Stopwatch(timer);

toggleBtn.addEventListener('click', toggleTimer);

resetBtn.addEventListener('click', resetTimer);

clearBtn.addEventListener('click', clearStorage);

logBtn.addEventListener('click', logTimer);

document.addEventListener('DOMContentLoaded', displayTable);
