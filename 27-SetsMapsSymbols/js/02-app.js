/*Weak Set -> set débil
A diferencia del Set que puede recibir cualquier tipo de objetos, este solo acepta objetos, es decir si le pasamos un string o number, nos dará error
Otra es que no posee el método size por lo tanto no se puede conocer la extensión del weakseat. Tampoco son iterables, no se puede usar foreach ni otro iterador
*/

const weakSet = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 222,
}

weakSet.add(cliente);
console.log(weakSet);