/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */

// 1. Je recupere toutes les questions
const questions = document.querySelectorAll(".question");

// 2. Je parcours toutes les questions
questions.forEach(function(question){
    // 3. Lors du click sur la question
    question.addEventListener("click",function(){
        // 4. Je recupere la reponse correspondante et le chevron correspondante
        const chevron = question.querySelector("i");
        const reponse = question.nextElementSibling;
        chevron.classList.toggle("fa-chevron-down");
        chevron.classList.toggle("fa-chevron-up");
        reponse.classList.toggle("show-reponse");
    });
});
