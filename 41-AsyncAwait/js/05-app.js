const url='https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos(){
    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado =>console.log(resultado))
        .catch(error=>console.log(error));
}

async function obtenerDatosAsync(){
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json(); //hasta que no se termine de ejecutar lo de arriba esto no se ejecuta
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}