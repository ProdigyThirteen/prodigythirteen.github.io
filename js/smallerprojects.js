document.querySelectorAll(".see-more").forEach(button => {
    button.addEventListener("click", function () {
      const card = this.closest(".card");
      const modal = document.getElementById("projectModal");
  
      document.getElementById("modalTitle").textContent = card.dataset.title;
      document.getElementById("modalText").textContent = card.dataset.text;
  
      modal.classList.remove("hidden");
    });
  });
  
  document.getElementById("modalClose").addEventListener("click", () => {
    document.getElementById("projectModal").classList.add("hidden");
  });
  
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("projectModal");
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
  