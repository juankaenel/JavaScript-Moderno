function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
//------------ Prototypes ------------
Cliente.prototype.tipoCliente = function (){
    // console.log('Su saldo es ',this.saldo);
    let tipo;

    if(this.saldo > 1000){
        tipo = 'Gold'
    }else if(this.saldo > 2500){
        tipo = 'Platinium'
    }else{
        tipo = 'Normal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function (){
    return `nombre =${this.nombre}, Saldo: ${this.saldo}, Tipo de cliente: ${this.tipoCliente()}`   
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre,saldo); //Heredamos el constructor de cliente
    this.telefono = telefono;
}

//Herencias
Persona.prototype = Object.create(Cliente.prototype); //heredamos los Prototypes de Cliente
Persona.prototype.constructor = Cliente; //Heredamos el constructor de cliente


//Instancia
const juan = new Persona('Juan',3333,353535112);
console.log(juan.nombreClienteSaldo());