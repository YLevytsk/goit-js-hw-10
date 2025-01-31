import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('.form');
  const delayInput = form.querySelector('[name="delay"]');
  const stateRadios = form.querySelectorAll('[name="state"]');
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = Number(delayInput.value);
    const state = [...stateRadios].find(radio => radio.checked)?.value;

    
    if (!state || !delay) {
      return;
    }

    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfilled") {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    
    promise
      .then((delay) => {
        iziToast.success({
          title: "Success",
          message: `✅ Fulfilled promise in ${delay} ms`,
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: "Error",
          message: `❌ Rejected promise in ${delay} ms`,
        });
      });
  });
});
