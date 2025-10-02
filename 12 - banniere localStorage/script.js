/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */
/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"

const btn_accept = document.querySelector(".btn-accept");

// 2. Je recupere la banniere de cookies

let cookies = document.querySelector(".cookies");

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"

btn_accept.onclick = onClicSurBalise;
function onClicSurBalise() {
    cookies.classList.add("onclick");
    sessionStorage.setItem("cookiesAccepted", "true");
}

function inStorage(){
    if(sessionStorage.getItem("cookiesAccepted") === "true"){
        cookies.classList.add("onclick");
    }
}

inStorage();