const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',validarFormulario);

function validarFormulario(e){
    e.preventDefault(); //que no se ejecute el action y no se envie los datos por post
    console.log(e);
    console.log(e.target.method);
    console.log(e.target.action); // ->  http://127.0.0.1:5500/buscador
}