// 1. Functions
function nameOfFunction(name) {
    console.log("Hello Functions! " + name); // string concatenation
    console.log(`hello world, my name is ${name}`) // string template using backticks
}

 
nameOfFunction("Nobody"); // Call the function

// 2. Event listeners
    // grab an element from the DOM to "listen" to
    let selectBox = document.querySelector("#theme-select");
    // register an event listener on the element
    // waiting for a specific thing to happen, then run a function
    selectBox.addEventListener("change", changeTheme);

    function changeTheme(event) {
        console.log(event.target.value);
    }

// 3. If statments


// copied code from ponder assignment
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          