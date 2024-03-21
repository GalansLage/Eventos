// contexto independiente del modulo

const HTTP_HOST = 'localhost'
const HTTP_PORT = '8100'

function solicitarDatos(ruta) {

    let httpURL = 'http://' + HTTP_HOST + ':' + HTTP_PORT + '/' + ruta;
    let metodo = 'GET';

    let xhr = new XMLHttpRequest();
    xhr.open(metodo, httpURL)   // inicio la comunicacion con el servidor

    xhr.onload = () => {          // esta funcion recive la respuesta
        let texto = xhr.responseText;
    }

    xhr.onerror = () => {          // esta funcion recive error en la solicitud
        let error = xhr.status;
    }

    xhr.responseType = ""


    let formData = new FormData();      // creo un formulario virtual
    formData.append('clave0', 'valor0')  // agrego un nuevo campo y su valor
    formData.append('clave1', 1)         // agrego un nuevo campo y su valor

    let value0 = formData.get('clave0'); // obtengo el valor del campo
    formData.delete('clave0')            // elimino el campo


    xhr.send(formData)                   // lanzo la solicitud XHR con el formulario
    fetch(httpURL, { body: formData })      // lanzo la solicitud Fetch con el formulario


    fetch(httpURL)
        .then((response) => { // funcion para recivir la respuesta
            let text = response.text()
        }).catch((error) => { // funcion para tratamiento de errores

        });

    // Definimos el JSON como una cadena de texto
    let jsonString = `{
        "nombre": "Juan",
        "edad": 30,
        "ciudad": "Madrid"
    }`;

    // Parseamos la cadena de texto a un objeto JavaScript
    const objetoDatos = JSON.parse(jsonString);
    
    // Convertimos un objeto a su JSON equivalente
    jsonString = JSON.stringify(objetoDatos)


    // Ahora podemos acceder a los valores del objeto como si fuera un objeto normal
    console.log("Nombre:", datosPersonales.nombre); // Salida: Nombre: Juan
    console.log("Edad:", datosPersonales.edad);   // Salida: Edad: 30
    console.log("Ciudad:", datosPersonales.ciudad); // Salida: Ciudad: MadridF




}

function enviarDatos(datos) {
    // ...
}

// declaracion de las valores que se desean compartir
export {
    solicitarDatos, enviarDatos, HTTP_HOST
}


