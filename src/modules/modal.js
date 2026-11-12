const { animate } = require("./helpers");

const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");

  const closeModal = () => {
    modal.style.display = "none";
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";

      if (document.documentElement.clientWidth < 768) {
        popupContent.style.opacity = 1;
        return;
      }

      popupContent.style.opacity = 0;

      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popupContent.style.opacity = progress;
        },
      });
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      closeModal();
    }
  });
};

module.exports = modal;
