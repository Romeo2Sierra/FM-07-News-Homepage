const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const mobileMenu = document.querySelector("nav");

menuOpen.addEventListener("click", () => {
	mobileMenu.style.display = "block";
});

menuClose.addEventListener("click", () => {
	mobileMenu.style.display = "none";
});