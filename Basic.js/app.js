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
let marks = 75;
if (marks >= 80) {
    console.log("A+");
}else if (marks >= 60) {
    console.log("A");
}else if (marks >= 33) {
    console.log("B");
}else if (marks < 33) {
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