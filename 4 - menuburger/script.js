
// 1. Je recupere le burger
let burger = document.querySelector(".burger");
// 2. Je recupere la fenetre modal
let modal = document.querySelector(".modal");

burger.addEventListener("click",function(){
     burger.classList.toggle("fa-x");
    burger.classList.toggle("show-modal");
    modal.classList.toggle("show-modal");
});