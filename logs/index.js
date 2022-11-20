const fs = require("fs");
const path = require("path");

const logStream = fs.createWriteStream(
  path.join(path.dirname(require.main.filename), "logs", "access.log")
);

module.exports = {
  logStream,
};
