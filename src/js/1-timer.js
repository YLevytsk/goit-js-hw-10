import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
  // Получаем элементы
  const input = document.getElementById("datetime-picker");
  const startBtn = document.getElementById("start-btn");
  const daysEl = document.querySelector("[data-days]");
  const hoursEl = document.querySelector("[data-hours]");
  const minutesEl = document.querySelector("[data-minutes]");
  const secondsEl = document.querySelector("[data-seconds]");

  let userSelectedDate = null;
  let timerInterval = null;

  // Ожидаем правильную дату для старта
  startBtn.disabled = true;

  // Инициализируем Flatpickr
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedTime = selectedDates[0];
      if (selectedTime <= new Date()) {
        iziToast.error({ message: "Please choose a date in the future" });
        startBtn.disabled = true;
      } else {
        userSelectedDate = selectedTime;
        startBtn.disabled = false;
      }
    },
  };

  flatpickr(input, options);

  // Обработчик для кнопки Start
  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;  // Блокируем кнопку после старта
    input.disabled = true;     // Блокируем input

    // Запускаем таймер
    timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeLeft = userSelectedDate - currentTime;

      // Если время вышло, останавливаем таймер
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        updateTimerDisplay(0, 0, 0, 0);
        input.disabled = false;  // Разблокируем input
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(timeLeft);
      updateTimerDisplay(days, hours, minutes, seconds);
    }, 1000); // Каждую секунду обновляем
  });

  // Функция для преобразования миллисекунд в дни, часы, минуты и секунды
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  // Функция для добавления ведущего нуля к числу
  function addLeadingZero(value) {
    return String(value).padStart(2, "0");
  }

  // Функция для обновления интерфейса таймера
  function updateTimerDisplay(days, hours, minutes, seconds) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }
});
