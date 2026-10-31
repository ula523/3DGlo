const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')


    const getTimerRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()//текущее время компьютера
    let timeRemaining = (dateStop - dateNow) / 1000 //количество cек до дедлайна
    let hours = Math.floor(timeRemaining / 60 / 60)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60) //остаток от деления на 60

    return {
        timeRemaining,
         hours, //hours: hours,
         minutes,
         seconds
    }

    }
    const updateClock = () => {
    let getTime = getTimerRemaining()
        
    timerHours.textContent = String(getTime.hours).padStart(2, '0');
    timerMinutes.textContent = String(getTime.minutes).padStart(2, '0');
    timerSeconds.textContent = String(getTime.seconds).padStart(2, '0');

    if(getTime.timeRemaining > 0) { 
     setInterval(updateClock, 1000); //вызывает функцию каждую сек.

    }
    else {
    timerHours.textContent = '00'
    timerMinutes.textContent = '00'
    timerSeconds.textContent = '00'

    }

   // console.log(interval);
   
    }
    updateClock()

}

module.exports = timer;