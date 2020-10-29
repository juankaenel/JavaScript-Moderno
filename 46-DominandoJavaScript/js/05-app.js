//Implicit binding

const usuario = {
    nombre: 'juan',
    edad: 20,
    informacion(){//implicit binding consiste en decir donde tiee que encontrar el valor, para eso hace uso del this, que se refiere al mismo objeto
        console.log(`el nombres es ${this.nombre} su mi edad es: ${this.edad}`);
    },
    mascota:{
        nombre: 'chiwawa',
        edad:20,
        informacion(){
            console.log(`el nombre de la mascota es ${this.nombre} y su edad es: ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();