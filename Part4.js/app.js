// For loop 
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

for(let i = 5; i >= 1; i--) {
    console.log(i);
}

for(let i = 10; i >= 1; i = i-3) {
    console.log(i);
}

// Print all the odd numbers from 1 to 15
for(let i =1; i <=15; i = i+2){
   console.log(i);
}

// print all the even numbers from 2 to 10
for(let i =2; i <=10; i = i+2) {
    console.log(i);
}

// Infinite loop
// for(let i = 1; i >= 0; i++) {
//     console.log(i);
// }
// for(let i = 1; i <= 5; i--) {
//     console.log(i);
// }
// for(let i =1; ; i++){
//     console.log(i);
// }

// multiplication table of 5
let n = prompt("Enter a number to print its multiplication table");
n = parseInt(n);
for(let i = n; i<= n*10; i = i+n) {
    console.log(i);
}

// for(let i = 5; i <= 50; i = i + 5) {
//     console.log(i);
// }

// Nested for loop
for(let i =1; i<=3; i++){
    console.log(`Outer loop iteration: ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
} 

// while loop 
let i = 1;
while(i<= 5){
    console.log(i);
    i++;
}

let i =0;
while(i<=20){
    console.log(i);
    i = i + 2;
} 

// Favrite Movie
const favMovie = "avatar";
let guess = prompt("Guess my favorite movie");
while((guess != favMovie)){
    if(guess == "quit"){
        console.log("You quit");
        break;
    }   
    guess = prompt("Wrong guess, please try again");
}

if(guess == favMovie){
    console.log("Congratulations! You guessed it right");
}else{
    console.log("You quit the game");
}

// Break keyword 
let i = 1;
while(i<= 5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}

console.log("we used break at 3");

//Loops with Arrays
let fruits = ["apple", "banana", "orange", "grape", "mango"];
fruits.push("kiwi");
for(let i =0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

// Nested loops with Nested arrays
let heroes = [
    ["irnman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
]
for(let i = 0; i<heroes.length; i++){
    console.log(i, heroes[i], heroes[i].length);
    for(let j = 0; j<heroes[i].length; j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

// for of loop 

let fruits = ["apple", "banana", "orange", "grape", "mango"];
for(fruit of fruits){
    console.log(fruit);
}

for(char of "apnacollege"){
    console.log(char);
}

// Nested for of loop
let heroes = [
    ["irnman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
]
for(list of heroes){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}