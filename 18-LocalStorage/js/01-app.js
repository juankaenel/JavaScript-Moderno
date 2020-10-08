//Forma de agregar datos en local storage
localStorage.setItem('nombre', 'Juancito'); //Local storage solo almacena strings, no almacena otro tipo de datos

const producto = {
    nombre : 'Teclado noga net 4v',
    precio : 3333,
}

//para pasar el objeto a string uso jsonstringify
const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString); //clave, valor


const meses = ['Enero','Febrero','Marzo','Abril'];
// const mesesString = JSON.stringify(meses);
//console.log(typeof mesesString); -> string
localStorage.setItem('Meses',JSON.stringify(meses));
