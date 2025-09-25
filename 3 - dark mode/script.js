/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

let btn = document.querySelector(".btn");


btn.addEventListener("click",function(){
    //passer tout en darkmode
    const allTags = document.querySelectorAll("*");
     

    allTags.forEach(function(tag){
        tag.classList.toggle("darkmode");
    })
        
});