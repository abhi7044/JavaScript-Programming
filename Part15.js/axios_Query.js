let url = "http://universities.hipolabs.com/search?name=";
let bt = document.querySelector("button");

bt.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    console.log(colleges);
    show(colleges);
    // console.log("button was clicked");
})

function show(colleges) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of colleges) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

let country = "nepal"; 

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        // console.log(res.data);
        return res.data;
    } catch(e) {
        console.log("error : ", e);
        return [];
    }
}