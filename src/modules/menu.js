const menu = () => {
 const menuElement = document.querySelector('menu');
 
  document.addEventListener('click', (e) => {
   
    if (e.target.closest('.menu')) { 
      menuElement.classList.add('active-menu');
      return;
    }

   
    if (!menuElement.contains(e.target)) {
        
        return;
        
    }

    const closeBtn = e.target.closest('.close-btn');
    const menuItem = e.target.closest('ul > li > a');

    
    if (closeBtn || menuItem) {// закрытие по крестику или пункту меню
      menuElement.classList.remove('active-menu');
    }
  })

 // console.log(menuElement);
}



module.exports = menu;