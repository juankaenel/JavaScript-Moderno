function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

function Empresa(nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const juan = new Cliente('Juan',222);
const devkoders = new Empresa('Devkoders',0,'Programación web');

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de: ${saldo}`;
}

function formatearEmpresa(empresa){
    const {nombre, saldo,categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo de: ${saldo} y su categoría es ${categoria}`;
}


console.log(formatearCliente(juan));
console.log(formatearEmpresa(devkoders));
/*A medida que más grande se vuelve el código es más dificil de ver que funciones o metodos son para empresa o cliente
ahí aparecen los prototypes a dar la solución, ya que cada objeto va a tener sus propios prototipos
*/