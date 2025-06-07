document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerToggle") as HTMLButtonElement | null;
  const navLinks = document.getElementById("navbarLinks") as HTMLElement | null;
  const dropdownToggle = document.getElementById("dropdownToggle") as HTMLButtonElement | null;
  const dropdownMenu = document.getElementById("dropdownMenu") as HTMLElement | null;

  // ✅ Hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      console.log("Hamburger toggled"); // Debug
    });
  }

  // ✅ Dropdown toggle
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle("dropdown--open");
      console.log("Dropdown toggled"); // Debug
    });
  }
});