const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')


    const getTimerRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
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
        
    timerHours.textContent = getTime.hours
    timerMinutes.textContent = getTime.minutes
    timerSeconds.textContent = getTime.seconds

    if(getTime.timeRemaining > 0) {
         setTimeout(updateClock, 1000) //вызывает функцию каждую сек.

    }
   
    }
    updateClock()

}

module.exports = timer;