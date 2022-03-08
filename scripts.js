const closeMobileNav = document.querySelector(".close-mobile-nav");
const openMobileNav = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav");

openMobileNav.addEventListener("click", () => {
    headerNav.classList.add("mobile-open");
});

closeMobileNav.addEventListener("click", () => {
    headerNav.classList.remove("mobile-open");
});
