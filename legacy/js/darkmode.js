  const themeToggleBtn = document.getElementById("themeToggle");
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