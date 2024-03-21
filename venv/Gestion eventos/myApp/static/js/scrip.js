


  function showLoginModal2() {
    $('#overlay2').modal('show');}  

    function showLoginModal3() {
      $('#overlay3').modal('show');}  

function showLoginModal() {
    $('#overlay').modal('show');

    // $('#loginForm').submit(function(e) {
    //   e.preventDefault();

    //   const usuario = $('#usuario').val();
    //   const password = $('#contrasena').val();

    //   if (verificarCredenciales(usuario,password)) {
    //     localStorage.setItem('sesionIniciada',true);
    //     localStorage.setItem('usuario',usuario);
    //     $('#overlay').modal('hide');
    //     let xd = "/reserva";
    //     window.location.href = 'http://127.0.0.1:8000/reserva';
    //   }else {
    //     alert('Credenciales incorrectas');
    //   }
    // })

  }

function showRegisterModal() {
  $('#overlay2').modal('show');
  $('#overlay').modal('hide');
}

function mostrarSeccion(idSeccion) {
  var secciones = document.querySelectorAll('article section');
  
  secciones.forEach(function(seccion) {
    seccion.classList.remove('seccion-visible');
    seccion.classList.add('seccion-oculta');
  });
  
  var seccionMostrar = document.getElementById(idSeccion);
  seccionMostrar.classList.remove('seccion-oculta');
  seccionMostrar.classList.add('seccion-visible');
}

function showForm() {
  if(document.getElementById("modifyForm").style.display === "none"){
    document.getElementById("modifyForm").style.display = "block";
  }
  else{
    document.getElementById("modifyForm").style.display = "none";

  }

}
  
function showAttendees(eventId) {
const attendeesList = document.getElementById(`attendeesList${eventId}`);
attendeesList.style.display = attendeesList.style.display === "none" ? "block" : "none";
}

const checkbox = document.getElementById("myCheck");
const button = document.getElementById("myButton");

checkbox.addEventListener("change", () => {
button.disabled = !checkbox.checked;
});

const checkbox2 = document.getElementById("myCheck2");
const button2 = document.getElementById("myButton2");

checkbox2.addEventListener("change", () => {
button2.disabled = !checkbox2.checked;
});

const checkbox3 = document.getElementById("myCheck3");
const button3 = document.getElementById("myButton3");

checkbox3.addEventListener("change", () => {
button3.disabled = !checkbox3.checked;
});


function showCreateModal() {
  $('#overlay').modal('show');

  $('#loginForm').submit(function(e) {
    e.preventDefault();

    const usuario = $('#usuario').val();
    const password = $('#contrasena').val();

    
  })

}

document.querySelector('form').classList.add('was-validated');

const checkboxes = document.querySelectorAll('.opcion');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      checkboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    });
  });


  function habilitarEdicion() {
    // Habilita los campos para edición
    document.getElementById("title").readOnly = false;
    document.getElementById("description").readOnly = false;
    document.getElementById("date").readOnly = false;
    document.getElementById("time").readOnly = false;
    document.getElementById("cost").readOnly = false;
    document.getElementById("namePlace").readOnly = false;
    document.getElementById("direction").readOnly = false;
    document.getElementById("cap").readOnly = false;
    document.getElementById("name").readOnly = false;
    document.getElementById("gmail").readOnly = false;
    
    
}

function guardarCambios() {
    // Aquí puedes implementar la lógica para guardar los cambios en una base de datos o donde corresponda
    document.getElementById("title").readOnly = true;
    document.getElementById("description").readOnly = true;
    document.getElementById("date").readOnly = true;
    document.getElementById("time").readOnly = true;
    document.getElementById("cost").readOnly = true;
    document.getElementById("namePlace").readOnly = true;
    document.getElementById("direction").readOnly = true;
    document.getElementById("cap").readOnly = true;
    document.getElementById("name").readOnly = true;
    document.getElementById("gmail").readOnly = true;
    document.getElementById("aplicarCambios").readOnly = true;
    
    alert("Cambios guardados correctamente.");
}