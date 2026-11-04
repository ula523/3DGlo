const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')
    
    const timeInterval = 2000
    const dotsBlock = document.querySelector('.portfolio-dots')
  
   
    let currentSlide = 0
    let interval

    slides.forEach((slide, index) => {
        const dot = document.createElement('li');

        dot.classList.add('dot');

     
        if (index === 0) {
            dot.classList.add('dot-active');
        }

        dotsBlock.append(dot);
    })
    const dots = document.querySelectorAll('.dot')

   // console.log(dotsBlock);

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)

    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
       nextSlide(slides, currentSlide, 'portfolio-item-active')
       nextSlide(dots, currentSlide, 'dot-active')
       

        slides[currentSlide].classList.add('portfolio-item-active')//добавляет класс у следующего элемента

        


    }
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
        
    }
    const stopSlide = () => {
        clearInterval(interval)
        
    }
    sliderBlock.addEventListener('click', (e) => {
        
        e.preventDefault() //отменяет стандартное поведение элемента

        if (!e.target.matches('.dot, .portfolio-btn')) { //если нет этих классов

            return

        }


        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        if (e.target.matches('#arrow-right')){ //клик по кнопке arrow-right

            currentSlide++

        } else if (e.target.matches('#arrow-left')){
           currentSlide--

        } else if (e.target.classList.contains('dot')){//ищет класс dot
        dots.forEach((dot, index) => {
            if (e.target === dot) {
                currentSlide = index
            }
        })

        }
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }
       nextSlide(slides, currentSlide, 'portfolio-item-active')
       nextSlide(dots, currentSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) { 
            stopSlide()
        }


    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) { 
           startSlide(timeInterval)//2 сек.
        }


    }, true)

    startSlide(timeInterval)
}


module.exports = slider;