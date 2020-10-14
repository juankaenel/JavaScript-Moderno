/*
 El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.

 Los Objetos son similares a los Maps en cuanto a que ambos permiten establecer claves a valores, recuperar dichos valores, eliminar claves,
 y detectar si existe algo almacenado en una clave determinada. Por esto, los Objects han sido usados históricamente como Maps; no obstante,
 hay diferencias importantes entre  Objects y Maps que hacen mejor usar un  Map  en la mayoría de casos.
 Las claves de un Object son Strings y Symbols, mientras que para un Map pueden ser de cualquier tipo, incluyendo funciones, objetos y cualquier
 otro tipo primitivo.
 Puedes saber facilmente el tamaño de un Map usando la propiedad size, mientras que le número de propiedades en un Object tiene que ser deternminado
  manualmente.
 Un Map es un iterable lo que permite iterar directamente sobre el, mientras que si queremos iterar sobre un Object necesitamos obtener primero las
 claves de alguna forma para después iterar sobre el.*/


const cliente = new Map();

cliente.set('nombre','karen');
cliente.set('tipo','Premium');
cliente.set('saldo',2222);

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre2')); //false
console.log(cliente.get('nombre'));
