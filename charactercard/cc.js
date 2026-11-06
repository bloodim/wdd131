// const health = Number(document.querySelector('#health').textContent);
// const level = Number(document.querySelector('#level').textContent);

const card = document.querySelector('.card');
// const attackButton = document.querySelector('#attack');
// const levelUpButton = document.querySelector('#level');
// console.log(health, level);

const character = {
    img: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
    name: 'Snortleblat',
    class: 'Swamp Breast Diplomat',
    health: 100,
    level: 5,
    levelUp: function() {
        
        if (this.health === 0) {
            this.level = this.level;
        }
        else {
            this.level++;
        }
    },
    attacked: function() {
        this.health -= 20;
        if (this.health < 0) {
            this.health = 0;
            alert('Game Over, you have lost all life.');
        }
    }
    
};


function characterCard(character) {
    return `
        <img src="${character.img}" alt="Character Image" class="image">
        <h1 class="name">${character.name}</h1>
        <div class="stats">
            <p><b>Class:</b> <span id="class">${character.class}</span></p>
            <p ><b>Level:</b> <span id="level">${character.level}</span></p>
            <p ><b>Health:</b> <span id="health">${character.health}</span></p> 
        </div>

        <div class="buttons">
            <button id="attack">Attacked</button>
            <button id="levelButton">Level Up</button>
        </div>
      `;
}

card.innerHTML = characterCard(character);

document.querySelector('#levelButton').addEventListener('click', function() {
    character.levelUp();
    document.querySelector('#level').textContent = character.level;
});
  
document.querySelector('#attack').addEventListener('click', function() {

    character.attacked();
    document.querySelector('#health').textContent = character.health;
});

