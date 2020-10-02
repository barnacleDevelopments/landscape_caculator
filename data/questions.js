const Question = require("../classes/Question");

let questions = [
  new Question("number", "enter house number", "houseNumber"),
  new Question("number", "enter property depth (feet)", "feetDepth"),
  new Question("number", "enter property width (feet)", "feetWidth"),
  new Question(
    "string",
    "enter type of grass (fescue, bentgrass, campus)",
    "grassType"
  ),
  new Question("number", "enter the number of trees", "numTrees"),
];

module.exports = questions;
