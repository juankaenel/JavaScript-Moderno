//eliminar elementos del DOM
//const primerEnlace = document.querySelector('a');
//eliminar por si mismo
//primerEnlace.remove(); 

//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children[2]);
navegacion.removeChild(navegacion.children[2]);
