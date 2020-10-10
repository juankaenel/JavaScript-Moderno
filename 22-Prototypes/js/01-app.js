//Object literal -> no te permite creear objetos dinámicos ni reutilizables
const cliente = {
    nombre: 'Juan',
    apellido: 'Stoviak'
}

console.log(cliente);


//POO En js, Object Constructor, es reutilizable, yo puedo crear varías instancias del objeto cliente
function Cliente(nombre,apellido){
    this.nombre = nombre,
    this.apellido = apellido,
}

const juan = Cliente('Juan','Stoviak');
