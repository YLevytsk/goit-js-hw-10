import"./assets/styles-DD3qoKza.js";import{f as w,i as I}from"./assets/vendor-BbbuE1sJ.js";document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("datetime-picker"),n=document.getElementById("start-btn"),p=document.getElementById("days"),f=document.getElementById("hours"),g=document.getElementById("minutes"),x=document.getElementById("seconds");let d=null,l=null;n.disabled=!0,w(a,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(I.error({message:"Please choose a date in the future"}),n.disabled=!0):(d=t,n.disabled=!1)}}),n.addEventListener("click",()=>{n.disabled=!0,a.disabled=!0,l=setInterval(()=>{const t=d-new Date;if(t<=0){clearInterval(l),c(0,0,0,0),a.disabled=!1;return}const{days:r,hours:i,minutes:u,seconds:s}=h(t);c(r,i,u,s)},1e3)});function h(e){const s=Math.floor(e/864e5),y=Math.floor(e%864e5/36e5),b=Math.floor(e%864e5%36e5/6e4),E=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:y,minutes:b,seconds:E}}function o(e){return String(e).padStart(2,"0")}function c(e,t,r,i){p.textContent=o(e),f.textContent=o(t),g.textContent=o(r),x.textContent=o(i)}});const m=document.createElement("style");m.textContent=`

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
  margin: 36px auto 16px;
  text-align: center;
  border-radius: 4px;
  width: 280px;
  height: 40px;
}

input[type="date"] {
  margin-right: 10px; 
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
  background: #cfcfcf;
}


`;document.head.appendChild(m);
//# sourceMappingURL=1-timer.js.map
