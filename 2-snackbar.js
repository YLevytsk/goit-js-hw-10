import"./assets/styles-f2x-3a52.js";import{i}from"./assets/vendor-A92OCY9B.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".form"),n=s.querySelector('[name="delay"]'),m=s.querySelectorAll('[name="state"]');s.addEventListener("submit",a=>{var r;a.preventDefault();const t=Number(n.value),o=(r=[...m].find(e=>e.checked))==null?void 0:r.value;if(!o||!t)return;new Promise((e,c)=>{setTimeout(()=>{o==="fulfilled"?e(t):c(t)},t)}).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e} ms`})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e} ms`})})})});
//# sourceMappingURL=2-snackbar.js.map
