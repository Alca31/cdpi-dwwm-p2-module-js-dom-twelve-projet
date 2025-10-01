/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");

btn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("toast");
    const p = document.createElement("p");
    p.textContent = "votre fichier a bien été enregistré";
    ctnToasts.appendChild(div);
    div.appendChild(p);
    setTimeout(() => {
        div.remove();
    }, 3000)

    div.addEventListener("click", function () {
        div.remove();
    });
});
