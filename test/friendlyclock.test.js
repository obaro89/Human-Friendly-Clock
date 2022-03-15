const FriendlyClock = require("../friendlyClock");

const clock = new FriendlyClock();

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
