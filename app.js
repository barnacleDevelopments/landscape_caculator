/*
==========================================
Assignment: Program 1 
Author: Devin Davis
Date: October 2, 2020
===========================================
*/

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

const caculateTotal = (anwsers) => {
  let treePrice, grassTotal, grandTotal, squareFeet, grassPrice;

  grassPrice = getGrassPrice(anwsers.grassType);

  treePrice = caculateTreePrice(anwsers.numTrees);

  squareFeet = caculateSquareFoot(anwsers.feetDepth, anwsers.feetWidth);

  grassTotal = caculateTotalGrassPrice(grassPrice, squareFeet);

  grandTotal = grassTotal + treePrice + 1000;

  logResults(grandTotal, anwsers.houseNumber);
};

// log an input error to console
function logInputErr(err) {
  console.log(`\n${chalk.red(err)}`);
}

// function - ask question
const askQuestion = (question) => readlineSync.question(question);

// function - get grass price
const getGrassPrice = (grassType) => {
  switch (grassType) {
    case "fescue":
      return 0.05;
    case "bentgrass":
      return 0.02;
    case "campus":
      return 0.01;
    default:
      throw error("Grass type not included in library!");
  }
};

// function - log results
const logResults = (total, address) => {
  console.log(`Total cost for house ${address} is : ${total}`);
};

// function - validate anwser type
const validateType = (anwser, expectType) => {
  console.log(anwser);
  if (expectType === "number") {
    logInputErr(`${anwser}: is not a number!`);
    return isNaN(anwser);
  }

  if (expectType === "string") {
    logInputErr(`${anwser}: is not a string!`);
    return !isNaN(anwser);
  }
};

// function ask a set of questions
const askQuestions = (questions) => {
  let anwsers = {};
  questions.forEach((q) => {
    anwsers[q.propName] = askQuestion(q.name);
    while (validateType(anwsers[q.propName], q.type)) {
      anwsers[q.propName] = askQuestion(q.name);
    }
    if (q.type === "number") {
      anwsers[q.propName] = parseInt(anwsers[q.propName]);
    }
  });
  console.log(anwsers);
  return anwsers;
};

caculateTotal(askQuestions(questions));
