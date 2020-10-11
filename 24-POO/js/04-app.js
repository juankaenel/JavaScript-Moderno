class Cliente{
    #nombre; //campo privado
    /*
    constructor(nombre,saldo) {
        this.#nombre= nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }*/

    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
}
// const juan = new Cliente('Juan',3333);
const juan = new Cliente();
juan.setNombre('Juan');
console.log(juan.getNombre());

//Llamamos desde el objeto al campo privado -> nos dá error, debido a que es un campo que solo se puede acceder desde la clase
// console.log(juan.#nombre);
// console.log(juan.mostrarInformacion());