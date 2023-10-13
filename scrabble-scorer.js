// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

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

function initialPrompt(word) {
   word = word.toUpperCase();
   // let userWord = "" ;
   
userWord = input.question("Welcome to Scrabble, what is your word? ");   
console.log(vowelBonusScorer(userWord));
}
   console.log("Let's play some Scrabble!\n\nEnter a word to score: ");


let simpleScorer = function(word) {
   
   let simplePoints = 0 ;
   for (let i = 0; i < word.length; i++){
simplePoints += 1 ; 
   }
   return simplePoints; 
}

let vowelBonusScorer = function(word){
   let bonusPoints = 0 ;
  
   for (let i = 0; i < word.length; i++){
      if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U"){
         bonusPoints += 3 ;
      } else {
         bonusPoints += 1 ;
      }
        
   }
   return bonusPoints;
}

let scrabbleScorer = {
   name: "scrabble score",
   description: "The traditional scoring algorithms",
   scorefunction: oldScrabbleScorer
};
let simpleScore = {
   name: "simple score", 
   description: "Each letter is worth 1 point",
   scorefunction: simpleScorer
};
let bonusVowels = {
   name: "bonus vowel",
   description: "Vowels are worth 3 points, consonants are 1 point",
   scorefunction: vowelBonusScorer
};


const scoringAlgorithms = [simpleScore, bonusVowels, scrabbleScorer];

function scorerPrompt(word) {

let scoringFunction = input.question("Which scoring algorithm would you like to use?\n\n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points\n 2 - Scrabble: Uses scrabble point system\n Enter 0, 1, or 2:")

if (scoringFunction == 0){
   console.log("Score for:", scoringAlgorithms[0].scorefunction(word));
}
if (scoringFunction == 1){
   console.log("Score for:", scoringAlgorithms[1].scorefunction(word));
}
if (scoringFunction == 2){
   console.log("Score for:", scoringAlgorithms[2].scorefunction(word));
}
};
// console.log(scoringFunction)
function transform() {};

let newPointStructure;

function runProgram() {
   scorerPrompt()

   
   
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
