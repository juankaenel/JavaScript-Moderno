// Copiar objetos
const producto = {
    categoria: "informatic",
    nombre: "impresora",
    disponible: true,
}

const medidas = {
    peso: 1,
    medidas: 3
}

const resultado = Object.assign(producto,medidas); //copia dos objetos en la var resultado

//otra forma de copiar es con spread operator

const resultado2 = {...producto, ...medidas} //... -> toma una copia de producto, ... toma una copia de medidas

console.log(resultado);
console.log(resultado2);