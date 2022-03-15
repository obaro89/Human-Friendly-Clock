const cardinals = require("./data");

class FriendlyClock {
  constructor() {
    this.cardinals = cardinals;
  }

  //get the current time
  getCurrentTime() {
    return {
      minute: new Date().getMinutes(),
      hour: new Date().getHours(),
    };
  }

  //convert time to 12hr convention
  timeToHourClock(hour) {
    hour = hour > 12 ? hour - 12 : hour;
    return hour;
  }

  //convert the time digits to readable text
  readTimeToText() {
    //destructure the hour and minute keys from the object returned from getCurrentTime method
    let { hour, minute } = this.getCurrentTime();

    //changing time to 12hr format
    hour = this.timeToHourClock(hour);

    //conditions to check minutes
    let command;
    if (minute == 0) {
      command = `${this.cardinals[hour]} O'clock`;
    } else if (minute == 30) {
      command = `Half past ${this.cardinals[hour].toLowerCase()}`;
    } else if (minute > 30) {
      command = `${this.cardinals[60 - minute]} to ${this.cardinals[
        hour + 1
      ].toLowerCase()}`;
    } else {
      command = `${this.cardinals[minute]} past ${this.cardinals[
        hour
      ].toLowerCase()}`;
    }

    return command;
  }
}

module.exports = FriendlyClock;
