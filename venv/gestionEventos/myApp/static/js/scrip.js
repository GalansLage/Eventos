


function showLoginModal2() {
  $('#overlay2').modal('show');}  

  function showLoginModal3() {
    $('#overlay3').modal('show');}  

function showLoginModal() {
    $('#overlay').modal('show');


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

const checkboxs = document.querySelectorAll('.only-two');
const button = document.getElementById("myButton");

for (let checkbox of checkboxs) {
    checkbox.addEventListener("change", () => {
    button.disabled = !checkbox.checked;
    }); 
}

// const checkbox2 = document.getElementById("myCheck2");
// const button2 = document.getElementById("myButton2");

// checkbox2.addEventListener("change", () => {
// button2.disabled = !checkbox2.checked;
// });

// const checkbox3 = document.getElementById("myCheck3");
// const button3 = document.getElementById("myButton3");

// checkbox3.addEventListener("change", () => {
// button3.disabled = !checkbox3.checked;
// });


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


  
    // Habilita los campos para edición
    let elements = document.querySelectorAll('.my-input');
    let boot = document.getElementById("modificar")
    let hid = document.getElementById("oculto")
    
    elements.forEach((element) => {
      if(element.checked){
        hid.value = element.value
      }

    })

    boot.addEventListener("click", () => {

      elements.forEach((element) => {
        element.readOnly = !element.readOnly;
    });

    })
   
  

function guardarCambios() {
    
     let elements = document.querySelectorAll('.my-input');
    elements.forEach((element) => {
        element.readOnly = true;
    });
    document.getElementById("aplicarCambios").readOnly = true;
    
    alert("Cambios guardados correctamente.");
}

let Checked = null;

// Asigna el evento onclick a los checkboxes
for (let CheckBox of document.getElementsByClassName('only-one')) {
    CheckBox.onclick = function () {
        if (Checked != null) {
            Checked.checked = false;
        }
        Checked = CheckBox;
    }
}

