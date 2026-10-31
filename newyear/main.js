const textHello = document.getElementById('text-hello')
const today = document.getElementById('today')
const time = document.getElementById('time')
const timeNewYear = document.getElementById('timeNewYear')

const getTextHello = (hour) => {
    if (hour >= 5 && hour < 12) {
        return 'Доброе утро';
    }

    if (hour >= 12 && hour < 18) {
        return 'Добрый день';
    }

    if (hour >= 18 && hour < 23) {
        return 'Добрый вечер';
    }

    return 'Доброй ночи';
}

const getTimer = () => {
    const now = new Date()
    const timeNow = now.getTime()
    const newYear = new Date(2027, 0, 1, 0, 0, 0).getTime()
    const remainingTime = (newYear - now) / 1000
    const days = Math.floor(remainingTime / 86400)
    const hours = Math.floor(remainingTime / 60 / 60)
    const minutes = Math.floor((remainingTime / 60) % 60)
    const seconds = Math.floor(remainingTime % 60)

    return {
        remainingTime,
        days,
        hours,
        minutes,
        seconds,
        now
    }
}

const updateClock = () => {
    const timer = getTimer();

    textHello.textContent = getTextHello(timer.now.getHours());

    today.textContent = new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(timer.now);

    time.textContent = timer.now.toLocaleTimeString('en-US');

    timeNewYear.textContent = timer.days;

    if (timer.remainingTime === 0) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(updateClock, 1000);

updateClock()