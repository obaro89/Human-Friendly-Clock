const { Command } = require("commander");
const program = new Command();
const FriendlyClock = require("./friendlyClock");

const friendlyClock = new FriendlyClock();

program.version("1.0").description("Human friendly time to text");

program
  .option("-t, --inputtime [inputtime]", "Enter time input")
  .description("Get the current human friendly time in text")
  .parse(process.argv);

const options = program.opts();

if (!options.inputtime) {
  console.info("The user did not specify so get the default system time");
} else {
  console.log(options.inputtime);
}
