

<?php
    include ("database.php");

    ini_set('display_errors',1);
    error_reporting("E_ALL");


    $connexion =dbConnect(); // créer une connexion en faisan appelle à la fonction de database.php



    if ($connexion != FALSE){// vérification de connexion 

        $requestDB=$_GET['request'] ;//sauvegarder le résultat de la requête avec méthode GET 

        switch($requestDB){
            case 'channels':{
            //Afficher et faire appelle à la fonction  que lorsque le paramètre "request" de la requête vaut "channels"
            $data=dbGetChannels($connexion);
            //print_r($data);// print data de la requête 
            echo json_encode($data); // print data de la requête sous forme Json 
            break;
        }
            case 'messages':{
            $id = $_GET['channel_id'];
            //Afficher et faire appelle à la fonction  que lorsque le paramètre "request" de la requête vaut "channels"
            
            $data=dbGetMessages($connexion,$id);
            //print_r($data);// print data de la requête 
            echo json_encode($data); // print data de la requête sous forme Json 
            break;
        }
        default:
            echo "connexion DB False  "; //erreur de connexion data base  
            break;
        }
    }


/*

    if ($connexion != FALSE){// vérification de connexion 

        $requestDB=$_GET['request'] ;//sauvegarder le résultat de la requête avec méthode GET 

        if ($requestDB == 'channels') {
            //Afficher et faire appelle à la fonction  que lorsque le paramètre "request" de la requête vaut "channels"
            $data=dbGetChannels($connexion);
            //print_r($data);// print data de la requête 
            echo json_encode($data); // print data de la requête sous forme Json 
        
        }else {
        echo "connexion DB False  "; //erreur de connexion data base  
    }


     if($requestDB == 'messages'){
    //Afficher et faire appelle à la fonction  que lorsque le paramètre "request" de la requête vaut "channels"
    $data2=dbGetMessages($connexion,1);
    //print_r($data);// print data de la requête 
    echo json_encode($data2); // print data de la requête sous forme Json 

    }

}
*/

?>
    