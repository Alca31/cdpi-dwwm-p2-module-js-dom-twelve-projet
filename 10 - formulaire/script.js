/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */

//custom function faite par moi

function isNotValid(value, maxLength, minLength = null, field = null) {

    if (value.trim().length === 0) {
        if (field !== null) {
            return "Le champ " + field + " est obligatoire";
        }
        return "ce champ est obligatoire";
    }

    if (value.trim().length > maxLength) {
        if (field !== null) {
            return "Le champ " + field + " doit contenir au moins " + maxLength + " caractères";
        }
        return "Ce champ doit contenir au moins " + maxLength + " caractères";
    }

    if (minLength !== null && value.trim().length < minLength) {
        if (field !== null) {
            return "Le champ " + field + " doit contenir au moins " + minLength + " caractères";
        }
        return "Ce champ doit contenir au moins " + minLength + " caractères";
    }
    return false;
}

/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)
form.addEventListener("submit", onLogin);

function onLogin(event) {
    event.preventDefault();
    
  //partie faite par ia, mais qui se rapproche de ce que j'avais fais en php  
    const fields = [
        { 
            input: document.getElementById("prenom"), 
            max: 20, 
            min: 2, 
            name: "Prénom" 
        },
        { 
            input: document.getElementById("nom"), 
            max: 20, 
            min: 2, 
            name: "Nom" 
        },
        { 
            input: document.getElementById("email"), 
            max: 100, 
            min: 5, 
            name: "Email" 
        },
        { 
            input: document.getElementById("message"), 
            max: 100, 
            min: 10, 
            name: "Message" 
        }
    ];
    
    let hasErrors = false;
    
    fields.forEach(field => {
        // On sélectionne le message d'erreur qui est le frère suivant de l'input
        const errorElement = field.input.parentElement.querySelector('.error');
        errorElement.classList.add("invisible");
        
        const validationError = isNotValid(field.input.value, field.max, field.min, field.name);
        if (validationError) {
            errorElement.textContent = validationError;
            errorElement.classList.remove("invisible");
            hasErrors = true;
        }
        
        // Validation spéciale pour l'email
        if (field.name === "Email" && !isValidEmail(field.input.value)) {
            errorElement.textContent = "Cette adresse email n'est pas valide";
            errorElement.classList.remove("invisible");
            hasErrors = true;
        }
    });
    
    if (!hasErrors) {
        // Ici le code pour traiter le formulaire si tout est valide
        const formData = new FormData(event.target);
        console.log("Formulaire valide !", formData);
    }
}


/**
 * HELPERS FUNCTIONS
 */
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email) {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email)) {
        return true;
    } else {
        return false
    }
}


/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message, from) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"message":"${message}","from":"${from}"}`
    };

    fetch('http://localhost:3000/sendmail', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}