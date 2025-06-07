document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.getElementById("hamburgerToggle");
    var navLinks = document.getElementById("navbarLinks");
    var dropdownToggle = document.getElementById("dropdownToggle");
    var dropdownMenu = document.getElementById("dropdownMenu");
    // ✅ Hamburger toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("open");
            console.log("Hamburger toggled"); // Debug
        });
    }
    // ✅ Dropdown toggle
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener("click", function (e) {
            e.preventDefault();
            dropdownMenu.classList.toggle("dropdown--open");
            console.log("Dropdown toggled"); // Debug
        });
    }
});
