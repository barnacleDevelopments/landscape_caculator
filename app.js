/*
==========================================
Assignment: Program 1 
Author: Devin Davis
Date: October 2, 2020
===========================================
*/

// Dependencies
const readlineSync = require("readline-sync");
const questions = require("./data/questions");
const chalk = require("chalk");

// function - caculate square footage
const caculateSquareFoot = (width, length) => width * length;

// function - check of more then
const caculateTreePrice = (num) => num * 100;

// function - caculate grass price
const caculateTotalGrassPrice = (grassPrice, squareFeet) => {
  let total = grassPrice * squareFeet;
  if (squareFeet > 5000) {
    return total + 500;
  } else {
    return total;
  }
};

const caculateTotal = (grassType, numTrees, feetDepth, feetWidth) => {
  let treePrice, grassTotal, grandTotal, squareFeet, grassPrice;

  grassPrice = getGrassPrice(grassType);

  treePrice = caculateTreePrice(numTrees);

  squareFeet = caculateSquareFoot(feetDepth, feetWidth);

  grassTotal = caculateTotalGrassPrice(grassPrice, squareFeet);

  grandTotal = grassTotal + treePrice + 1000;

  return grandTotal;
};

// function log an input error to console
const logInputErr = (err) => {
  console.log(`\n${chalk.red(err)}`);
};

// function check if grass is available
const isGrassAvailable = (grassType) => {
  switch (grassType.toLowerCase()) {
    case "fescue":
      return true;
    case "bentgrass":
      return true;
    case "campus":
      return true;
    default:
      return false;
  }
};

// function - get grass price
const getGrassPrice = (grassType) => {
  switch (grassType.toLowerCase()) {
    case "fescue":
      return 0.05;
    case "bentgrass":
      return 0.02;
    case "campus":
      return 0.01;
    default:
  }
};

// function - ask question
const askQuestion = (question) => {
  let anwser = readlineSync.question(question.name);
  if (question.propName === "grassType") {
    while (!isGrassAvailable(anwser)) {
      logInputErr(`\n"${anwser}": is not a not in the library!`);
      anwser = readlineSync.question(question.name);
    }
  }
  while (validateType(anwser, question.type)) {
    logInputErr(`\n${anwser}: is not a ${question.type}!`);
    anwser = readlineSync.question(question.name);
  }

  if (question.type === "number") {
    anwser = parseInt(anwser);
  }
  return anwser;
};

// function - log results
const logResults = (an) => {
  let total = caculateTotal(
    an.grassType,
    an.numTrees,
    an.feetDepth,
    an.feetWidth
  );

  console.log(
    `\nTotal cost for house ${an.houseNumber} is: $${total.toFixed(2)}`
  );
};

// function - validate anwser type
const validateType = (anwser, expectType) => {
  if (expectType === "number") {
    return isNaN(anwser);
  }

  if (expectType === "string") {
    return !isNaN(anwser);
  }
};

// function ask a set of questions
const askQuestions = (questions) => {
  let anwsers = {};
  questions.forEach((q) => {
    anwsers[q.propName] = askQuestion(q);
  });

  return anwsers;
};

logResults(askQuestions(questions));
