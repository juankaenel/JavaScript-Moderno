const paises = [];

function nuevoPais(pais,callback){ //el callback viene a ser la función q se le pasa por parámetro cuando llamo a nuevoPais
        paises.push(pais);
        console.log(`Agregado el país: ${pais}`);
        callback();
}

function mostrarPaises(){
    console.log(paises);
}

function iniciarCallbackHelm(){
    setTimeout(()=>{
        nuevoPais('Alemania',mostrarPaises);
        setTimeout(()=>{
            nuevoPais('España',mostrarPaises);
            setTimeout(()=>{
                nuevoPais('Francia',mostrarPaises);
            },3000)
        },3000)
    },3000)
}

iniciarCallbackHelm();