const Question = require("../classes/Question");

let questions = [
  new Question("number", "Enter house number", "houseNumber"),
  new Question("number", "Enter property depth (feet)", "feetDepth"),
  new Question("number", "Enter property width (feet)", "feetWidth"),
  new Question(
    "string",
    "Enter type of grass (fescue, bentgrass, campus)",
    "grassType"
  ),
  new Question("number", "Enter the number of trees", "numTrees"),
];

module.exports = questions;
