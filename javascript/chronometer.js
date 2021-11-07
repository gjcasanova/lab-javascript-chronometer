class Chronometer {
  constructor() {
    this.currentMillis = 0;
    this.currentTime = 0;
    this.intervalId = null;
    this.millisIntervalId = null;
  }

  start(callback) {
    this.millisIntervalId = setInterval(() => {
      this.currentMillis += 1;
      if (callback) callback();
    }, 1);

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMillis() {
    return this.currentMillis % 1000;
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();
    if (valueString.length > 2) {
      valueString = valueString.substring(0, 2);
    }
    let zeros = 2 - valueString.length;
    return `${'0'.repeat(zeros)}${valueString.toString()}`;
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMillis = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
