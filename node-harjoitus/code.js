// Node-harjoitukset

let content = document.querySelector("#content");
let hr = document.createElement("hr");
content.appendChild(hr);

let h3 = document.createElement("h3");
h3.textContent = "Samuli";
content.appendChild(h3);

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "Sunnuntai";
ul.appendChild(li);

let turha = document.querySelector("ul li:first-child");
turha.remove();

let ul2 = document.querySelector("ul li");
let li2 = document.createElement("li");
li2.textContent = "Maanantai";
ul2.parentElement.insertBefore(li2, ul2);

let ul3 = document.querySelector("ul li:last-child");
li3 = document.createElement("li");
li3.textContent = "Välipäivä";
ul3.parentElement.insertBefore(li3, ul3);

let items = document.querySelectorAll("ul:first-child li");

for (item of items) {
    let text = item.textContent;
    item.textContent = "";

    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);
}

// Atribuutti- ja tyyliharjoitukset

let last = document.querySelector(".last"); 

last.classList.add("lastModified");

function changeColor(){
    let elems = document.querySelectorAll("ul:first-child li");

    for (const elem of elems){
        elem.classList.toggle("color");
    }

}
function changeSize(){
let elems = document.querySelectorAll("li");

for (const e of elems) {
    if(e.textContent.length < 10) {
        e.classList.add("sizeup");
    }
}
}