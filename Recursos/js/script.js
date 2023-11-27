class MiHead extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
            `;
    }
  }
  customElements.define('mi-header', MiHead);
  
  class MiFoot extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
            `;
    }
  }
  customElements.define('mi-footer', MiFoot);

  
  /* 
    Función para validar el correo en la página de contáctenos 
  */
  $(document).ready(function() {
    //Se envalúa cada que se una tecla se digita en el input de correo
    $('#correo').on('input', function() {
        var emailInput = $(this);
        var email = emailInput.val();

        // Expresión Regular para el Correo
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
        e.preventDefault(); 

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
function showImages(batch) {
  $('.tm-gallery-item').hide(); // Hide all gallery items

  // Calculate starting and ending indexes for the batch
  var start = (batch - 1) * 6;
  var end = start + 6;

  // Show the images in the selected batch
  $('.tm-gallery-item').slice(start, end).show();
}

// Show the first batch of images upon page load
$(document).ready(function() {
  showImages(1);
});

//Functón de las imágenes de la galería
    $(document).ready(function () {
        // Asigna el evento clic a los botones del aside
        $('#link1').on('click', function () {
          showImages(1)
        });

        $('#link2').on('click', function () {
          showImages(2)
        });

        $('#link3').on('click', function () {
          showImages(3)
       });
      
        $('#link4').on('click', function () {
        showImages(4)
      });

    });