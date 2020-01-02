
<?php

function conn(){
try{
$pdo = new PDO("mysql:host=localhost;dbname=khaoulaa_pf;charset=utf8", "khaoulaa", "i0TI0Y5B9SLmjg==");
} catch(PDOEXPECTION $e) {
   mail ('alkhaoula02@gmail.com');
   echo 'connexion echouée'. $e->getMessage();
}
return $pdo;
}

// require "db.php";
$conn= conn();

 if (isset($_POST['nom']) && isset($_POST['texte']) && isset($_POST['email']) && !empty($_POST['texte']) ) {
   $to = "alkhaoula02@gmail.com";
   $name = htmlspecialchars($_POST['nom']);
   $email = htmlspecialchars($_POST['email']);
   $message = htmlspecialchars($_POST['texte']);
   $headers = "From:" . ($_POST['email']);
   $conn->query("INSERT INTO mail(name,message,email,date) VALUES ('{$name}','{$message}','{$email}', now());");

   mail($to,$headers,$name,$email,$message);


   echo "Votre message a bien été envoyé: <br><br>";
   echo $subject. "<br><br>";
   echo $message. "<br><br>";
   var_dump($_POST);
}

