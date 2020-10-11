/*
 Las clases en js llegan para mejorar la sintaxis del object constructor, al final
 termina siendo un object constructor y los métodos de una clase terminan siendo los prototypes
 Al final siguen siendo lo mismo pero las clases permiten crear prototypes de forma más sencilla

 */

//Class declaration
class Cliente{
    //Constructor
    constructor(nombre,saldo) {
        this.nombre= nombre;
        this.saldo = saldo;
    }
    //Métodos
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    //Método estático
    static bienvenida(){ //para mostrarlas no requieren una instancia
        return `Bienvenido al cajero`;
    }

}
const juan = new Cliente('Juan',400);
console.log(juan);
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida()); //los métodos estáticos no requieren una instancia

//Class expression
const Cliente2 = class {
    //Constructor
    constructor(nombre,saldo) {
        this.nombre= nombre;
        this.saldo = saldo;
    }
}

const juan2 = new Cliente2('Juan',400);
console.log(juan2);

