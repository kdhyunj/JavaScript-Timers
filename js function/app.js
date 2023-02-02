// function difference (x, y){
//     return (x-y);
// }

// function product (a, b){
//     return (a * b);
// }


// function printDay(num){
//     let dates = {
//         1 : "Sunday",
//         2 : "Monday",
//         3 : "Tuesday",
//         4 : "Wednesday",
//         5 : "Thursday",
//         6 : "Friday",
//         7 : "Saturday",
//     };
//     return dates[num];
// }

// function lastElement(arr){
//     return arr[arr.length-1];
// }


// function numberCompare (x, y){
//     if (x === y){
//     return "Numbers are equal";}
//     else if (x > y){
//         return "First is greater";
//     }
//         return "Second is greater";
// }


// function singleLetterCount (word, letter){
//     let finalCount = 0;
//     for (let i = 0; i < word.length; i++){
//         if (word[i].toLowerCase() === letter.toLowerCase()){
//             finalCount++;
//         }
//     }
//     return finalCount;
// }

// function multipleLetterCount (str){
//     str = str.toLowerCase();
//     let finalObj = {};
//     for (let i = 0; i < str.length; i++){
//         if (finalObj[str[i]] === undefined){
//             finalObj[str[i]] = 1;
//         }
//         else {
//             finalObj[str[i]]++;
//         }
//     }
//     return finalObj;
// }

// function arrayManipulation (arr, cmd, loc, value) {
//     if (cmd === "remove"){
//         if (loc === "end"){
//             return arr.pop ();
//         } 
//             return arr.unshift(); 
//     }
//     else if (cmd === "add"){
//         if(loc === "end"){
//             arr.push(value)
//             return arr;
//         }
//             arr.unshift(value)
//             return arr;
//     }
// }


// function isPalindrome (str) {
//     return str.toLowerCase().split(' ').reverse().join(' ') === str.toLowerCase();
// }


// function RPS(){
//     function determineComputer (num){
//         if (num <= .33) return "rock";
//         else if(num <= .66) return "paper";
//         return "scissor";
//     }
//     let userChoice = prompt ("Choose rock / paper, or scissor").toLowerCase();
//     let computerChoice = determineComputer(Math.random());

//     let answers  = ["rock", "paper", "scissors"];

//     if (!userchoice || answers.indexOf(userChoice)=== -1){
//         return "Please choose a valid option";
//     }
//     if (userChoice === computerChoice) return "Tie!";
//     if (userChoice === "rock" && computerChoice === "paper"){
//         return "You lose, computer picked" + computerChoice;
//     }
//     if (userChoice === "paper" && computerChoice === "scissor"){
//         return "You lose, computer picked" + computerChoice;
//     }
//     if (userChoice === "scissor" && computerChoice === "rock"){
//         return "You lose, computer picked" + computerChoice;
//     }
//     return "You win! Computer picked " + computerChoice;
// }


