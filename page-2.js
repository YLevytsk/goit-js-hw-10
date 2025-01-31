import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as I,i as C}from"./assets/vendor-BbSUbo7J.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("datetime-picker"),n=document.getElementById("start-btn"),f=document.getElementById("days"),p=document.getElementById("hours"),y=document.getElementById("minutes"),h=document.getElementById("seconds");let c=null,i=null;n.disabled=!0,I(r,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(C.error({message:"Please choose a date in the future"}),n.disabled=!0):(c=t,n.disabled=!1)}}),n.addEventListener("click",()=>{n.disabled=!0,r.disabled=!0,i=setInterval(()=>{const t=c-new Date;if(t<=0){clearInterval(i),l(0,0,0,0),r.disabled=!1;return}const{days:s,hours:d,minutes:u,seconds:a}=E(t);l(s,d,u,a)},1e3)});function E(e){const a=Math.floor(e/864e5),g=Math.floor(e%864e5/36e5),x=Math.floor(e%864e5%36e5/6e4),b=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:g,minutes:x,seconds:b}}function o(e){return String(e).padStart(2,"0")}function l(e,t,s,d){f.textContent=o(e),p.textContent=o(t),y.textContent=o(s),h.textContent=o(d)}});const m=document.createElement("style");m.textContent=`
  .timer {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .field {
    text-align: center;
  }

  .value {
    font-size: 36px;
    font-weight: bold;
  }

  .label {
    font-size: 16px;
    text-transform: uppercase;
  }
`;document.head.appendChild(m);
//# sourceMappingURL=page-2.js.map
