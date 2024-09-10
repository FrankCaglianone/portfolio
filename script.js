

// ---------- Typing animation in Index.html ----------
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





// ---------- Navigation toggle for media query ----------
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    navlist.classList.remove('active');
};








// Download cv action for button
// Download CV action for button
function downloadCV() {
    const link = document.createElement('a');
    link.href = './data/CV.pdf'; // Update this with the actual path to your CV file
    link.download = 'Francesco_Caglianone_CV.pdf'; // This will be the name of the downloaded file

    // Check if the download attribute is supported
    if ('download' in link) {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        // Fallback for browsers that don't support the download attribute
        window.open(link.href, 'target="_blank"');
    }
}

document.getElementById('downloadButton').addEventListener('touchend', function(event) {
    event.preventDefault(); // Prevent default touch behavior
    downloadCV();
});

document.getElementById('downloadButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default click behavior
    downloadCV();
});






// Contact me via email
function openEmail() {
    var recipient = 'francescocaglianone@gmail.com';
    var subject = 'Write the Subject here';
    var body = 'Hello, this is the body of the email. Feel free to write me ;)';

    var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}







// Swiper function
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    speed: 1500,
    slidesPerView: 4,
    spaceBetween: 60,
    mousewheel: false,
    parallax: true,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 40,
      slideShadows: true
    },
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: false
    },
    scrollbar: {
      el: ".swiper-scrollbar"
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 60
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 60
      },
      2300: {
        slidesPerView: 5,
        spaceBetween: 60
      },
      2900: {
        slidesPerView: 6,
        spaceBetween: 60
      }
    }
  });