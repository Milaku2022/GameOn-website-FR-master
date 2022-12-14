function editNav() {
    var x = document.getElementById("myTopnav");
    if(x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.querySelector('#form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal
closeBtn.addEventListener("click" , closeModal);
function closeModal() {
    modalbg.style.display = "none";
}


// validation du bouton "c'est parti"

const validation = document.querySelector('.btn-submit');
const prenom = document.querySelector("#first");
const prenom_m = document.querySelector('.prenom_m');
const nom = document.querySelector("#last");
const nom_m = document.querySelector('.nom_m');
const email = document.querySelector("#email");
const mail_m = document.querySelector('.mail_m');
const naissance_m = document.querySelector('.naissance_m');
const quantity = document.querySelector("#quantity");
const quantity_m = document.querySelector('.quantity_m');
const checkinput = document.querySelectorAll('.checkbox-input');
const option_m = document.querySelector('.option_m');
const accepter_m = document.querySelector('.accepter_m');
const success = document.querySelector('.success');

const closeSuccess = document.querySelector('.closeSuccess');

closeSuccess.addEventListener("click" , closeModalSuccess);
function closeModalSuccess() {
    modalbg.style.display = "none";
    form.reset();
    form.style.display = "block";
    success.style.display = "none";
    quantity_m.style.display = "none";
    mail_m.style.display = "none";
    naissance_m.style.display = "none";

}

validation.addEventListener('click' , f_valid);
// fonction envoi du formulaire
function f_valid(e) {
    // arret du rechargement du formulaire:

    e.preventDefault();
    prenomValid();
    nomValid();
    checkEmail();
    birthdatValid();
    numberValidation();
    choixValid();
    accepterValid();

    if(prenomValid() && nomValid() && checkEmail() && birthdatValid() && numberValidation() && choixValid() && accepterValid() ) {
        success.style.display = "block";
        form.style.display= "none";

    }
    else {
        success.style.display = "none";
        form.style.display = "block";
    }

}

// fonction prenom validation
function prenomValid() {
    if(prenom.value.length<2) {

        prenom_m.style.display = "block";
        return false;
    }
    else {
        prenom_m.style.display = "none";
        return true;
    }
}
// fonction nom validation
function nomValid() {
    if(nom.value.length<2) {
        nom_m.style.display = "block";
        return false;
    }
    else {
        nom_m.style.display = "none";
        return true;
    }
}

// fonction email valide avec l'expression r??guliere

function checkEmail() {
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}) + $/;
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;

    if(email.value.match(mailformat)) {
        mail_m.style.display = "none";
        return true;
    }
    else {
        mail_m.style.display = "block";return false;
    }
}
// validation de la date de naissance
function birthdatValid(){
    var birthValue = document.getElementById('birthdate').value;
    
    if ( birthValue ){
        naissance_m.style.display = "none";
        return true;
    }
    else {
        naissance_m.style.display = "block";
        return false;
    }
}

// fonction date d'un nombre entier avec l'expression r??guli??re
function numberValidation() {
    const regexQuantity = /^[1-9]?[0-9]{1,1}$/;
    if(regexQuantity.test(String(quantity.value))) {
        quantity_m.style.display = "none";
        return true;
    }
    else {
        quantity_m.style.display = "block";
        return false;
    }
}

// fonction choisir au moins une option
function choixValid() {
    var valid = false;
    var x = document.reserve.location;
    for(var i=0;i<x.length;i++) {
        if(x[i].checked) {
            valid = true;
            break
        }
    }
    if(valid) {
        option_m.style.display = "none";
        return true
    }
    else {
        option_m.style.display = "block";
        return false;
    }
}

// valider les conditions d'utilisation
function accepterValid() {
    if(reserve.conditions.checked==true) {
        accepter_m.style.display = "none";
        return true;
    }
    else {
        accepter_m.style.display = "block";
        return false;
    }
}
