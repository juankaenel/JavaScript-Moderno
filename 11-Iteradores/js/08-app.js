//for in itera sobre objetos
const automovil= {
    precio:3333,
    modelo: 1969,
    marca:'Chevrolet',
    nombre:'Chevrolet Turbo'

}
for(let propiedad in automovil){
    console.log(propiedad); //accede a la clave
    console.log(automovil[propiedad]); //accede al valor
}


//para iterar sobre objetos con el of, fue agregado en ecma script 7
for(let [llave,valor] of Object.entries(automovil)){
    console.log(llave +'-'+ valor); 
};