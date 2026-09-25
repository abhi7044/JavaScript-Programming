// Lecture 1

// function hello() {
//     console.log("inside hello funx");
//     console.log("hello");
// }

// hello(); // function call

// function demo() {
//     console.log("calling hello funx");
//     hello();
// }

// console.log("calling demo funx");
// demo();
// console.log("done! bye");

// Lecture 2
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// Lecture 4

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

// setTimeout (() => {
//     console.log("Apna college");
// }, 2000);
// setTimeout (() => {
//     console.log("hello world");
// }, 2000);

// console.log("hello...");


// Lecture 5 
// h1 = document.querySelector("h1");

// function changeclr(color, delay, nextclrchange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextclrchange) nextclrchange();
//     }, delay);
// }

// changeclr("red", 1000);
// changeclr("orange", 2000);
// changeclr("green", 3000);

// changeclr("red", 1000, () => {
//     changeclr("orange", 1000, () => {
//         changeclr("green", 1000, () => {
//             changeclr("yellw", 1000, () => {
//                 changeclr("blue", 1000);
//             })
//         });
//     });
// });   //callbacks nesting -> callback hell

// Lecture 6
// function savetoDb(data, success, failure) {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if(internetspeed > 4) {
//         success();
//     }else {
//         failure();
//     }
// }



// savetoDb("apna College", ()=>{
//     console.log("success : your data was saved");
//     savetoDb("hello world", () => {
//         console.log("success2: data2 saved");
//         savetoDb("Abhijeet", () => {
//             console.log("success 3 : data3 save");
//         }, () => {
//             console.log("failure3: weak connection");
//         })
//     }, () => {
//         console.log("failure2: weak connection");
//     });
// }, 
// () => {
//     console.log("failure : weak connection. data not save");
// });


// Lecture 7

function savetoDb(data) {
   
    return new Promise((resolve, rejected) => {
        let internetspeed = Math.floor(Math.random() * 10) + 1;
        if(internetspeed > 4){
            success("success: data was save");
        }else {
            failure("failed: weak connection");
        }
    });
}

savetoDb("apna College");


// Lecture 8
