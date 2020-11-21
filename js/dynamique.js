

function affiche_masque(id){
    let element = document.getElementById(id);
    element.classList.toggle("visible"); // si la classe visible  existe on la supprime sinon on l'ajoute
}

function ecriture(event){
    event.preventDefault();//charrger sur la même page 

    affiche_masque("ecriture"); //masque écriture car visible existe initalement donc on le supprime 
    affiche_masque("affichage");//affiche  affichage dans 'affichage' classe 'existe' n'est pas la donc on l'ajoute 
    
}

function affichage(event){
    event.preventDefault();//charrger sur la même page    
    affiche_masque("affichage"); //afficher affichage  
    affiche_masque("ecriture");//masquer ecriture  
   
}



let b = document.getElementById("boutonenvoyer");
b.addEventListener("click",ecriture); //click sur bouton déconnecter --> affiche la page authentification. 

let a = document.getElementById("boutonretour");
a.addEventListener("click",affichage); //click sur bouton déconnecter --> affiche la page authentification.

