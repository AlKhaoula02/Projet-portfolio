
     
$(document).ready( function () {
  // Ajout returnOnTop button
  $('body').append('<div id="returnOnTop" title="Retour en haut"> <svg version="1.1" id="arrow-top" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 284.929 284.929"><path d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566C284.929,199.378,283.984,197.188,282.082,195.285z"><path></svg></div>');


  // On click, scrollTop
  $('#returnOnTop').click(function() {
    console.log("test");
      window.scrollTo(0,0)
  });
 

$(window).scroll(function() {
  // si on top le boutton fadeout, sinon le boutton fadein
  if ($('body, html').scrollTop() == 0) $('#returnOnTop').fadeOut();
  else $('#returnOnTop').fadeIn();
});
});





$(function () {

  // Ajout d'événement lors de l'envoi du formulaire
  $('#contact-form').submit(function (e) {

      // Enlever le comportement par défaut lors de l'envoi
      e.preventDefault();

      // Mettre à zéro les messages d'erreur
      $('.error').empty();

      // Récupérer le contenu du formulaire dans une variable
      let postdata = $('#contact-form').serialize();

      // AJAX
      $.ajax({
          // type de requête (get ou post)
          type: 'POST',
          // url vers lequel on envoie les données : fichier ciblé
          url: 'mail.php',
          // type de données à recevoir
          data: postdata,
          dataType: 'json',
          // si succès -> fonction à exécuter
          success: function(result) {
              // Si nous n'avons pas de messages d'erreur
              if (result.isSuccess) {
                  $("#contact-form").append("<p class='msg'>Votre message a bien été envoyé.</p>");
                  // Remettre les valeurs à zéro
                  $("#contact-form")[0].reset();
              }
              else {
                  // Afficher les messages d'erreur
                  $("#nom + .error").html(result.nomError);
                  $("#email + .error").html(result.emailError);
                  $("#message + .error").html(result.messageError);
              }

          }

      });


  });


})



// let form = document.querySelector("#formulaire");
// console.log(form)
// let nom = document.getElementById('#nom');
// console.log(nom)
// let email = document.getElementById('#email');
// let message = document.getElementById('#message');

// form.addEventListener("submit", function(e){
//   e.preventDefault();
  
  
// if(!nom.value.match(/^[a-zA-Z ]+$/))
//   {
//    alert("tapez un  nom valable");
//    nom.style.backgroundColor = "lightgray";
//    email.style.backgroundColor = "transparent";
//    message.style.backgroundColor = "transparent";
//   }

//   else if (!email.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) 
//   {
//   alert("Tapez un email valable");
//   email.style.backgroundColor = "lightgray";
//   nom.style.backgroundColor = "transparent";
//   message.style.backgroundColor = "transparent";
//   }
//     else if (!message.value.match(/^[a-zA-Z ]+$/)) 
//     {
//     alert("Pensez à taper un message !");
//     message.style.backgroundColor = "lightgray";
//     nom.style.backgroundColor = "transparent";
//     email.style.backgroundColor = "transparent";
//     }
    
//       else if ((nom.value.match(/^[a-zA-Z ]+$/))&&(email.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))&&(message.value.match(/^[a-zA-Z ]+$/)))
//         {
//           form.submit();
//           console.log("form submitted");
//         }
//   else
//      {
//        alert("Veuillez remplir correctement tous les champs");
//       };
//     }); 


