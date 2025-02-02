import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
 
  const input = document.getElementById("datetime-picker");
  const startBtn = document.getElementById("start-btn");
  const daysEl = document.getElementById("days"); 
  const hoursEl = document.getElementById("hours"); 
  const minutesEl = document.getElementById("minutes"); 
  const secondsEl = document.getElementById("seconds"); 

  let userSelectedDate = null;
  let timerInterval = null;

  
  startBtn.disabled = true;

  
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

  
  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;  
    input.disabled = true;     

   
    timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeLeft = userSelectedDate - currentTime;

     
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        updateTimerDisplay(0, 0, 0, 0);
        input.disabled = false;  
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(timeLeft);
      updateTimerDisplay(days, hours, minutes, seconds);
    }, 1000); 
  });

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

  
  function addLeadingZero(value) {
    return String(value).padStart(2, "0");
  }

 
  function updateTimerDisplay(days, hours, minutes, seconds) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }
});

const style = document.createElement("style");
style.textContent = `

.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
}

.datetime-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

#datetime-picker {
  display: block;
  margin: 0 auto;
  text-align: center;
}

#start-btn {
  white-space: nowrap;
}

.timer {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.value {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  margin-top: 24px;
}

.label {
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
}
#start-btn {
  border-radius: 8px;
  padding: 8px 16px;
  width: 75px;
  height: 40px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #989898;
  text-align: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
}


`;
document.head.appendChild(style);

