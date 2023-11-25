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
  
  /* Función para validar el correo en la página de contáctenos */

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

$(document).ready(function() {
  $('#formularioContacto').submit(function(e) {
      e.preventDefault(); // Evitar que el formulario se envíe por defecto

      var emailInput = $('#correo');
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