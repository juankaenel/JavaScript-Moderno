const carrito = ['Celular'];

const producto = {
    nombre: 'Mate',
    precio: 200
}

const producto2 = {
    nombre: 'Yerba',
    precio: 30
}

const producto3 = {
    nombre: 'control remoto',
    precio: 2000
}

let resultado;
let resultado2;

resultado = [...carrito,producto]; //en resultado va tener la copia del carrito y en el mismo pusheamos el producto al final
resultado2 = [producto,...carrito]; //en resultado va tener la copia del carrito y en el mismo pusheamos el producto al inicio

console.table(resultado);
console.table(resultado2);