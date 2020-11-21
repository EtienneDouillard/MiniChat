<?php

include("cst.php");

function connexion(){
    $dsn = "pgsql:dbname=".DB_NAME; "host= ".DB_SERVER;"port=".DB_PORT;
    $user = DB_USER;
    $password = DB_PASSWORD;

    try {
        $conn = new PDO($dsn, $user, $password);
        //$con = new PDO('psql:'.DB_NAME.';'.DB_SERVER. ';'.DB_PORT,DP_PASSWORD);
        return $conn ; 
        
        } catch (PDOException $e) {
        echo 'Connexion échouée : ' . $e->getMessage();
        return false ;
    }
    
}
?>