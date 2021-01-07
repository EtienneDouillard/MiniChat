
    <?php
    include("constants.php");

    function dbConnect(){
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

  

    function dbGetChannels($conn)
    {
      try
      {
        $channels = $conn->query('SELECT * FROM channels');
        $result = $channels->fetchAll(PDO::FETCH_ASSOC);
      }
      catch (PDOException $exception)
      {
        error_log('Request error: '.$exception->getMessage());
        return false;
      }
      return $result;
    }

    function dbGetMessages($conn,$ID){
      try
      {
        $query = $conn->query('SELECT m.message, u.nickname FROM messages m INNER JOIN users u on u.login = m.userLogin WHERE channelId ='.$ID.';');//Requête 
        $output = $query->fetchAll(PDO::FETCH_ASSOC);
      }
      catch (PDOException $exception) // Erreur 
      {
        error_log('Request error: '.$exception->getMessage());
        return false;
      }
      return $output; // return  liste des messages avec pseudonymes pour un ID de salon demandé. 
    }



    ?>

