// const navbarMenu = document.getElementById("menu");
// const burgerMenu = document.getElementById("burger");
// const headerMenu = document.getElementById("header");

// // Open Close Navbar Menu on Click Burger
// if (burgerMenu && navbarMenu) {
//    burgerMenu.addEventListener("click", () => {
//       burgerMenu.classList.toggle("is-active");
//       navbarMenu.classList.toggle("is-active");
//    });
// }

// // Close Navbar Menu on Click Menu Links
// document.querySelectorAll(".menu-link").forEach((link) => {
//    link.addEventListener("click", () => {
//       burgerMenu.classList.remove("is-active");
//       navbarMenu.classList.remove("is-active");
//    });
// });

// // Change Header Background on Scrolling
// window.addEventListener("scroll", () => {
//    if (this.scrollY >= 85) {
//       headerMenu.classList.add("on-scroll");
//    } else {
//       headerMenu.classList.remove("on-scroll");
//    }
// });

// // Fixed Navbar Menu on Window Resize
// window.addEventListener("resize", () => {
//    if (window.innerWidth > 768) {
//       if (navbarMenu.classList.contains("is-active")) {
//          navbarMenu.classList.remove("is-active");
//       }
//    }
// });
document.addEventListener("DOMContentLoaded", function () {
   const menuToggle = document.querySelector(".menu-toggle");
   const navLinks = document.querySelector(".nav-links");

   menuToggle.addEventListener("click", function () {
       navLinks.classList.toggle("active");
   });
});

// Text to be typed
const textToType = "IGNITOR 2K23";
const typingSpeed = 120; // Speed in milliseconds per character

const typewriterText = document.getElementById("typewriter-text");

// Function to simulate typing
function typeWriter() {
    let charIndex = 0;
    const textLength = textToType.length;

    function typeNextChar() {
        if (charIndex < textLength) {
            typewriterText.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeNextChar, typingSpeed);
        }
    }

    // Start typing
    typeNextChar();
}

// Start the typing animation
typeWriter();
