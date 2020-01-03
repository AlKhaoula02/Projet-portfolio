
<?php


$values = array("nom" => "", "email" => "","message" => "", "nomError" => "", "emailError" => "","messageError" => "", "isSuccess" => false);
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $values["nom"] = $_POST["nom"];
    $values["email"] = $_POST["email"];
    $values["message"] = $_POST["message"];
    $values["isSuccess"] = true;
    if (empty($values["nom"])) {
        $values["nomError"] = "Veuillez renseigner votre Nom";
        $values["isSuccess"] = false;
    }
    if (empty($values["email"])) {
        $values["emailError"] = "Veuillez renseigner votre Email";
        $values["isSuccess"] = false;
    } 
    if (empty($values["message"])) {
      $values["messageError"] = "Veuillez renseigner votre message";
      $values["isSuccess"] = false;
  } 
    echo json_encode($values);

    
      $name = $values["nom"];
      $email = $values["email"];
      $message = htmlspecialchars($values["message"]);
      $to = "alkhaoula02@gmail.com";
      mail($to, "New message from ".$name." <".$email.">",$message);
  
  }  




?>
