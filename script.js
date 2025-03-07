document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".navmenu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active"); // Toggles the menu open/closed
    });
});
