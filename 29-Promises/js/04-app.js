const paises = [];

const nuevoPais = (pais) => new Promise((resolve)=>{
    setTimeout(()=>{
        paises.push(pais);
        resolve(`Agregado el país: ${pais}`);
    },3000);
    }
);

nuevoPais('alemania')
    .then(res=>{
        console.log(res); //ejecuta el resolve
        console.log(paises);
        return nuevoPais('Francia'); //llama de vuelta a la promesa
    })
    .then(res=>{
        console.log(res); //ejecuta el resolve
        console.log(paises);
        return nuevoPais('España'); //llama de vuelta a la promesa
    })
    .then(res=>{
        console.log(res);
    })