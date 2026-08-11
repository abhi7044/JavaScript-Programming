let todo = []; // Initialize an empty array to store todo items

let req = prompt("please enter your request"); // Prompt the user for their request

while(true){ // Start an infinite loop to continuously process user requests
    if(req == "quit"){ //  Check if the user wants to quit the application
        console.log("Quitting app."); // Log a message indicating that the application is quitting
        break; // Exit the loop and terminate the application
    }

    if(req == "list"){ // Check if the user wants to list the todo items
        console.log("**********");
        for(let i =0 ; i<todo.length; i++){ // Loop through the todo array and log each item with its index
            console.log(i, todo[i]); 
        }
        console.log("**********");
    }else if(req == "add"){ // Check if the user wants to add a new todo item
        let task = prompt("please enter the task you want to add"); // Prompt the user for the task they want to add
        todo.push(task); // Add the new task to the todo array
        console.log("task added");
    } else if(req == "delete"){ // Check if the user wants to delete a todo item
        let index = prompt("please enter the index of the task you want to delete"); // Prompt the user for the index of the task they want to delete
        todo.splice(index, 1); // Remove the task at the specified index
        console.log("task deleted");
    } else {
        console.log("wrong request"); // Log a message indicating that the request is unknown
    }
    req = prompt("please enter your request");
    }


// Questioons: 1 ==> Write a JS program to delete all occurrences of element ‘num’ in a given array.
const num = 2;
arr = [1, 2, 3, 4, 5, 6, 2, 3];
for(let i =0; i<arr.length; i++){
    if(arr[i] === num){
        arr.splice(i, 1); // Remove the element at index i if it matches 'num'
        i--; // Decrement i to account for the removed element
    }
    console.log(arr[i]);
}

// Question: 2 ==> write a  js program to find the no of digits in a number . 
let numm = 287152;
let count = 0;
for(let i =0; i<numm.toString().length; i++){
    count = count + 1;
}
console.log(count);

let number = 287152;
let copy = number; // Create a copy of the number to avoid modifying the original number
let caunt = 0; // Initialize the digit count
while(copy > 0){
    copy = Math.floor(copy / 10); // Divide the number by 10 to remove the last digit
    caunt++; 
}
console.log(caunt);

// Question: 3 ==> write a js program to find the sum of digits in a number.
let Number = 287152;
let sum = 0; // Initialize the sum of digits
while(Number > 0){
    sum += Number % 10; // Add the last digit to the sum
    Number = Math.floor(Number / 10); // Remove the last digit from the number
}
console.log(sum); // Log the sum of the digits

// Question: 4 ==> write a js program to find the factorial of a number.
let numFactorial = 5;
let factorial = 1;
for(let i = 1; i<=numFactorial; i++){
    factorial *= i; 
}
console.log(`The factorial of ${numFactorial} is ${factorial}`); // Log the factorial of the number

// Question: 5 ===> find the largest number in an array with only positive numbers.
let array = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;
for(let i =0; i<array.length;i++){
    if(largest < array[i]){
        largest = array[i];
    }
}
console.log(`The largest number in the array is ${largest}`); // Log the largest number found in the array

// Question: 6 ===> reverse a number using js program.
let numberToReverse = 12345;
let reversedNumber = 0;
while(numberToReverse > 0){
    reversedNumber = reversedNumber * 10 + numberToReverse % 10; // Extract the last digit and add it to the reversed number
    numberToReverse = Math.floor(numberToReverse / 10);
}
console.log(`The reversed number is ${reversedNumber}`); // Log the reversed number