const product = {
    category: "informatic",
    name: "impresora",
    price: 3333,
}

//const name = product.name;   

// Destructuring de objetos -> sacar de una estructura

//const { name } = product; //extrae la variable name y asigna el nombre en un solo paso -> const name = product.name;
//const {price} = product;

const {category,name,price} = product; //todo en una sola linea
console.log(name,price,category);
