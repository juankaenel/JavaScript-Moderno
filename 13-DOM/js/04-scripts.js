//querySelector retorna 1 sólo elemento -> el primero que encuentre con ese id, clase o etiqueta html

//Retorna la primera clase(.) card que encuentre
const card = document.querySelector('.card');
console.log(card);

//Podemos tener selectores específicos de CSS
const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//Seleccionar formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

//Seleccionar elementos html
const nav = document.querySelector('nav');
console.log(nav);