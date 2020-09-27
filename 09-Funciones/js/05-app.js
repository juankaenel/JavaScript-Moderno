function sumar(a,b){ //a y b parametros
    console.log(a+b);
}

sumar(2,3);
sumar(2,222); //2, 222 argumentos

function presentacion(nombre,apellido){
    console.log(`hola me llamo ${nombre} y mi apellido es ${apellido}`);
}

presentacion('Juanito','Casares');
presentacion(); //hola me llamo undefined y mi apellido es undefined