 /*
 HEAD
  */
/* 
   MOBILE MENU
 */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* 
   CLOSE MOBILE MENU AFTER CLICK
 */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* 
   ACTIVE NAVIGATION
 */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* 
   COPYRIGHT YEAR
 */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


/* 
   CONTACT FORM
 */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        `Terima kasih ${name}! Pesan Anda sudah diisi.`
    );

    contactForm.reset();


/* 
   MOBILE MENU
 */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* 
   CLOSE MOBILE MENU AFTER CLICK
 */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* 
   ACTIVE NAVIGATION
 */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* 
   COPYRIGHT YEAR
 */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


/* 
   CONTACT FORM
 */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        `Terima kasih ${name}! Pesan Anda sudah diisi.`
    );

    contactForm.reset();

 
});