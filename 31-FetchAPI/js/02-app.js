const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    url = 'data/empleado.json';
    fetch(url)
        .then(respuesta => respuesta.json()) //return respuesta.json -> return es implícito
        .then(datos => mostrarHTML(datos)); //le envio los datos a la función
}
function mostrarHTML({id,nombre,empresa,trabajo}){ //destructuring de datos, me permite pq es un objeto
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
    <p>Id: ${id}</p>
    <p>Empleado: ${nombre}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `;
}
