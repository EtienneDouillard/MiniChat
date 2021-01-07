getChannels(); 
getMessages();
document.getElementById('channels-list').addEventListener('change', getMessages);


document.getElementById("connecter").addEventListener("submit",login);
document.getElementById("deconnecter").addEventListener("click",logout);


function getChannels(){
    ajaxRequest('GET','PHP/chat.php?request=channels',displayChannels);
}



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


function displayChannels(rep){

    /*
    for (p in rep){
        console.log(p); //Ecrire sur la console les noms et id de la liste JSON
        console.log(rep[p].name);
        console.log(rep[p].id);
    }
    */
    
    let Texte0 = rep[0].name; // récupérer le nom 0 de la liste de données  JSON 
    document.getElementById("option0").innerHTML =  Texte0;//innerHTML  Ajouter texte à afficher 

    let Texte1 = rep[1].name;// récupérer le nom 1 de la liste de données  JSON 
    document.getElementById("option1").innerHTML =  Texte1;//innerHTML  Ajouter texte à afficher 

    let Texte2 = rep[2].name;// récupérer le nom 2 de la liste de données  JSON 
    document.getElementById("option2").innerHTML =  Texte2;//innerHTML  Ajouter texte à afficher 

    let Texte3 = rep[3].name;// récupérer le nom 3 de la liste de données  JSON 
    document.getElementById("option3").innerHTML =  Texte3;//innerHTML  Ajouter texte à afficher 

    let Texte4 = rep[4].name;// récupérer le nom 4 de la liste de données  JSON 
    document.getElementById("option4").innerHTML = Texte4; //innerHTML  Ajouter texte à afficher 

    //getMessages();
    
}


function getMessages(){//récupérer le salon sélectionné dans la liste déroulante.

    let selectElem = document.getElementById('canaux');
    
   // let pElem = document.getElementById('id1'); //element à modifier 

    // Quand une nouvelle <option> est selectionnée
    selectElem.addEventListener('change', function() {
        let i = selectElem.selectedIndex;
        //console.log(index) ;
        //pElem.innerHTML =  index   // Rapporter la donnée index à <id1>
        ajaxRequest('GET','PHP/chat.php?request=messages&channel_id=' + i,displayMessages);
        //i" est un paramètre dynamique = id du salon sélectionné
       
        ;})
      

   
}

function displayMessages (rep){
     //console.log(rep) ;
     let pElem = document.getElementById('textarea'); //element à modifier 
    
     //pElem.innerHTML = rep.message + ' : ' + rep.nickname ; //innerHTML  Ajouter texte à afficher 

    let Repmessage = '';

    for (p in rep){
       
        //console.log('message',rep[p].message);
        //console.log('nickname',rep[p].nickname);
        Repmessage += rep[p].message + ' : ' + rep[p].nickname + ' \n'; //Afficher les messages 
        console.log(Repmessage);
    }
    
   
    pElem.innerHTML = Repmessage;


       
}


