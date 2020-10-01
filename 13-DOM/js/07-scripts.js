//modificando css con javascript

// const encabezado = document.querySelector('h1');

// console.log(encabezado.style);

// justify-content -> en js es justifyContent
// background-color -> en js es backgroundColor

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase'); //agregamos 2 nuevas clase
card.classList.remove('card'); //borramos la clase card
console.log(card.classList);