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
});

