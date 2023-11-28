
/**
 * Scripts para el Reciclaje de Footer
 */
  class MiFoot extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
                <a href="index.html" target="_blank"><h5 style="font-family: Frijole; color: white;"></a>
                  Paranormal Tours CR
                  </h5>
                  <hr/>
                    <p>&copy; 2023. Todos los derechos reservados.</p>
                  <div class="social-icons">
                    <a href="https://www.facebook.com" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                     <a href="https://twitter.com/" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                  </div>
            `;
    }
  }
  
  customElements.define('mi-footer', MiFoot);

  
  /* 
    Función para validar el correo en la página de contáctenos 
  */

  $(document).ready(function() {
    //Se envalúa cada que se una tecla se digita en el input de correo
    //el input de valida con el id del atributo correo
    $('#correo').on('input', function() {
        var emailInput = $(this);
        var email = emailInput.val();

        // Expresión Regular para el Correo
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //Test es una función de jQuery para comparar una expresión contra
        //un regex o expresión regular
        if (emailRegex.test(email)) {

            // Si el correo es válido, aplica un CSS que pinta el campo 
            // de color verde
            emailInput.removeClass('is-invalid').addClass('is-valid');
            $('#emailError').hide();
        } else {

            //El formato es iválido, muestra un pequeño mensaje de que no es válido el correo
            // y pinta el input con un color rojizo
            emailInput.removeClass('is-valid').addClass('is-invalid');
            $('#emailError').show();
        }
    });

    $('#myForm').submit(function(e) {
        e.preventDefault(); //previene que el form se envíe antes de que esta evaluación se realice

    });
});


/* 
  Función para simular que el correo ha sido enviado correctamente
  Adicionalmente limpia los campos del formulario
  Elimina la clase .isValid del campo de input
*/
$(document).ready(function() {
  $('#formularioContacto').submit(function(e) {
      e.preventDefault(); // Evitar que el formulario se envíe por defecto

      var emailInput = $('#correo');

      //Si el correo es válido, significa que tiene añadida la clase .isValid de CSS
      //Si es así, se procede a enviar el correo (mostrar el MODAL)
      if (emailInput.hasClass('is-valid')) {

          // Mostrar un modal o alerta
          $('#successModal').modal('show');

          // Limpiar los campos del formulario
          $('#nombre').val('');
          $('#correo').val('');
          $('#mensaje').val('');
          
          // Remover clases de validación
          emailInput.removeClass('is-valid');
      }
  });
});

//Functón de las imágenes de la galería
//ayuda a mostrarlas de manera ordenada en grupos de 6
//BATCH = grupo de objetos del DOM que comparten mismas características 
// Para el caso de la función, batch representa un número, el número de set a mostrar
//Ejemplo batch 1 (primeras 6 imágenes), batch 2 (de la image 7 a la 12)... etc
function mostrarImagenes(batch) {

  //Todo elemento con la clase .tm-gallery-item será escondido por defecto
  $('.tm-gallery-item').hide(); 

  // Fórmula para calcular cuáles elementos se mostrarán
  //la página dependiendo del valor enviado en batch
  //Ejemplo mostrar el primer batch: 
  var inicio = (batch - 1) * 6;
  var fin = inicio + 6;

  // Muestra todo el contenido asociado a la clase .tm-gallery-item
  // Mostrará el contenido basado en el número de item
  //Esto funciona gracias a que las fotos de la galería llevan un orden específico y usan una clase común
  $('.tm-gallery-item').slice(inicio, fin).show();
}

// Show the first batch of images upon page load
$(document).ready(function() {
  mostrarImagenes(1);
});

//Functón para el filtro del aside de la galería
//Funciona en conjunto con la función de mostrarImágenes
//Esto es posible puesto que los sets están ordenados de manera fija
//en la galería
    $(document).ready(function () {
        // Asigna el evento clic a los botones del aside
        $('#link1').on('click', function () {
          mostrarImagenes(1)
        });

        $('#link2').on('click', function () {
          mostrarImagenes(2)
        });

        $('#link3').on('click', function () {
          mostrarImagenes(3)
       });
      
        $('#link4').on('click', function () {
        mostrarImagenes(4)
      });

    });