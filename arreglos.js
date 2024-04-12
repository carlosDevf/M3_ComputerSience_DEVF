// Arrelgos es un espacio en memoria
// nombrar correctamente las variables

const frutas = ["🍇", "🍌", "🍉"]
//indice   //     0     1      2

// metodo push añadir un nuevo elemento al final de la lista
/* frutas.push("🍇") */

// quiero seleccionar un objeto en especifico 
// debo de saber su indice
console.log(frutas[1])

console.log(frutas)

frutas.push("🥝")
/// 3

console.log(frutas)

// uno de los metodos para borrar elementos de un arreglo
// traer el ultimo elemento de una lista
// pop()
// otro 
/* const kiwi = frutas.pop() */
/* console.log(kiwi, "kiwi")

console.log(frutas) */

/* const sandia = frutas.pop() */
/* console.log(sandia, "sandia")

console.log(frutas) */

// POP muta arreglo => cambio en el arreglo original "buenas practicas"
// copia del arreglo original => cuando se trabaja con funciones


// SLICE te retorna un arrelgo
// del dos en adelante
/* original => const frutas = ["🍇", "🍌", "🍉", "🥝"] */
//                               0      1     2      3                                
/* const frutas = ["🍉", "🥝"] */
const slice1 = frutas.slice(2)
console.log(slice1)

/* const frutas = ["🍇", "🍌"] */
const slice2 = frutas.slice(0, 2)
console.log(slice2)

console.log(frutas, 'arreglo original')

const ultimoElemento = frutas.slice(frutas.length - 1)[0]
console.log(ultimoElemento, 'ultimo elemento', typeof ultimoElemento)

//destructuracion de un arreglo
const [lastElement] = frutas.slice(frutas.length - 1)
console.log(lastElement, 'ultimo elemento', typeof lastElement)

/// length => nos retorna el numero de elementos que tiene el arreglo
//original => const frutas = ["🍇", "🍌", "🍉", "🥝"]//
console.log(frutas.length, "numero de elementos que tiene el array != indice")

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
console.log(frutas.at(-1), "ultimo elemento js new")
console.log(frutas)

//
const carrito = []
carrito.push("telefono")
carrito.push("bocina")

//arreglo => acomomodar por fechas => vas
const movimientos = []





