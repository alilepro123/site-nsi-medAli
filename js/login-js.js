let inscrirebtn = document.getElementById("inscrirebtn");
let connecterbtn = document.getElementById("connecterbtn");
let nameField = document.getElementById("nameField");
let titre = document.getElementById("titre");

connecterbtn.onclick = function(){
    nameField.style.maxHeight = "0";
    titre.innerHTML = "Se connecter";
    inscrirebtn.classList.add("desactiver");
    connecterbtn.classList.remove("desactiver");
}

inscrirebtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    titre.innerHTML = "S'inscrire";
    inscrirebtn.classList.remove("desactiver");
    connecterbtn.classList.add("desactiver");
}