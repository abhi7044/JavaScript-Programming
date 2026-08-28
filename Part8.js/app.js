// forEach
let arr = [1, 2, 3, 4, 5];

let print = function(el){
    console.log(el);
};

arr.forEach(print); 
// or
arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function(el){
    console.log(el);
});

let array = [{
        name: "aman",
        marks: 98
    }, 
    {
        name: "bhumi",
        marks: 94
    },
    {
        name: "abhijeet",
        marks: 97
    }
];

array.forEach((student) => {
    console.log(student.marks);
}); 

// Map


let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el*2;
})


let studentss = [
    {
        name: "aman",
        marks: 95
    }, 
    {
        name: "bhumi",
        marks: 94.4
    }, 
    {
        name: "abhijeet",
        marks: 92
    },
];
let gpa = studentss.map((el) => {
    return el.marks/10;
});


// Filter

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter( (num) => (num % 2 == 0) );


// Every
// Some

// Reduce

let nums = [1, 2, 3, 4];
let finalval = nums.reduce((res, el) => {
    console.log(res);
    return res+el; 
});
console.log(finalval);

// Find Maximum in array

let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];

let max = -1;
for(let i =0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}

console.log(max);


let ans = arr.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});

console.log(ans);


// Practice Question => check if all the number are multiple of 10 or not 
let nums = [10, 20, 30, 40];

let ans = nums.every((el) => el % 10 == 0);
console.log(ans);

// Practice Question => Create a function to find the min number in an array
let Nums = [10, 20, 30, 40, 5];
function getMin(Nums){
    let min = Nums.reduce((min, el) => {
    if(min < el){
        return min;
    }else {
        return el;
    }
});

return min;
}
//oor
let nums = [10, 20, 30, 40, 5];

let min = nums.reduce((min, el) => {
    if(min < el){
        return min;
    }else {
        return el;
    }
});
console.log(min);


// Default Parameters
function sum(a, b = 3) {
    return a + b;
}

sum(2);  // 5


// Spread (Array Literals)
let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];

console.log(newArr);

let chars = [..."hello"];

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];  // o/p = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

// Spread (object literals)

const data = {
    email: "google@gmail.com",
    password: "preetam2344"
};

const datacopy = {...data, id: 123 } 

let arra = [1, 2, 3, 4, 5];
let obj1 = {...arra};

// Rest
function sum(...args){
    for(let i =0; i<args.length; i++){
        console.log("you gave us:", args[i]);
    }
}

function ssum(...args){
    return args.reduce((ssum, el) => sum + el);
}

function min(msg, ...args){
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el){
            return el;
        }else{
            return min;
        }
    });
} 

function min(a, b , c, d){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments.reduce((min))) // this will give the wrong answer so for that we have to use the rest
}


// Destructuring
let names = ["tony", "bruce", "peter", "steve"];
let [winner, runnerup, secondrunnerup] = names;
let [winner, runnerup, ...others] = names; //combining the destructuring and rest
console.log(winner, runnerup, secondrunnerup)


// Destructuring (objects)
const student = {
    name: "karan",
    age: 14,
    class: 9,
    subject: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd", 
    city: "pune"
};

// let username = student.username;
// let password = student.password;
let {username: user, password: secret, city: place ="Mumbai"} = student;
console.log(student);


// Question -1 --> Square and sum the array elements using the arrow function and then finding the average of the array 

let array = [1, 2, 3, 4, 5];

const square = array.map((num) => num*num);
console.log(square);

let sum = square.reduce((curr, el) => curr+el , 0);
let avg = sum / array.length;
console.log(avg);


// Question -2 --> create a newarray using the map function whose each element is equal to the original element plus 5?

let array = [1, 2, 3, 4, 5];

console.log(array.map((num) => num+5));

// Question 3--> create a newarray whose elements are in uppercase of words present in the original array

let strings = ["yara", "tanha", "mujhe", "paresan"];

console.log(strings.map((string) => string.toUpperCase()));

// Question 4--> write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. the function should rerturn a new array with original array values and all of the addiitional arguments double.

const doubleAndReturnArgs = (array, ...args) => [
     ...array, ...args.map((v) => v*2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4);

// Question 5 --> write a function called mergednjects that accepts tw onject and returns a new nject which cntains all the keys and values of the first nj and second obj

let mergedobject = (obj1, obj2) => ({...obj1, ...obj2});
mergedobject = ({a:1, b:2}, {c:3, d:4});