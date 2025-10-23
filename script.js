document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var btnDonar = document.getElementById('btn-donar');
  if (btnDonar) {
    btnDonar.addEventListener('click', function () {
      window.location.href = 'donar.html';
    });
  }

  var btnPedir = document.getElementById('btn-pedir');
  if (btnPedir) {
    btnPedir.addEventListener('click', function () {
      window.location.href = 'pedir.html';
    });
  }

  // Manejo del envío del formulario de donación
  var donationForm = document.getElementById('donation-form');
  var formMessage = document.getElementById('form-message');
  var toast = document.getElementById('toast');
  if (donationForm) {
    donationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Validación mínima de campos requeridos
      var fullName = document.getElementById('fullName');
      var contact = document.getElementById('contact');
      if (fullName && contact && fullName.value.trim() && contact.value.trim()) {
        // Oculta el formulario y muestra mensaje de agradecimiento
        donationForm.setAttribute('hidden', 'true');
        if (formMessage) {
          formMessage.removeAttribute('hidden');
        }
        // Muestra toast temporal "peticion enviada"
        if (toast) {
          toast.removeAttribute('hidden');
          // Forzar reflujo para activar transición
          void toast.offsetWidth;
          toast.classList.add('show');
          setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () { toast.setAttribute('hidden', 'true'); }, 200);
          }, 2000);
        }
        // Aquí se podría enviar a un backend mediante fetch()
      } else {
        // Usa la validación nativa del navegador si falta algo
        donationForm.reportValidity && donationForm.reportValidity();
      }
    });
  }
});