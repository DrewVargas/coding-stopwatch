class Stopwatch {
  constructor() {
    this.time = 0;
    this.offset;
    this.interval;
    this.isOn = false;
  }

  delta() {
    let now = Date.now();
    let timePassed = now - this.offset;
    this.offset = now;
    return timePassed;
  }

  timeFormatter(timeInSec) {
    let time = new Date(timeInSec);
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let hours = '00';

    if (minutes.length < 2) {
      minutes = `0${minutes}`;
    }

    if (seconds.length < 2) {
      seconds = `0${seconds}`;
    }

    if (minutes === '60') {
      hours++;
      hours = `0${hours}`;
    }

    return `${hours} : ${minutes} : ${seconds}`;
  }

  start() {
    if (!this.isOn) {
      this.interval = setInterval(() => {
        this.time += this.delta();
        console.log(this.timeFormatter(this.time));
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
  }
}
