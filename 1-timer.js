import"./assets/styles-DD3qoKza.js";import{f as I,i as C}from"./assets/vendor-BbbuE1sJ.js";document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("datetime-picker"),n=document.getElementById("start-btn"),p=document.getElementById("days"),f=document.getElementById("hours"),y=document.getElementById("minutes"),h=document.getElementById("seconds");let r=null,l=null;n.disabled=!0,I(a,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(C.error({message:"Please choose a date in the future"}),n.disabled=!0):(r=t,n.disabled=!1)}}),n.addEventListener("click",()=>{n.disabled=!0,a.disabled=!0,l=setInterval(()=>{const t=r-new Date;if(t<=0){clearInterval(l),c(0,0,0,0),a.disabled=!1;return}const{days:s,hours:i,minutes:u,seconds:d}=g(t);c(s,i,u,d)},1e3)});function g(e){const d=Math.floor(e/864e5),x=Math.floor(e%864e5/36e5),E=Math.floor(e%864e5%36e5/6e4),b=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:x,minutes:E,seconds:b}}function o(e){return String(e).padStart(2,"0")}function c(e,t,s,i){p.textContent=o(e),f.textContent=o(t),y.textContent=o(s),h.textContent=o(i)}});const m=document.createElement("style");m.textContent=`

 #datetime-picker {
  display: block;
  margin: 0 auto 36px;
  text-align: center;
}

.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer {
  display: flex;
  gap: 20px;
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

`;document.head.appendChild(m);
//# sourceMappingURL=1-timer.js.map
