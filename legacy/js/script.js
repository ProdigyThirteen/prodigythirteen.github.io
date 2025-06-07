document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const pageToTextMap = {
    "games.html": "Games",
    "projects.html": "Personal Projects",
    "jams.html": "Game Jams",
    "about.html": "About Me"
  };

  const currentLabel = pageToTextMap[currentPage];

  navLinks.forEach(link => {
    if (link.textContent.trim() === currentLabel) {
      link.classList.add("active");
    }
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.main-nav');

  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

});
