// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");
let userWord = "" ;
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  
   // let userWord = "" ;
   
userWord = input.question("Welcome to Scrabble!\n\nEnter a word to score: ");   
// console.log(vowelBonusScorer(userWord));
}
   // console.log("Let's play some Scrabble!\n\nEnter a word to score: ");


let simpleScorer = function(word) {
   word = word.toUpperCase();
   let simplePoints = 0 ;
   for (let i = 0; i < word.length; i++){
simplePoints += 1 ; 
   }
   return simplePoints; 
}

let vowelBonusScorer = function(word){
   let bonusPoints = 0 ;
   word = word.toUpperCase();
   for (let i = 0; i < word.length; i++){
      if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U"){
         bonusPoints += 3 ;
      } else {
         bonusPoints += 1 ;
      }
        
   }
   return bonusPoints;
}

function scrabbleScorer(word){
   word = word.toLowerCase();
   let letterPoints = 0;
   for(let i = 0; i < word.length; i++){
      letterPoints += newPointStructure[word[i]];
   }
   return letterPoints;
}

let scrabbleScore = {
   name: "scrabble score",
   description: "The traditional scoring algorithms",
   scorerFunction: scrabbleScorer
};
let simpleScore = {
   name: "simple score", 
   description: "Each letter is worth 1 point",
   scorerFunction: simpleScorer
};
let bonusVowels = {
   name: "bonus vowel",
   description: "Vowels are worth 3 points, consonants are 1 point",
   scorerFunction: vowelBonusScorer
};


const scoringAlgorithms = [simpleScore, bonusVowels, scrabbleScore];

function scorerPrompt(word) {

let scorerFunction = input.question("Which scoring algorithm would you like to use?\n\n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\n Enter 0, 1, or 2:")

if (scorerFunction === "0"){
   console.log("Score for :", scoringAlgorithms[0].scorerFunction(word));
}
if (scorerFunction === "1"){
   console.log("Score for:", scoringAlgorithms[1].scorerFunction(word));
}
if (scorerFunction === "2"){
   console.log("Score for:",scoringAlgorithms[2].scorerFunction(word));
}
};

// console.log(scoringFunction)
function transform(oldPointStructure) {
   let newPointStructure = {};
   for(let key in oldPointStructure){
      for(let i = 0; i < oldPointStructure[key].length; i++){
         let letter = oldPointStructure[key][i].toLowerCase();
         newPointStructure[letter] = +key;
      
      }
   }
   //newPointStructure[' '] = 0;
   return newPointStructure
}

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt()
   scorerPrompt(userWord)
   // console.log(newPointStructure);
   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
