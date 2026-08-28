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
console.log(isAdult(43));

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

// Scope

// function scope
let sum = 54; //Gloabal Scope

function calsum(a, b){
    let sum = a+b; //Function Scope
    console.log(sum);
}
calsum(1, 2);
console.log(sum); 

//Block Scope = this not use on the var , only use on the let and const
{
    const a = 25;
    console.log(a);
}


for(let i =1; i<= 5 ; i++){
    console.log(i);
}

let age = 25;
if(age >= 18){
    let str = "adult";
    
    console.log(str);
}

// Lexical Scope = nested function 
function outerFunction(){
    let x =5;
    let y =6;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}  // hoisting 

// Practice Question : what will be the output 
let greet = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreen(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();



// Function Expressions
const sum = function(a, b){
    return a+b;
}
sum(2, 3);

let hello = function(){
    console.log("hello");
}
hello = function(){
    console.log("namaste");
}

// Higher Order Functions = take one or multiple functionas argument.
function multipleGreet(func, count){
    for(let i = 1; i<= count; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet, 2);

// Higher Order Functions = return as function 



function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n) {
            console.log(!(n%2 == 0));
        }
        
    } else if(request == "even"){
            
        return function(n) {
            console.log(n%2 == 0);
        }
        
    }else {
        console.log("Wrong request");
    }
}

let request = "odd"; // even

// Methods
const calculator = {
    num: 55,
    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};

const calci = {
    add(a, b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    },
    mult(a,b){
        return a*b;
    }
};



// SHEET QUESTION 

// Question 1: write a js function that return array elements larger than a number
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function greaterNum(arr, num){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
greaterNum(arr, num);

// Question 2: write a js function to extract uniquecharacter
let str = "abcabcdefgggh";
let ans = "";
function uniqueCharacter(str){
    for(let i =0; i <= str.length; i++){
        let currchar = str[i];
        if(ans.indexOf(currchar) == -1){
            ans += currchar;
        }
    }
}
return ans ;


// Question 3: write a java script function to country names as input and return the longest country name as output .
let country = ["Australia", "Germany", "United States of America"];

function largestName(country){
    let ansIdx =0;
    for(let i = 0; i<=country.length; i++){
        let anslen = country[ansIdx].length;
        let currlen = country[i].length;
        if(currlen > anslen){
            ansIdx = i;
        }
    }
    return country[ansIdx];vhj
}
largestName(country);


// Question 4: write a javaScript to count the number of vowels in a string argument.

let str = "apnacollege";

function CountVowel(str){
    let count =0;
    for(let i =0 ; i<str.length; i++){
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u" 
        ){
            count++;
        }
    }
    return count;
}
CountVowel(str);


// Question 5: write a javascript function to fenerate an random with range (start, end)
let start = 100;
let end = 200;

function generaterandom(start, end){
    let diff = end - start;
    return Math.floor(Math.random()* diff)+start;
}
generaterandom(start, end);