//Diferencia entre Declaración de función y Expresión de función

//----------------- Declaración de Función (Function Declaration ) -----------------
sumar(); //se la puede llamar antes de que se declare la función
function sumar(){
    console.log(2+2);
}

/*
Hoisting -> etapas de creación y ejecución
Javascript se ejecuta en dos vueltas.
En la primera vuelta etapa de creación, el código se comienza a leer y registra las funciones y variables.
En la segunda vuelta, etapa de ejecución llamamos a la función sumar y se ejecuta
*/


//----------------- Expresión de Función (Function Expression ) -----------------
sumar2(); //me daría error si llamo antes de declarar la función
const sumar2 = function(){
    console.log(3+3);
}

/*
Para la expresión de función, es diferente..
El ciclo de hoisting sería así:

//----- primera vuelta ------
const sumar2; //primero se declararía la variables como constante
sumar2(); //llama a la función y como no está declarada nos da error y no entra a la segunda vuelta ->  can't access lexical declaration 'sumar2' before initialization

//----- segunda vuelta ------
sumar2= function(){ //al final se declara la función

}

*/