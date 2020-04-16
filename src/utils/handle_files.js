const path = require("path");

module.exports = {
  statics_files() {
    return path.resolve("./backup/index.html");
    // const url = path.resolve("./backup/index.html");
    // console.log(url);
  },
};
