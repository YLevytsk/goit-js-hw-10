import"./assets/styles-4Vcj_bUa.js";import{f as b,i as B}from"./assets/vendor-A92OCY9B.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("datetime-picker"),n=document.getElementById("start-btn"),m=document.getElementById("days"),f=document.getElementById("hours"),h=document.getElementById("minutes"),y=document.getElementById("seconds");let c=null,u=null;n.disabled=!0,b(r,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(B.error({message:"Please choose a date in the future"}),n.disabled=!0):(c=t,n.disabled=!1)}}),n.addEventListener("click",()=>{n.disabled=!0,r.disabled=!0,u=setInterval(()=>{const t=c-new Date;if(t<=0){clearInterval(u),i(0,0,0,0),r.disabled=!1;return}const{days:s,hours:d,minutes:l,seconds:a}=E(t);i(s,d,l,a)},1e3)});function E(e){const a=Math.floor(e/864e5),p=Math.floor(e%864e5/36e5),I=Math.floor(e%864e5%36e5/6e4),g=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:p,minutes:I,seconds:g}}function o(e){return String(e).padStart(2,"0")}function i(e,t,s,d){m.textContent=o(e),f.textContent=o(t),h.textContent=o(s),y.textContent=o(d)}});
//# sourceMappingURL=1-timer.js.map
