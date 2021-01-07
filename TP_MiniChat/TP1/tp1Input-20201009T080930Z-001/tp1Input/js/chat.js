

function login(event){
    event.preventDefault();//charrger sur la même page 
    affiche_masque("authentication");
    affiche_masque("chat");
}

function logout(){
    let result = window.confirm("Confirmer la déconexion ?");
    if (result==1){
        
        affiche_masque("chat");
        affiche_masque("authentication"); 

    }
    
}

document.getElementById("connecter").addEventListener("submit",login);
document.getElementById("deconnecter").addEventListener("click",logout);



