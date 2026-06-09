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
let age = 23;
if (age >= 18) {
    console.log("You can vote");
}
console.log("after my statement");

let firstname = "Abhijeet";
if (firstname == "Abhijeet") {
    console.log(`Welcome ${firstname}`);
}