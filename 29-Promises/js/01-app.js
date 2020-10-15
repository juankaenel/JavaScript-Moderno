/*Callbacks*/

const paises = ['Francia','Argentina','Uruguay','Brasil','Nueva Zelanda'];

function nuevoPais(pais,callback){ //el callback viene a ser la función q se le pasa por parámetro cuando llamo a nuevoPais
    setTimeout(()=>{
        paises.push(pais);
        callback();
    },3000);
}

function mostrarPaises(){
    setTimeout(()=>{
        paises.forEach(pais=>{
            console.log(pais);
        });
    },3000);
}

mostrarPaises();
nuevoPais('Alemania',mostrarPaises);