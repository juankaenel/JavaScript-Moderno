class Cliente{
    //Constructor
    constructor(nombre,saldo) {
        this.nombre= nombre;
        this.saldo = saldo;
    }
    //Métodos
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}, telefono: ${this.telefono}, categoria: ${this.categoria}`;
    }
    //Método estático
    static bienvenida(){ //para mostrarlas no requieren una instancia
        return `Bienvenido al cajero`;
    }
}

//HERENCIA
class Empresa extends Cliente{
//Constructor
    constructor(nombre,saldo,telefono,categoria) {
        super(nombre, saldo); //Heredamos los atributos del constructor padre
        this.telefono = telefono;
        this.categoria = categoria;
    }
    //Método estático
    static bienvenida(){ //Reescribimos el método
        return `Bienvenido al cajero para empresas`;
    }
}

const juan = new Cliente('Juan',400);
const empresa = new Empresa('Devkoders',4400,333333,'Gold');

console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());