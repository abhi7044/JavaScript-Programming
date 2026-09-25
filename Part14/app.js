// Part 1

async function greet() {
    throw "some random error";
    return "hello!";
}

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was : ", result);
})
.catch((err) => {
    console.log("promise was rejected with err : ", err);
})

let demo = async () => {
    return 5;
};

// Part 2

function getnum() {
    return new Promise((resolve, rejece) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function getdemo()  {
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    getnum();
} 

// Part 3

h1 = document.querySelector("h1");
function colorchange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hadling rejection
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                reject("promist rejected");
            }
            //  
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    handling rejection 
    try {
        await colorchange("red", 1000);
        await colorchange("red", 1000);
        await colorchange("red", 1000);
        colorchange("red", 1000);
    } catch(err) {
        console.log("error caught")
        console.log(err);
    }

    handling rejection
    let a = 5;
    console.log(a);
    console.log("new number = ", a+3)
}


// part 4 => API

// Part 5 => Accessing some api
https://catfact.ninja/fact
https://www.boredapi.com/api/activity

// Part 6- Accessing JSON data
let jsonRes = 
    '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their mids.","length":78}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let student = {
    name: "abhijeet",
    maarks: 95
}; 
console.log(JSON.stringify(student.name));

// Part 7

// Pary 8

// Part 9: Adding Information in URL

// Part 10 : http headers

// Part 11: Our first api request

let url = "https://catfact.ninja/fact";

fetch(url)
.then((response) => {
    console.log(response);
    // console.log(response.json());
    return response.json();
})
.then((data) => {
        console.log("data1 = ", data.fact);
        return fetch(url);
})
.then((response) => {
    return response.json();
})
.then((data2) => {
    console.log("data2 = ", data2.fact);
})
.catch((err) => {
    console.log("ERROR - ", err);
})

// Part 12- our first request = using fetch with asyc await 
let url = "https://catfact.ninja/fact";
async function  getFacts() {
    try {
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log("data1 - ", data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2 - ", data2.fact);
    } catch(e) {
        console.log("error : ", e);
    }

    console.log("bye"); 
}
