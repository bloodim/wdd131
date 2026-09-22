// select html document from the DOM
// save it to a local variable called heading
let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "#ff0000"; // change the color of the heading to red
heading.style.fontSize = "3em"; // change the font size of the heading to 1.5em
heading.style.letterSpacing = "1.5em"; // change the letter spacing of the heading to 0.5em 
heading.style.display = "grid"; // change the display of the heading to grid

// different ways to select elements from the DOM

document.getElementById("topics"); // select an element by its ID

// you can select more than one element at a time
console.log(document.querySelectorAll(".list"));// select all elements with the class "list"

let topicsClassList = document.querySelector("#topics").classList;
topicsClassList.add("special"); // add a class to the element with the ID "topics"
topicsClassList.toggle("special");

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
