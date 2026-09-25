
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    let body = document.querySelector('body');
    if (current == 'dark') {
        // code for changes to colors and logo
        
        body.style.backgroundColor = '#1a201c';
        document.querySelector('h1').style.color = 'white';
        const text = document.querySelectorAll('p');
        const list = document.querySelectorAll('li');
        
        let a = 0;
        while (text.length > a) {
            text[a].style.color = "white";
            a++;
            
        }
        let b = 0;
        while (list.length > b) {
            list[b].style.color = "white";
            b++;
        }
        document.querySelector('img').src = 'byui-logo-white.png';
      
    } else {
        // code for changes to colors and logo
       document.querySelector('img').src = 'byui-logo-blue.webp';
        body.style.backgroundColor = 'white';   
        document.querySelector('h1').style.color = 'black';     
        const text = document.querySelectorAll('p');
        const list = document.querySelectorAll('li');
        
        let a = 0;
        while (text.length > a) {
            text[a].style.color = "black";
            a++;
            
        }
        console.log(a);
        let b = 0;
        while (text.length >= b) {
            list[b].style.color = "black";
            b++;
        }
    }
}           
                    