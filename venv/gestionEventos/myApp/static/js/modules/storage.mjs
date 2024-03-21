const LOCAL_STORAGE_KEY = 'Clave_de_Datos_del_Sistema.txt'

// De cada estudiante se almacena su
// nombre, apellido, solapin y los registrosDeClase de clases
export class Estudiante {

    constructor (nombre, apellido, solapin) {

        if (!nombre || !apellido || !solapin)
            throw new Error('Provea los datos necesarios al contructor de la clase')

        this.nombre = nombre;
        this.apellido = apellido;
        this.solapin = solapin;

        this.registrosDeClase = [];
    }

}

// En cada frecuencia de clase se almacena
// el estado de asistencia y la nota
export class RegistroClase {
    
    constructor(asistencia=false, nota=2){
        this.asistencia = asistencia;
        this.nota = nota;
    }

}

let datosLocales = null;

// lee el JSON almacenado en el almacenamiento local
// y lo convierte en el objeto datos del sistema
function leerDatos() {
    
    let datosJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (datosJSON === null) {
        datosJSON = `{
            "estudiantes": [],
            "cantClases": 3
        }`;
    }

    // parseo el objeto de datos del sistema desde su JSON
    datosLocales = JSON.parse(datosJSON);
}

leerDatos();

// guarda el objeto de datos del sistema en formato JSON
// en el almacenamiento local del navegador    
export function guardarDatos() {
    // convierto el objeto de datos de sistema a su valor JSON
    let datosJSON = JSON.stringify(datosLocales);

    localStorage.setItem(LOCAL_STORAGE_KEY, datosJSON);
}

// almacena un nuevo estudiante en el sistema y guarda los cambios
function guardarNuevoEstudiante(estudiante) {

    if (!(estudiante instanceof Estudiante)) {
        throw new Error('Solo se admiten estudiantes');
    }

    // creo los registros de clases necesarios para un estudiante
    // recien creado y se los asigno
    for(let i = 0; i < datosLocales.cantClases; i++){
        estudiante.registrosDeClase.push(new RegistroClase());
    }
    
    datosLocales.estudiantes.push(estudiante);
    
    guardarDatos(); // ... actualizar almacenamiento
    
    return estudiante;
}

// retorna el numero de estudiantes registrados en el sistema
function getCantEstudiantes() {
    return datosLocales.estudiantes.length;
}

// retorna un estudiante registrado en el dado su indice de registro
function getEstudiante(indice) {
    return datosLocales.estudiantes[indice];
}

// elimina un estudiante de la lista de estudiantes dado su solapin
function eliminarEstudiante(solapin){

    for(let indice in datosLocales.estudiante){
        let estudiante = datosLocales.estudiantes[indice];
        
        if(estudiante.solapin === solapin){
            delete datosLocales.estudiantes[indice];
            datosLocales.estudiantes = datosLocales.estudiantes.flat()
            return;
        }

    }

}

// retorna el numero de clases dadas hasta el momento
function getCantClases(){
    return datosLocales.cantClases;
}

// este objeto envuelve todas las funciones necesarias para operar
// con los estudiantes del sistema en forma de metodos
export const GestorEstudiantes = {
    guardarNuevoEstudiante,
    getCantEstudiantes,
    getEstudiante,
    eliminarEstudiante,
}

// Este objeto envuelve todas las funciones necesarias para operar
// con las clases del sistema en forma de metodos
export const GestorClases = {
    getCantClases
}

