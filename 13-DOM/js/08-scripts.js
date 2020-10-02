//Transversing de dom es la navegación por el dom a través de los diferentes elementos
// ir recorriendo, ir encontrando el camino sobre los diferentes nodos o elementos html del sitio

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
//console.log(navegacion.childNodes) //Los espacios en blanco son considerados elementos
//console.log(navegacion.children) //Los espacios en blanco no son considerados elementos

//console.log(navegacion.children[1].nodeName)
//console.log(navegacion.children[1].nodeType)

const card = document.querySelector('.card');
//card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';
//
////Cambiar la imagen a través del traversing
//card.children[0].src = 'img/hacer3.jpg';

//traversing del hijo al padre

//onsole.log(card.parentNode); //padre del card
//onsole.log(card.parentElement); //padre del card
//onsole.log(card.parentElement.parentElement.parentElement); //padre del card del padre del padre del padre xd

//seleccionar segundo elemento

//console.log(card.nextElementSibling);
//console.log(card.nextElementSibling.nextElementSibling);

//const ultimoCard = document.querySelector('.card:nth-child(4)'); //accedo al 4 elemento
//
//console.log(ultimoCard.previousElementSibling); //anteultimo