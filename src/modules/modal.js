const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')

    buttons.forEach(btn => { 

        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            if (document.documentElement.clientWidth < 768) {
                modal.style.opacity = 1;
                return;
            }

            let opacity = 0;
            modal.style.opacity = opacity;

            const timer = setInterval(() => {
                opacity += 0.05;
                modal.style.opacity = opacity;

                if (opacity >= 1) {
                    clearInterval(timer);
                } 
            }, 20)
        })
    })

    closeBtn.addEventListener('click', () => {  

        if (document.documentElement.clientWidth < 768) {
            modal.style.display = 'none';
            return;
        }

        let opacity = 1;
        const timer = setInterval(() => {
            opacity -= 0.05;
            modal.style.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(timer);
                modal.style.display = 'none';
            }
        }, 10)
    })
}

module.exports = modal;