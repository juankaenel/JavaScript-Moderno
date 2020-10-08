//Eliminar y Actualizar elementos de local storage

localStorage.removeItem('nombre');

//Actualizar

const mesesArray = JSON.parse( localStorage.getItem('Meses'));
mesesArray.push('diciembre');

localStorage.setItem('Meses', JSON.stringify(mesesArray));

localStorage.clear(); //borra el local storage