const express = require("express");
const { config } = require("dotenv");

const app = express();
config();

app.listen(process.env.PORT || 4000, (err) => {
  if (err) {
    return console.log(
      `Unable to start server at port:${process.env.PORT || 4000}.`
    );
  }
  return console.log(`Server started at the port ${process.env.PORT || 4000}.`);
});
