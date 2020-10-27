const cargarJSONArray = document.querySelector('#cargarJSONArray');
cargarJSONArray.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado=> mostrarHTML(resultado));

    function mostrarHTML(empleados){ //no puedo aplicar destructuring pq es un arreglo
            const contenido = document.querySelector('.contenido');
            let html = '';
            empleados.forEach(empleado=>{
                const {id,nombre,empresa,trabajo} = empleado;

                html = `
                <p>Id: ${id}</p>
                <p>Empleado: ${nombre}</p>
                <p>Empresa: ${empresa}</p>
                <p>Trabajo: ${trabajo}</p>
                `;
            });
            contenido.innerHTML = html;
    }

}