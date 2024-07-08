document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const text = "Francesco Caglianone";
    let index = 0;

    function type() {
        if (index < text.length) {
            nameElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200);
        }
    }

    type();
});







// WRITE IN LOOP

// document.addEventListener("DOMContentLoaded", function() {
//     const nameElement = document.getElementById("name");
//     const text = "Francesco Caglianone";
//     let index = 0;
//     let isDeleting = false;

//     function type() {
//         if (!isDeleting) {
//             if (index < text.length) {
//                 nameElement.textContent += text.charAt(index);
//                 index++;
//                 setTimeout(type, 200);
//             } else {
//                 isDeleting = true;
//                 setTimeout(type, 3000); // Pause before deleting
//             }
//         } else {
//             if (index > 0) {
//                 nameElement.textContent = text.substring(0, index - 1);
//                 index--;
//                 setTimeout(type, 50);
//             } else {
//                 isDeleting = false;
//                 setTimeout(type, 500); // Pause before typing again
//             }
//         }
//     }

//     type();
// });
