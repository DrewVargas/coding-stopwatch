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
    this.timeList = [];
  }

  delta() {
    let now = Date.now();
    let timePassed = now - this.offset;
    this.offset = now;
    return timePassed;
  }

  logTime() {
    let date = `${this.month}/${this.date.getDate()}/${this.year}`;
    let weekDay = this.dayOfWeek[this.day];

    let stopwatchTime = {
      id: this.timeId,
      date: date,
      dayofWeek: weekDay,
      time: this.timeFormatter(this.time).replace(/\s/g, '')
    };
    this.timeId++;
    this.timeList.push(stopwatchTime);
    this.addTime(stopwatchTime);
    this.storeTime(stopwatchTime);

    // let month = this.dayOfWeek.getMonth();
    // let day = this.dayOfWeek.getDate();
    // let year = this.dayOfWeek
    //   .getFullYear()
    //   .toString()
    //   .slice(2);
    // let date = `${month}/${day}/${year}`;
    // console.log(typeof date);
    // console.log(this.timeFormatter(this.time));
  }

  storeTime(stopwatch) {
    let timeTable = localStorage.getItem('time')
      ? JSON.parse(localStorage.getItem('time'))
      : [];

    timeTable.push(stopwatch);

    localStorage.setItem('time', JSON.stringify(timeTable));
  }

  addTime(time) {
    const row = document.createElement('tr');
    row.innerHTML = `<tr>
    <td>${time.date}</td>
    <td>${time.dayofWeek}</td>
    <td>Working on stopwatch</td>
    <td>coding</td>
    <td>${time.time}</td>
  </tr>`;
    tableBody.appendChild(row);
  }

  timeFormatter(timeInSec) {
    let time = new Date(timeInSec);
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let hours = time.getHours().toString();
    hours = '0';

    if (minutes.length < 2) {
      minutes = `0${minutes}`;
    }

    if (seconds.length < 2) {
      seconds = `0${seconds}`;
    }

    if (hours.length < 2) {
      hours = `${hours}`;
    }

    return `${hours} : ${minutes} : ${seconds}`;
  }

  start() {
    if (!this.isOn) {
      this.interval = setInterval(() => {
        this.time += this.delta();
        let timeFormatted = this.timeFormatter(this.time);
        this.elem.textContent = timeFormatted;
      }, 1000);
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
