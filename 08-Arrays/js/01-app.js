// Los arrays sirven para agrupar múltiples elementos del mismo tipo -> tanto en objetos como arreglos, por más que usen const se pueden modificar sus datos, salvo que usen el strict

const numeros = [10,20,12]
const meses = new Array('Enero', 'Febrero')

const variosElementos = [10,null,'Hola',{objeto:'hola',trabajo:'programador'}, ['Otro array']];
console.log(variosElementos);