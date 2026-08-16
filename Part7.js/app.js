// This in JavaScript
const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}


function getAvg(){
    console.log(this);
}

// Try and Catch
console.log("hello");
console.log("hello");
let a = 5;
try {
    console.log(a);
} catch(err) {
    console.log("caught an error... a is not defined");
    console.log(err);
}

console.log("hello2");
console.log("hello2");
console.log("hello2");


// Arrow functions
const sum = (a, b) => {
    console.log(a+b);
};

const cube = (n) => {
    return n*n*n;
};

const pow = (a, b) => {
    return a ** b;
};

// Implicit return in Arrow function
const mul = (a, b) => (
    a * b
); 

// Set Timeout
console.loog("Hi there!");

setTimeout(() => {
    console.log("Apna College");
}, 4000);

console.log("Welcome to");

// Set Interval
let id = setInterval(() => {
    console.log("Apna college")
}, 2000);

console.log(id);

// this with Arrow Functions
const student = {
    name: "aman",
    marks: 98,
    prop: this, // global scope
    
     
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //parent's scope -> window 
        return this.marks;
    },

    getInfo1: function(){
        setTimeout(()=> {
            console.log(this);  // student
        }, 2000);
    },
    getInfo2:function(){
        setTimeout(function () {
            console.log(this); // window
        }, 2000);
    }
};

// Practice Question: Write an arrow function that returns the square of a number 'n'.
const getsquare = (n) => (n*n);

// Practice Question: Write a function that prints "Hello World" 5 times at intervals of 2s each.

let idd = setInterval(() => {
        console.log("Hello World");
    }, 2000);
    

setTimeout(()=>{
    clearInterval(idd);
    console.log("exit");
}, 10000);

// Question 1: write an array function named array average that accepts an array of numbers and return the average of those number?

let arr = [1, 2, 3, 4, 5, 6];

const arrayAverage = (arr) => {
    let total = 0;
    for(let i of arr){
        total += i;
    }
    return total/arr.length;
}

console.log(arrayAverage(arr));


// Question 2: Write an arrow function named is Even() that takes a single number as argument and returns if it is even or not.

let n = 4;

const isEven = (n) => {
    if (n %2 == 0) {
        console.log("even");
    }else{
        console.log("odd");
    }
}

console.log(isEven(n));

// or

const iseven = (n) => (n%2 ==0);



// Question 3: What will be the output

const object = {
    message: 'Hello, World!',

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(() => 
    object.logMessage
, 1000);