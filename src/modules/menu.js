const menu = () => {
  const menuElement = document.querySelector("menu");

  const toggleMenu = (event) => {
    const target = event.target;

    if (target.closest(".menu")) {
      menuElement.classList.toggle("active-menu");
      return;
    }

    if (
      target.closest(".close-btn") ||
      target.closest("ul > li > a") ||
      !menuElement.contains(target)
    ) {
      menuElement.classList.remove("active-menu"); // закрытие по крестику, пункту меню или клику вне меню
    }
  };

  document.addEventListener("click", toggleMenu);
};

module.exports = menu;
