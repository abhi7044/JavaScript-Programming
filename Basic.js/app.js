// Lecture - 2  -----> Basic
console.log("Hello world");
console.log("Apna College"); 
let a = 10;
let b = 5;
console.log("Sum is: ", a + b);

// Lecture - 3  Template Literals
let pencilprice = 10 ;
let erasorprice = 5;
let output = `The total price is : ${pencilprice} Rupees.`;
console.log(output);

// Lecture - 4   Operator in java script 
let x = 10;
let y = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a++);
console.log(++a);
console.log(++a);
y = x;
console.log(y);

// Lecture - 5 ---> Comparison operator
let age = 23;
console.log(age>18);
let num = 5; 
let str = '5';
console.log(num == str); // return true;
console.log(num === str); // return false;

// Lecture - 6 -----> comparison for non - numeric
console.log('a' > 'A');
console.log('a' > 'b');
console.log('b' < 'c');
console.log('B' < 'C');
console.log('*' < '&');

// Lecture - 8 ---> If statement
console.log("before my if statement");
let agee = 23;
if (agee >= 18) {
    console.log("You can vote");
}
console.log("after my statement");

let firstname = "Abhijeet";
if (firstname == "Abhijeet") {
    console.log(`Welcome ${firstname}`);
}

//Practice Question  - red for stop , yellow for slow down, green for go
let color = "red"; 
if (color === "red") {
    console.log("Stop");
}
if (color === "yellow") {
    console.log("Slow down");
}
if (color === "green") {
    console.log("Go");
}

//Lecture - 10  ---> else if condition 
let markes = 75;
if (markes >= 80) {
    console.log("A+");
}else if (markes >= 60) {
    console.log("A");
}else if (markes >= 33) {
    console.log("B");
}else if (markes < 33) {
    console.log("F");
}

// Lecture 11  ----> else statement 
let aage = 18;
if (aage >= 18) {
    console.log("You can vote");
} else {
    console.log("You can not vote");
}

let colorr = "red"; 
if (colorr === "red") {
    console.log("Stop");
}else if (colorr === "yellow") {
    console.log("Slow down");
}else if (colorr === "green") {
    console.log("Go");
} else {
    console.log("Your traffic light are broken");
}

// Lecture 12 - Practice Question 
let size = "XL";
if (size === "XL") {
    console.log("Price is Rs. 250");
} else if (size === "L") {
    console.log("Price is Rs. 200");
} else if (size === "M") {
    console.log("Price is Rs. 100");
} else if (size === "S") {
    console.log("Price is Rs. 50");
} else {
    console.log("Invalid size");
}

// Lecture 13 ----> Nested if else
let marks = 44;
if ( marks >= 33) {
    if (marks >= 80) {
        console.log("O");
    }else {
        console.log("A");
    }
}else {
    console.log("Better luck next time!");
}

// Lecture 14 ----> Logical operator 
let markks = 90;
if(markks >= 33 && markks >= 80){
    console.log("pass");
    console.log("A+");
}
let markss = 90;
if(markss >= 33 || markss <= 80){
    console.log("pass");
    console.log("A+");
}
let marksss = 75;
if(!(marksss < 33)){
    console.log("pass");
    console.log("A+");
}   //Left to right associativity

//Lecture 15 --->Practice Question 
let strr = "apple";
if (strr[0] === "a" && strr.length > 3) {
    console.log("good string");
}else{
    console.log("bad string");
}

let nnum = 12;
if((nnum%3 === 0 ) && ((nnum+1 == 15) || (nnum-1 ==11))){
    console.log("safe");
} else{
    console.log("unsafe");
}

// Lecture 16 ---> truthy and falsy value
if(true){
    console.log("it has true value");
}else{
    console.log("it has false value");
}

// lecture 17 ---> Switch case statement 
let colorrr = "red";
switch (colorrr) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken light ");
    } 

// Lecture 18 ---> Practice Question 
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Lecture 19 ---> Alert, Prompt 
alert("Something is wrong");
console.log("This is error message");
console.error("This is an error message");
console.warn("This is a warning message");

prompt("enter your name?");
let firstttname = prompt("enter yur name :");
console.log(firstttname);

let firsttname = prompt("enter your name :");
let lastname = prompt("enter your last name :");
console.log(`Welcome ${firsttname} ${lastname} !`);
