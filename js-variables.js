let age = 20;
let name = "Blood";


// js comment 
/* multiline comment */

console.log(age);

age = 34;

console.log(age);
const eyeColor = "blue";
const policyDisclaimers = "Exclusions apply to vehicles registered in Michigan";
let favoriteColor = "";

// scope is where  variables can be referenced
if(age ==34){
    // we are now in a different scope
    // inside this scope we can reference variables declared outside this scope
    console.log(name);

    // declare a variabel in an inner scope
    favoriteColor = "blue"
}

 console.log(favoriteColor)

 //pull something from the HTML page
 document.querySelector("h1").style.color = favoriteColor;