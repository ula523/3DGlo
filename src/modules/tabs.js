const tabs = () => {
  const tabContent = document.querySelectorAll(".service-tab");
  const tabPanel = document.querySelector(".service-header");
  const tabs = document.querySelectorAll(".service-header-tab");

  tabPanel.addEventListener("click", (e) => {
    if (e.target.closest(".service-header-tab")) {
      //проверяет что это кнопка

      const tabBtn = e.target.closest(".service-header-tab");

      tabs.forEach((tab, index) => {
        //перебирает все кнопки

        if (tab === tabBtn) {
          tab.classList.add("active");
          tabContent[index].classList.remove("d-none");
        } else {
          tab.classList.remove("active");
          tabContent[index].classList.add("d-none");
        }
      });
    }
  });

  //  console.log(tabContent);
  //   console.log(tabPanel);
  //    console.log(tabs);
};

module.exports = tabs;
