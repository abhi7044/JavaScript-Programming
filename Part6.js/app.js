//Function 
function hello(){
    console.log("hello");
}


function printName(){
    console.log("apna sapna");
    console.log("abhijeet");
}
printName();

function printnum(){
    for(let i = 1; i<= 5 ; i++){
        console.log(i);
    }
}

printnum();

function isAdult(){
    let age = 18;
    if (age>18) {
        console.log("adult");
    }else{
        console.log("not adult");
    }
}

isAdult();

// Practice Question:- Create a function that creates a poem
function printPoem(){
    console.log("Twinkle Twinkle, little star");;
    console.log("how I wonder what you are");
}
printPoem();

// Practice Question: create a function t roll a dice and always display the value of the dice
function rollDice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}
rollDice();
rollDice();
rollDice();
rollDice(); 


// Functions with arguments
function printInfo(name, age){
    console.log(`${name}'s and age is ${age}.`);
}
printName("abhijeet", 22);

function sum(a, b){
    console.log(a+b);
}
sum(1, 2);
sum(4, 5); 

// Practice Questio: create a function that gives us average of 3 number.
function average(a, b, c){
    console.log((a+b+c)/3);
}
average(3, 2, 10);

// Practice Question: create a functin that prints the multiplicationo table of a number
function printTable(n){
    for(let i = n; i <= n*10; i = i+n){
        console.log(i);
    }
}
printTable(5);

// Return function
function sum(a,  b){
    return a+b;
}
console.log(sum(sum(1,2), 3));

function summ(a, b){
    console.log("helloo");
    console.log("hello");
    return a+b;
    console.log("hello2");
    console.log("hello2");
}
console.log(sum(1,2));

function isadult(age){
    if(age >= 18){
        return "adult";
    }else{
        return "not adult";
    } 
}

// Create a function the returns the sum of numbers frm 1 to n 
function getSum(n){ 
    let sum = 0; 
    for(let i =1; i<=n ; i++){
        sum += i;
    }
    return sum;
}

// Practice Question: returns the concatination of all strings in an array
let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
} 