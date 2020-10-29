//Explicit binding

function persona(el1,el2){
    console.log(`Mi nombre es ${this.nombre} y mi musica favorita es: ${el1} y ${el2}`);
}

const informacion = {
    nombre : 'Juan', //this.nombre
}

const musicasFav = ['Eminem', '18 Kilates xd']; //el1,el2 

//explicit binding

persona.call(informacion, musicasFav[0], musicasFav[1]);  //paso de parametros de forma explicita

//tmb existe otra funcion llamado apply a dif de call en este no hay que pasarle los elementos del array por separado sino que van de una

persona.apply(informacion,musicasFav);

const nuevaFn = persona.bind(informacion,musicasFav[0],musicasFav[1]); //es igual que call pero me crea una nueva fncion
nuevaFn();