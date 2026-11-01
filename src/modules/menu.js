const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = document.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')

    const handleMenu = () => {
       /*   if (!menu.style.transform) {//если инлайн свойства нет
        menu.style.transform = `translateX(0)`//открывает меню
        } else {
        menu.style.transform = ``//закрывает меню
        }*/
       menu.classList.toggle('active-menu');
    }

    menuBtn.addEventListener('click', handleMenu)
    closeBtn.addEventListener('click', handleMenu)

   /* for (let i = 0; i < menuItems.length; i++) { 
        menuItems[i].addEventListener('click', handleMenu)
    }*/

    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu)) //клик по ссылке в меню

}

module.exports = menu;