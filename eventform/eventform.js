const form = document.querySelector('#eventForm');
const studentID = document.querySelector("#studentID");
const accessCode = document.querySelector('#accessCode');
const output = document.querySelector("#output");

accessCode.style.display = 'none';
studentID.style.display = 'none';



function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}


form.addEventListener('change', (event) => {
    let type = form.ticketType.value;

    if(type === 'student') {
        studentID.style.display = 'flex';
        accessCode.style.display = 'none';

    }
    
    if(type === 'guest') {
        accessCode.style.display = 'flex';
        studentID.style.display = 'none';
    }
});



form.addEventListener("submit", (event) => {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.ticketType.value;
    const eventDate = form.eventDate.value;
    const student = form.id.value.trim();
    const guest = form.code.value.trim();

    const eventBorder = document.querySelector('#eventDate');
    const guestBorder =  document.querySelector('#code');
    const studentBorder =  document.querySelector('#id');

    if(student.length < 9 && type === 'student') {
        output.textContent = "Student ID must be 9 digets, please verify you entered the correct numbers";
        document.querySelector('#id').style.borderBlockColor = 'red';
        return;
    }

    if(guest != 'EVENT131' && type === 'guest') {
        output.textContent = "Error, event code not found. Please check your input and try again.";
        document.querySelector('#code').style.borderBlockColor = 'red';
        return;
    }

    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a date in the future.";
        document.querySelector('#eventDate').style.borderBlockColor = 'red';
        return;
    }

    if(form.ticketType.value === 'student') {

         studentBorder.style.borderBlockColor = 'black';
        guestBorder.style.borderBlockColor = 'black';
        eventBorder.style.borderBlockColor = 'black';

        output.innerHTML = `
            <h2>Ticket Created</h2>
            <p>${firstName} ${lastName}</p>
            <p>${email}</p>
            <p>${type}</p>
            <p>${eventDate}</p>
            <p>${student}</p>
            `;
    }

    if(form.ticketType.value === 'guest') {

        studentBorder.style.borderBlockColor = 'black';
        guestBorder.style.borderBlockColor = 'black';
        eventBorder.style.borderBlockColor = 'black';
        
            output.innerHTML = `
            <h2>Ticket Created</h2>
            <p>${firstName} ${lastName}</p>
            <p>${email}</p>
            <p>${type}</p>
            <p>${eventDate}</p>
            <p>${guest}</p>
            `;

            
    }

      form.reset();


});


