const monitor = 'Monitor de 19 pulgadas';

//reemplazar strings -> .replace
console.log(monitor.replace('pulgadas','"'));//reemplazo pulgadas por ""

//cortar string -> .slice

console.log(monitor.slice(0,10));
console.log(monitor.slice(10,0)); //no me deja

//alternativa a slice, es lo mismo que slice pero más inteligente. Intenta hacerlo si es q no puede, en cambio slice arroja empty

console.log(monitor.substring(0,10)); 
console.log(monitor.substring(10,0));  


const usuario = 'Juan';
console.log(usuario.substring(0,1)); //J
console.log(usuario.charAt(0));  //J