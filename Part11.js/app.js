// Bubbling
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(lis of li){
//     lis.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

// Activity

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");


// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);

//     ul.appendChild(item);
//     // console.log(inp.value);
//     inp.val = "";
// });

// ul.addEventListener("click", function(event){ //Event Delegation
//     console.dir(event.target.nodeName);
//     if(event.target.nodeName == "Button"){
//         let listitem = event.target.parentElement;
//         listitem.remove();
//         // console.log(listitem);
//         console.log("deleted"); 
//     }
//     // console.log("button clicked");

// })

// let delBtns = document.querySelectorAll(".delete"); //this delete btn not use on other data without parent so for apply in this we use "Delegation".
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         // console.log("element deleted");
//         let par = this.parentElement;
//         // console.log(par);
//         par.remove();
//     });
// }



//Simon Game

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level =0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000);
}

function levelUp(){
    level++;
     h2.innerText = `level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    console.log(randColor);
    console.log(randbtn);
    console.log(randIdx);
    btnFlash(randbtn);
}