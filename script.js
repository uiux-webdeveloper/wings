const bars = document.querySelector(".header-wrapper .bars");
const ul = document.querySelector(".header-wrapper ul");
const line = document.querySelector(".bars .fa-bars");

bars.addEventListener("click", () => {
	ul.classList.toggle("mobile");
	line.classList.toggle("fa-xmark");
});
//
