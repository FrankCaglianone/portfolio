

// Typing animation in Index.html
document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const text = "Francesco Caglianone";
    let index = 0;

    function type() {
        if (index < text.length) {
            nameElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();
});





// Navigation toggle for media query
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    navlist.classList.remove('active');
};










const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;
const totalSlides = slide.length;

console.log(totalSlides);

function showSlide(n) {
index = n;
if (index >= totalSlides-2) {
    index = 0;
} else if (index < 0) {
    index = totalSlides - 1;
}
slides.style.transition = "transform 0.5s ease-in-out";
slides.style.transform = `translateX(${-index * (slide[0].offsetWidth + 20)}px)`;
}

function nextSlide() {
showSlide(index + 1);
}

function prevSlide() {
showSlide(index - 1);
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

setInterval(nextSlide, 5000);

showSlide(index);