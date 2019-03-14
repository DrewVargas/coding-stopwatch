class Stopwatch {
  constructor(elem) {
    this.time = 0;
    this.offset;
    this.interval;
    this.isOn = false;
    this.elem = elem;
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

    if (minutes >= '59' && seconds > '59') {
      hours++;
      hours = `0${hours}`;
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
