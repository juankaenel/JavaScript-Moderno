//new binding

function Automovil(color,modelo){
    this.color = color;
    this.modelo = modelo;
}

const auto = new Automovil('rojo','camaro');

console.log(auto);

//window binding, cuando llamas una variable js va a buscar a la ventana global window

window.color = 'negro';

function decirColor(){
    console.log(color); //está registrada en la ventana global
}

decirColor(); 