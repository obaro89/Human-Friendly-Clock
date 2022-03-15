const express = require("express");
const FriendlyClock = require("./friendlyClock");

const friendlyClock = new FriendlyClock();

const app = express();

app.get("/", (req, res) => {
  return res.send();
});

app.get("/friendlytime", (req, res) => {
  let humanFriendlyText = friendlyClock.readTimeToText();
  return res.json({
    humanFriendlyText,
  });
});

app.get("/friendlytime/:time?", (req, res) => {
  if (req.params.time) {
    const [, b] = req.params.time.split(":");

    //validate the query params

    if (!b) {
      return res.status(400).json({
        error: "Hour and Minute should be separated by a colon (:)",
      });
    }

    //if validation is ok, return the time

    let humanFriendlyText = friendlyClock.readTimeToText(req.params.time);
    return res.json({
      humanFriendlyText,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
