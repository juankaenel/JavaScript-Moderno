const encabezado = document.querySelector('.contenido-hero h1');
//const encabezado = document.querySelector('.contenido-hero h1').textContent;
//const encabezado = document.querySelector('.contenido-hero h1').innerText;
//const encabezado = document.querySelector('.contenido-hero h1').innerHTML;
console.log(encabezado);

//console.log(encabezado.innerText); // Si tiene propiedad : visibility: hidden; en el css no lo va a encontrar
//console.log(encabezado.textContent); //si lo va a encontrar
//console.log(encabezado.innerHTML); //Se trae el html entero

const nuevoHead = 'nuevo head'
document.querySelector('.contenido-hero h1').textContent = nuevoHead;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';