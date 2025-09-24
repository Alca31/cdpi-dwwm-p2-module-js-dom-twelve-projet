const btn_ctr = document.querySelector(".btn-counter");
btn_ctr.onclick = onClicSurBalise;
function onClicSurBalise() { let value_ctr = document.querySelector(".value-counter");
       value_ctr.textContent = Number(value_ctr.textContent) + 1;
 }
