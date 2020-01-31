import React from 'react'


const Contact = () =>{


    return(
        <div id="Contact" class="container">
  <form id="contact" action="" method="post">
    <h3>Quick Contact</h3>
    <h4>Contactez-nous, Vous aurez une reponse dans les 24h</h4>
    <fieldset>
      <input placeholder="Votre Nom et Prenom" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Adresse Email" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Numero de tel" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder=" votre site web ( http:// ... )" type="url" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="tapez votre msg ici." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>



    )
}


export default Contact;