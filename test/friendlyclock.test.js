const FriendlyClock = require("../friendlyClock");

const clock = new FriendlyClock();

//test the methods
describe("Test the methods", () => {
  it("Should return the time when the program was executed", () => {
    expect(clock.getCurrentTime()).toEqual(
      expect.objectContaining({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
      })
    );
  });

  it("Should return the 12hour format of a given hour", () => {
    expect(clock.timeToHourClock(14)).toEqual(2);
    expect(clock.timeToHourClock(12)).toEqual(12);
    expect(clock.timeToHourClock(22)).toEqual(10);
    expect(clock.timeToHourClock(18)).toEqual(6);
  });

  it("Should return the word equivalent of an input(number)", () => {
    expect(clock.cardinals[44]).toEqual("Forty-four");
    expect(clock.cardinals[1]).toEqual("One");
    expect(clock.cardinals[59]).toEqual("Fifty-nine");
    expect(clock.cardinals[17]).toEqual("Seventeen");
  });
});

//test for user input
describe("Test for user inputs", () => {
  it("Should return invalid input in a simple case of wrong input", () => {
    expect(clock.readTimeToText("18:er")).toEqual("Invalid Input");
    expect(clock.readTimeToText("ab:er")).toEqual("Invalid Input");
    expect(clock.readTimeToText("ft:19")).toEqual("Invalid Input");
  });

  it("Should return a message in a case where input does not contain colon", () => {
    expect(clock.readTimeToText("12.55")).toEqual(
      "Hour and Minute should be separated by a colon (:)"
    );
    expect(clock.readTimeToText("17;55")).toEqual(
      "Hour and Minute should be separated by a colon (:)"
    );
    expect(clock.readTimeToText("22-55")).toEqual(
      "Hour and Minute should be separated by a colon (:)"
    );
    expect(clock.readTimeToText("22/5")).toEqual(
      "Hour and Minute should be separated by a colon (:)"
    );
    expect(clock.readTimeToText("22*58")).toEqual(
      "Hour and Minute should be separated by a colon (:)"
    );
  });
});

//testing the input ranges

describe("Test the range of the inputs", () => {
  test("In a case where the hour exceeds 23", () => {
    expect(clock.readTimeToText("24:01")).toEqual(
      "Hour should not be greater than 23"
    );
  });

  test("In a case where the Minute exceeds 59", () => {
    expect(clock.readTimeToText("23:60")).toEqual(
      "Minute should not be greater than 59"
    );
  });

  test("In a case where the hour or minute is negative", () => {
    expect(clock.readTimeToText("-4:50")).toEqual("Time cannot be negative");

    expect(clock.readTimeToText("4:-30")).toEqual("Time cannot be negative");
  });
});
