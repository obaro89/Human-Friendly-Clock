#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const FriendlyClock = require("./friendlyClock");

const friendlyClock = new FriendlyClock();

program.version("1.0").description("Human friendly time to text");

program
  .command("showtime")
  .alias("t")
  .description("Get the current human friendly time in text")
  .action(() => {
    console.log(friendlyClock.readTimeToText());
  })
  .parse(process.argv);
