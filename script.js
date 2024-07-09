

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