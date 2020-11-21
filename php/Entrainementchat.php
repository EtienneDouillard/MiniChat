<?php

include("database2.php"); 

ini_set('display_errors',1);
error_reporting("E_ALL");

$connexion = connexion(); // créer une connexion en faisan appelle à la fonction de database.php


if ($connexion =! false){
    echo "connexion établie";


}else{
    echo "connexion erreur ";

}
?>