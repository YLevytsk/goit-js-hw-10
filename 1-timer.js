import"./assets/styles-DD3qoKza.js";import{f as I,i as C}from"./assets/vendor-BbbuE1sJ.js";document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("datetime-picker"),n=document.getElementById("start-btn"),f=document.getElementById("days"),p=document.getElementById("hours"),h=document.getElementById("minutes"),y=document.getElementById("seconds");let i=null,c=null;n.disabled=!0,I(a,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(C.error({message:"Please choose a date in the future"}),n.disabled=!0):(i=t,n.disabled=!1)}}),n.addEventListener("click",()=>{n.disabled=!0,a.disabled=!0,c=setInterval(()=>{const t=i-new Date;if(t<=0){clearInterval(c),l(0,0,0,0),a.disabled=!1;return}const{days:s,hours:d,minutes:u,seconds:r}=g(t);l(s,d,u,r)},1e3)});function g(e){const r=Math.floor(e/864e5),x=Math.floor(e%864e5/36e5),E=Math.floor(e%864e5%36e5/6e4),b=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:x,minutes:E,seconds:b}}function o(e){return String(e).padStart(2,"0")}function l(e,t,s,d){f.textContent=o(e),p.textContent=o(t),h.textContent=o(s),y.textContent=o(d)}});const m=document.createElement("style");m.textContent=`

  #datetime-picker {
    margin-bottom: 36px; 
  }
  .timer {
    display: flex;
    justify-content: center;
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
    mardin-top: 24px;
  }

  .label {
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
  }
`;document.head.appendChild(m);
//# sourceMappingURL=1-timer.js.map
