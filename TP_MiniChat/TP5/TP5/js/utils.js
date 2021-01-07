
function affiche_masque(id){
    let element = document.getElementById(id);
    element.classList.toggle("d-none"); // si id existe on le supprime sinon on l'ajoute
}

function ajaxRequest(type,url,callback ){
    let xhr = new XMLHttpRequest(); //Création d'un nouvel élément de type requêtes AJAX 
    xhr.open(type,url);
    xhr.onload = () => {
        switch (xhr.status) {
            case 200:
            case 201: 
            //console.log(xhr.responseText) ;
            
            let donnee = JSON.parse(xhr.responseText);
           console.log(donnee) ;
            callback(donnee);
           
            
                break;
            default: displayErrors(xhr.status);
        }
    };
    xhr.send();
    
} 

function displayErrors(stat){
    let messages = {// tableau  d'erreu 
        400: 'Requete incorrecte',
        401: 'Authentifiez-vous',
        404: 'Page non trouvée',
        500: 'Erreur interne du serveur',
        503: 'Service indisponible'
    };
    document.getElementById("errors").innerHTML = messages[stat]; //Affiche le message d'erreur 
    
    affiche_masque("errors"); //Afficher ou masquer l'erreur comme TP1  

    setTimeout(function(){affiche_masque("errors");},5000); // Masquer l'erreur après 5 sc 
}

