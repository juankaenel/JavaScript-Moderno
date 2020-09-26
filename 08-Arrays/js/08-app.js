//Destructuring de arrays

const producto = {
    nombre: 'Cpu',
    precio: 33333,
    disponible: true,
}

//destructuring de objeto
const {nombre} = producto;



//Destructuring con Arrays

const numeros = [1,2,3,4,5,6];

 //quiero extraer el 3

 const [ , , tres] = numeros;
 console.log(tres);

 const [ , , , , ,seis] = numeros; //con no inicializo las demás variables
 console.log(seis);

 //const [primero,segundo,tercero] = numeros; //1,2,3

 const [primero,segundo,...tercero] = numeros; //1,2,3,4,5,6
 console.log(tercero); //3,4,5,6