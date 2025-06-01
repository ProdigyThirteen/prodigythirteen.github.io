document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalStudio = document.getElementById("modalStudio");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.getElementById("closeBtn");
  const projects = document.querySelectorAll(".project");
  const themeToggleBtn = document.getElementById("themeToggle");

  // Focusable elements inside modal for focus trap
  function getFocusableElements(container) {
    return container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
  }

  // Open modal function
  function openModal(project) {
    modalTitle.textContent = project.dataset.title;
    modalStudio.textContent = project.dataset.studio;
    modalDescription.textContent = project.dataset.description;
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    // Save last focused element to return focus later
    lastFocusedElement = document.activeElement;
    // Focus first focusable element in modal
    const focusableElements = getFocusableElements(modal);
    if (focusableElements.length) focusableElements[0].focus();
    document.body.style.overflow = 'hidden'; 
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("visible");
    if (lastFocusedElement) lastFocusedElement.focus();
    document.body.style.overflow = ''; 
  }

  let lastFocusedElement = null;

  projects.forEach(project => {
    project.setAttribute('tabindex', '0'); 
    project.addEventListener("click", () => openModal(project));
  });  

  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else if (currentTheme === null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add("dark-mode");
    }
  }

  function updateToggleButton() {
    if (document.body.classList.contains("dark-mode")) {
      themeToggleBtn.setAttribute("aria-pressed", "true");
      themeToggleBtn.title = "Switch to Light Mode";
    } else {
      themeToggleBtn.setAttribute("aria-pressed", "false");
      themeToggleBtn.title = "Switch to Dark Mode";
    }
  }

  updateToggleButton();

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    updateToggleButton();
  });
});
