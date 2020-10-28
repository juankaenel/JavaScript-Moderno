/*Partials y curryng*/

const suma = (a,b,c) => a+b+c;

const parcial = a => b => c => suma(a,b,c);//aplica curryng y parcial dividiendo la funcion en tres partes

//divido la funcion en tres
const resultadoParcial = parcial(2)(3)(4); 

console.log(resultadoParcial);
