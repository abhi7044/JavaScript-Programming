// Object literals notation
const student = {
    name: "Abhijeet",
    age: 22, 
    marks: 94.4
};

let student2 = ["Abhijeet", 22, 94.4];

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"]
};

// Creating a Post
const post= {
    username: "@abhijeet",
    content: "This is my first post",
    likes: 100,
    reposts: 5, 
    tags: ["@apnacollege", "@delta"]
};

// Conversion of get values
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

// Add / Update Values
const student3 = {
    name: "abhijeet",
    age: 22, 
    marks: 94.4,
    city: "Delhi"
};

//Nested object

const classsInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
};

//Array of Object
const classInfo = [
    {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
    }
];

// Math Object
 
// Random Integer
let num = Math.random();
num = num*10;
num = Math.floor(num);
num = num+1;

// Guessing Game = user enters a max number and then tries to guess a randon generated number between 1 to max.
const max = prompt("enter the maximum number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess = random){
        console.log("you are right! congrats!!", random);
        break;
    }else if(guess < random){
        guess = prompt("hint: your guess was too small");
    } else if(guess > random){
        guess = prompt("hint: your guess was too large.")
    }
}