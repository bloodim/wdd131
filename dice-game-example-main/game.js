// 1. Click on button

document.querySelector('#rollButton').addEventListener("click", event => {
    // 2. animate the die
    setDieImages('assets/die_rolling.gif');
    // 3. land on a new random number 
    setTimeout(() => {
        // this funciton will run after the timeout duration specified below in between } and )
        
        // console.log();
        setDieImages(document.querySelector('#gameboard img').src);
        // document.querySelectorAll('#gameboard img').forEach(image => {
        //     let randomNumber = Math.ceil(Math.random() * 6);
        //     let randomDie = 'white_dice_' + randomNumber + '.gif';
        //     image.src = 'assets/' + randomDie;
        // });


    }, 2000);
});

function setDieImages(imagePath) {
     document.querySelectorAll('#gameboard img').forEach(image => {
        // change image src to the animated gif
        if (imagePath === 'assets/die_rolling.gif') {
            image.src = imagePath;      
        }
        else {
            let randomNumber = Math.ceil(Math.random() * 6);
            let randomDie = 'white_dice_' + randomNumber + '.gif';
            image.src = 'assets/' + randomDie;
        }
    });
}