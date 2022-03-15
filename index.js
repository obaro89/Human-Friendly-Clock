#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const FriendlyClock = require("./friendlyClock");

const friendlyClock = new FriendlyClock();

program.version("1.0").description("Human friendly time to text");

program
  .description("Get the current human friendly time in text")
  .option("-t, --inputtime [inputtime]", "Enter time input")
  .action(() => {
    const options = program.opts();

    if (!options.inputtime) {
      console.log(friendlyClock.readTimeToText());
    } else {
      //validate that the time is in the required format

      const [, b] = options.inputtime.split(":");

      //if the split was successful, then variable b would be available

      if (!b) {
        console.log("Hour and Minute should be separated by a colon (:)");
        return;
      } else {
        console.log(friendlyClock.readTimeToText(options.inputtime));
      }
    }
  })
  .parse(process.argv);
