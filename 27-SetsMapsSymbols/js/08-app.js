const ciudades = ['Madrid','Bs As','Porto Alegre'];
const numeros = new Set([123],[1234],[102]);
const datos = new Map();

datos.set('nombre','juan');
datos.set('apellido','kovid');

//Entries iterator -> retorna clave valor
//for(let entry of ciudades.entries()){
//    console.log(entry);
//}
//for(let entry of numeros.entries()){
//    console.log(entry);
//}
//for(let entry of datos.entries()){
//    console.log(entry);
//}

//Values iterator
//for(let value of ciudades.values()){
//    console.log(value);
//}
//for(let value of numeros.values()){
//    console.log(value);
//}
//for(let value of datos.values()){
//    console.log(value);
//}

//Keys iterator
//for(let key of ciudades.keys()){
//    console.log(key);
//}
//for(let key of numeros.keys()){
//    console.log(key);
//}
//for(let key of datos.keys()){
//    console.log(key);
//}

/*Default*/
for(let ciudad of ciudades){
    console.log(ciudad);
}
for(let numero of numeros){
    console.log(numero);
}
for(let dato of datos){
    console.log(dato);
}