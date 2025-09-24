/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley

let smiley = document.querySelector(".fa-face-meh");

// 2. Je recupere le bouton ABONNER
let sub = document.querySelector(".btn-sub");

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur

// 4. J'ecoute le clique sur l'icone smiley
smiley.onclick=onClicSurBalise1;
function onClicSurBalise1() {
    smiley.classList.toggle("fa-face-smile-beam");
    smiley.classList.toggle("fa-face-meh");
}

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
sub.onclick=onClicSurBalise2;
let estAbonne = false;
function onClicSurBalise2() {
    
    if (estAbonne == false) {
        sub.textContent = "Abonné";
        sub.style.backgroundColor = "green";
        estAbonne = true;

    } else {
        sub.textContent = "Abonnez-vous";
        sub.style.backgroundColor = "rgb(231, 231, 231)";
        estAbonne = false;
    }
}