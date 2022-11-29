// basic-harjoitukset

let node1 = document.querySelector("#content");

console.log(node1.tagName);

let node2 = document.querySelector(".basic");

console.log(node2.tagName);

let elem1 = document.querySelector("li");

console.log(elem1.textContent);

let elem2 = document.querySelector("ul>:last-child");
console.log(elem2.textContent);

// collections -harjoitukset

let bodyDesc = document.querySelectorAll("body *");


for (elems of bodyDesc) {
    console.log(elems.nodeName);
}

let pElems = document.querySelectorAll("article p");

for(elem of pElems) {
    console.log(elem.textContent)
}

let liElems = document.querySelectorAll("li");

for(elem of liElems){
    elem.textContent="John Doe"
}

let elem3 = document.querySelectorAll("#content *");

for(elem of elem3){
    if(elem.textContent.length > 10){
        console.log(elem.nodeName);
    }
}
