//Ventajas de arrow functions

const aprendiendoJs = function(tecnologia,tecnologia2){
    console.log(`aprendiendo ${tecnologia}`);
}

aprendiendoJs('Python');


//const aprendiendo2 = tecnologia => `aprendiendo ${tecnologia}`;  //cuando hay un solo parametro el uso de paréntesis es opcional 
const aprendiendo2 = (tecnologia,tecnologia2) => `aprendiendo ${tecnologia} y ${tecnologia2}`;  //cuando hay un solo parametro el uso de paréntesis es opcional 


console.log(aprendiendo2('Javascript','Python'));