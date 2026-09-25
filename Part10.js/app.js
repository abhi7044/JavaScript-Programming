// let btn = document.querySelectorAll("button");
// for (btns of btn) {
//     btns.onclick = sayHello;
//     btns.onmouseenter = function () {
//         console.log("you entered a button");
//     };
//     console.dir(btn);
// }

// btn.onclick = function () {
    // console.log("button was clicked");
//     alert("button was clicked");
// };

// function sayHello(){
//     alert("Hello");
// }


// function sayName(){
//     alert("apna college");
// }

// btn.onclick = sayHello;

// EventListener ?
// for (btns of btn) {
    // btns.addEventListener("click", sayHello);
    // btns.addEventListener("click", sayName);
//     btns.addEventListener("dblclick", function (){
//         alert("you double clicked me");
//     });

// }
 
// Activity
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
    // console.log("generate random color");
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// Event Listener of elements:->

// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("para wa clicked");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside box");
// });

// this in event listeners
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

// Keyboard Events
// let btn = document.querySelector("button");
// btn.addEventListener("click" ,function(event){
//     console.log(event);
//     console.log("button clicked");
// });  //this all the above will be mouse event 
// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
    // console.log(event.code);
    // if(event.code == "KeyU"){
        // console.log("character moves up");
    // } else if(event.code == "ArrowDown"){
        // console.log("character moves backword");
    // } else if(event.code == "ArrowLeft"){
        // console.log("character moves left");
    // } else if(event.code == "ArrowRight"){
        // console.log("character moves right");
    // }
    // console.log(event.key);
    // console.log(event.keyCode);
    // console.log("key was pressed");
// })

// Form event
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.dir(form);
//     let user = this.elements[0];
//     let pass = this.elements[1];
    
    // alert("form submited");
    // let inp = document.querySelector("input");
    
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    // console.dir(inp);
    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Hi ${user.val}, you password is set to ${pass.val}`);
// });

// More events

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function(){
//     console.log("input changed");
//     console.log("final value = ", this.value)
// });

// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("final value = ", this.value)
// });



let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText = inp.value;
});