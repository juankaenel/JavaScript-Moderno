function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
//Defino el prototype para cliente , viene a ser como un método, puedo usar arraw functions pero siempre y cuando no haga uso del this
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

//Instanciario
const pedrito = new Cliente('Pedrito',3400);
console.log(pedrito.tipoCliente());
console.log(pedrito.nombreClienteSaldo());
pedrito.retiraSaldo(3000);
console.log(pedrito.nombreClienteSaldo());

