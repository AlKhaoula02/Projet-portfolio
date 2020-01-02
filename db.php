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
?>