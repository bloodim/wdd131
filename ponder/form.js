// const form = document.querySelector('#fsyForm');

// console.log(form.firstName);
// // grab the user input from the form

// // run a function when the user submits the form
// form.addEventListener('submit', (event) => {
//     // prevent default stops the page from reloading
//     // AND from dumping value as query params
//     event.preventDefault();

//     // console log email address
//     console.log(form.email.value);

//     // also can grab the values form the event.target
//     console.log(event.target.email.value);
// })


const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;

  // Show the travel notes on the form if they are choosing many campuses and require it
  
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

  // Validate the input
  // Let the user know to select at least one campus

  if(selectedCampuses.length == 0) {
    output.textContent = "Please select at least one campus prefrence";
    // exit function so the rest of the form doesn't submit
    return;
  }

  
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note

  
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses


  if(type === 'many' && selectedCampuses.length < 2 ) {
    output.textContent = "Please select two or more prefered campusus"
    return;
  }
  

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Campuses: ${selectedCampuses.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
          
