//Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen más de una vez

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

const noExiste = document.getElementsByClassName('NoExiste'); //retorna un arreglo vacío