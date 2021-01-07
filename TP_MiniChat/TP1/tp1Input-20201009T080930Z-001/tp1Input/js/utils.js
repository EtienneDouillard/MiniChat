


function affiche_masque(id){
    let element = document.getElementById(id);
    element.classList.toggle("d-none"); // si id existe on le supprime sinon on l'ajoute
}