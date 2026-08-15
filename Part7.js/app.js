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
    prop: this,
    
     
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.marks;
    }
};