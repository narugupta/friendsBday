const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function updateCarousel(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
});

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
    });
});

updateCarousel(currentIndex);


// game.js

let player1 = "Player1";
let player2 = "Player2";

function editNames() {
    player1 = prompt("Change Player1 Name")
    player2 = prompt("Change Player2 Name")

    if (player1.length < 1 || player2.length < 1) {
        alert('please enter valid name');
        return;
    }
    document.querySelector("p.Player1")
        .innerHTML = player1;

    document.querySelector("p.Player2")
        .innerHTML = player2;
}


function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src", "assets/diceRoll.gif")
    diceNum2.setAttribute("src", "assets/diceRoll.gif")

    let result = document.querySelector('h1')
    result.innerHTML = ""
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        // let randomNumber1 = 1;
        // let randomNumber2 = 1;


        diceNum1.setAttribute('src', 'assets/dice' + randomNumber1 + '.png');
        diceNum2.setAttribute('src', 'assets/dice' + randomNumber2 + '.png');

        if (randomNumber1 === randomNumber2) {
            result.innerHTML = "Draw!"
        }
        else if (randomNumber1 < randomNumber2) {
            result.innerHTML = (player2 + " WINS!");
        }
        else {
            result.innerHTML = (player1 + " WINS!");
        }

    }, 1500);
}
