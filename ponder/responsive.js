let menu = document.querySelector(".menu-btn")

// menu.addEventListener("click", function() {
//     let nav = document.querySelector("nav");
//     nav.classList.add("show");
//     menu.classList.toggle('change');
// });


menu.addEventListener("click", menuToggle);
 

function menuToggle() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("show");
    menu.classList.toggle('change');

} 


// // 
// if (nav.style.display === '') {
//     nav.style.display = 'flex';
// } else {
//     nav.style.display = '';
// }
// // ternary operator
// nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
