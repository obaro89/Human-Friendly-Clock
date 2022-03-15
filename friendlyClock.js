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
    if (hour == 0) {
      hour = 12;
    }
    return Math.abs(hour);
  }

  //convert the time digits to readable text
  readTimeToText(inputTime = false) {
    let hour;
    let minute;
    //check if user inputed a time value
    if (inputTime) {
      //split the value to validate
      const [h, m] = inputTime.split(":");

      //if the split was successful, then variable b would be available

      if (!m) {
        return "Hour and Minute should be separated by a colon (:)";
      }

      //split the inputed time to get the hour and minute
      //check if hour and minute are valid numbers

      if (isNaN(h)) return "Invalid Input";
      if (isNaN(m)) return "Invalid Input";

      //if validation is successful, the code is executed to this point
      hour = parseInt(h);
      minute = parseInt(m);

      //check if the hour and/or minute are out of range

      if (hour > 23) return "Hour should not be greater than 23";
      if (minute > 59) return "Minute should not be greater than 59";

      //check if the hour or minute is negative

      if (hour < 0 || minute < 0) return "Time cannot be negative";
    } else {
      //get the hour and minute keys from the object returned from getCurrentTime method
      hour = this.getCurrentTime().hour;
      minute = this.getCurrentTime().minute;
    }

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
        this.timeToHourClock(hour + 1)
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
