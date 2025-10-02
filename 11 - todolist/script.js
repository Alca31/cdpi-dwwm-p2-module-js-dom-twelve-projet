/**
 * element.parentElement
 * element.remove()
 */

// 1. Je recupere le forumlaire de saisi d'un nouvelle tache
const form = document.querySelector("#form");
// 2. Je recupere le conteneur des taches
const listTasks = document.querySelector(".list-tasks");

const todo = document.querySelector("#todo");


// 3. Lorsque le formulaire est soumis
form.addEventListener("submit", onAddTask);

function onAddTask(event) {
    event.preventDefault();

    const postElement = `
                <div class="task">
                    <p>${todo.value}</p>
                    <button class="btn-delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button class="btn-archive">
                        <i class="fas fa-check-circle"></i>
                    </button>
                </div>
    `;

    listTasks.innerHTML += postElement;

    const btnDelete = document.querySelector(".btn-delete");
    const btnArchive = document.querySelector(".btn-archive");

    btnDelete.addEventListener("click", function () {
        btnDelete.parentElement.remove();
    });

    btnArchive.addEventListener("click", function () {
        btnArchive.parentElement.classList.toggle("done");
    });

    // Je reset le contenu du formulaire pour eviter que le texte reste une fois la tache crée (ergonomique)
    form.reset();
}