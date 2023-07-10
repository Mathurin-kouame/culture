const hamburger = document.querySelector(".menuBurger");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");
});

document.querySelectorAll(".ul").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}));