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

var audio = document.getElementById('audio');
var playBtn = document.getElementById('playBtn');
var count = 0;

function playPause() {
    if(count == 0) {
        count = 1;
        audio.play();
    } else {
        count = 0;
        audio.pause()
    }
}