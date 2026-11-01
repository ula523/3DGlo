const modal = () => {

    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
        })
    })

    closeBtn.addEventListener('click', () => {
         modal.style.display = 'none';
    })

  

}

module.exports = modal;