// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i<smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of miage no. ${i} is changed.`); 
// } 

// console.dir(document.querySelectorAll("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a"))

// let links = document.querySelectorAll(".box a");

// for(let i =0; i<links.length; i++){
//     links[i].style.color = "yellow";
// }

// for(link of links){
//     link.style.color = "yellow";
// }


// Practice Question  1: a <p> with red text that  says "hey i'm red"
// let para = document.createElement("p");

// para.innerText = "Hey I'm red";
// document.querySelector("body").append(para);
// para.classList.add("red"); 

// 2: an <h3> with blue text that says "I'm a blue h3!"
// let h3 = document.createElement("h3");

// h3.innerText = "I'm a blue h3";
// document.querySelector("body").append(h3);
// h3.classList.add("blue"); 

// 3: a <div> with a black border and pink background colr with the fllowing elements inside of it:
// let div = document.createElement('div')
// let h1 = document.createElement('h1');
// let Para = document.createElement('p');

// h1.innerText = "I'm in a div";
// Para.innerText = "ME TOO!";
// div.append(h1);
// div.append(Para);

// div.classList.add("box");
// document.querySelector("body").prepend(div);

// Question's 1: create a new input and button element an page using Javascript only. Set the text of button to "click me".
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Question 2: Add following attributes to the element: -change placeholder value of input to "username", and - change id of button to btn.
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// Access the btn using the querySelctor and button id . change the button iid. change the button background color to blue and text color to white.
let btn = document.querySelector("#btn");
btn.classList.add("btnstyle");

// Question : 4 create an h1 element on the page and set its text to "DOM Practice" underlined. change its color to purpole.
let h1 = document.createElement("h1");
h1.innerHTML = "<u> DOM Practice </u>";
h1.classList.add("clor");
document.querySelector("body").append(h1);

// Question 5: create a p tag on the page and set its text to "apna college Delta practice", where delta is bold
let p = document.createElement("p");
p.innerHTML = "Apna college <b> Delta </b> Practice"; 
document.querySelector("body").append(p);