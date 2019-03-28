class Stopwatch {
  constructor(elem) {
    this.time = 0;
    this.offset;
    this.interval;
    this.isOn = false;
    this.elem = elem;
    this.date = new Date();
    this.dayOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    this.day = this.date.getDay();
    this.year = this.date
      .getFullYear()
      .toString()
      .slice(2);
    this.month = this.date.getMonth() + 1;
    this.timeId = 1;
  }

  delta() {
    let now = Date.now();
    let timePassed = now - this.offset;
    this.offset = now;
    return timePassed;
  }

  update() {
    this.time += this.delta();
    let timeFormatted = this.timeFormatter(this.time);
    this.elem.textContent = timeFormatted;
  }

  logTime() {
    const descriptionValue = descriptionInput.value;
    const categoryValue = dropdownMenu.value;
    let date = `${this.month}/${this.date.getDate()}/${this.year}`;
    let weekDay = this.dayOfWeek[this.day];

    let stopwatchTime = {
      id: this.timeId,
      description: descriptionValue,
      category: categoryValue,
      date: date,
      dayofWeek: weekDay,
      time: this.timeFormatter(this.time).replace(/\s/g, '')
    };
    this.addTime(stopwatchTime);
    this.storeTime(stopwatchTime);
  }

  storeTime(stopwatch) {
    let timeTable = localStorage.getItem('time')
      ? JSON.parse(localStorage.getItem('time'))
      : [];

    timeTable.push(stopwatch);
    stopwatch.id = timeTable.length;

    localStorage.setItem('time', JSON.stringify(timeTable));
  }

  storeCategory(category) {
    let newCategory = localStorage.getItem('categories')
      ? JSON.parse(localStorage.getItem('categories'))
      : [];

    if (!newCategory.includes(category.toLowerCase())) {
      newCategory.push(category);
      localStorage.setItem('categories', JSON.stringify(newCategory));
    } else if (newCategory.includes('')) {
      const index = newCategory.indexOf('');
      newCategory.splice(index, 1);
      localStorage.setItem('categories', JSON.stringify(newCategory));
    }
  }

  addTime(time) {
    const row = document.createElement('tr');
    row.innerHTML = `<tr>
    <td>${time.date}</td>
    <td>${time.dayofWeek}</td>
    <td>${time.description}</td>
    <td>${time.category}</td>
    <td>${time.time}</td>
  </tr>`;
    tableBody.appendChild(row);
  }

  timeFormatter(timeInSec) {
    let time = new Date(timeInSec);
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let hours = time.getUTCHours().toString();

    if (minutes.length < 2) {
      minutes = `0${minutes}`;
    }

    if (seconds.length < 2) {
      seconds = `0${seconds}`;
    }

    return `${hours} : ${minutes} : ${seconds}`;
  }

  start() {
    if (!this.isOn) {
      this.interval = setInterval(() => this.update(), 1000);
      this.offset = Date.now();
      this.isOn = true;
    }
  }

  stop() {
    if (this.isOn) {
      clearInterval(this.interval);
      this.interval = null;
      this.isOn = false;
    }
  }

  reset() {
    this.time = 0;
    this.elem.textContent = `${this.timeFormatter(this.time)}`;
  }
}
