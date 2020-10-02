//Generar html desde js

const enlace = document.createElement('a'); //creamos un enlace
//añadiendo texto
enlace.textContent = 'Nuevo enlace';
//añadiendole href
enlace.href = '/nuevo-enlace';

enlace.setAttribute('data-enlace','nuevo-enkace');

enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;

console.log(enlace);

//Seleccionar la navegación

const navegacion = document.querySelector('.navegacion'); //selecciono el padre(donde quiero meter el a) y le agrego el enlace
//navegacion.appendChild(enlace); lo agrega al final
navegacion.insertBefore(enlace,navegacion.children[1]); //antes de la pos 1 agregame el a

function miFuncion(){
    alert('Diste click');
}

//Crear un card de forma dinámica

const parrafo1 = document.createElement('p');
parrafo1.textContent= 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent= 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent= '$800 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList = 'img-fluid';
imagen.alt = 'Texto alternativo';

//Creamos el card

const card = document.createElement('div');
card.classList.add('card');

//asignar imagen
card.appendChild(imagen);
//asignar info
card.appendChild(info);

console.log(card);

contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card,contenedor.children[3]); //meto el card antes del 3 card
//contenedor.appendChild(card);