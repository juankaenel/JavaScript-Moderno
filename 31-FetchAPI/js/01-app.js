const cargarTextBtn = document.querySelector('#cargarTxt');

cargarTextBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/datos.txt';

    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            // return respuesta.json();
            return respuesta.text();
        })
        .then(datos=>{ //en este segundo then vienen los datos de la respuesta de arriba
            console.log(datos);
        })
        .catch(error=>{
            console.log(error);
        })
}
