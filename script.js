const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector("nav");
const links = document.querySelector('.links');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

document.querySelectorAll('.link').forEach((el) => {
    el.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
})