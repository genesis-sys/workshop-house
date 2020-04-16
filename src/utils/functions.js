const path = require("path");

module.exports = {
  statics_files() {
    return path.resolve("./backup/index.html");
    // const url = path.resolve("./backup/index.html");
    // console.log(url);
  },

  handle_ideas(ideas = [], len = 0) {
    const reversedIdeas = [...ideas].reverse();

    const lastIdeas = [];

    for (let idea of reversedIdeas) {
      if (lastIdeas.length < len) {
        lastIdeas.push(idea);
      } else if (len === 0) {
        lastIdeas.push(idea);
      }
    }

    return lastIdeas;
  },
};
