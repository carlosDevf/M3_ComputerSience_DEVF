
const listaCorreosTxt = "carlos@devf.mx, edwin@devf.mx, cchavezmx@outlook.com"
console.log(listaCorreosTxt)
// archivos separados por comas .csv
// convertilo a un arreglo
const listaCorreosArray = listaCorreosTxt.split(",")
console.log(listaCorreosArray, "la lista")


const correo = "carlos@dev.mx"
/* const [nombre, dominio] = correo.split("@") */
const correoArray = correo.split("@")
// *magic number // *pixel perfect => 
const nombre = correoArray[0]
const dominio = correoArray[1] // horrible

console.log(nombre,"\n", dominio)

const text = "123456"
// hace la separacion => objetos que pueden iterados
const arregloDos = Array.from(text)
console.log(arregloDos)

// array
// CUANDO QUEREMOS SABER QUE EL TIPO DE DATO SEA UN ARRAY HAY QUE OCUPAR EL Array.isArray
const frutas = [] // objeto
// objeto
/* const verduras = {} // objeto */

const verduras = {
    "platano": 1
}

if (Array.isArray(frutas)) {
    console.log("verduras es un arreglo")
    console.log(frutas.push("jitomate"))
} else {
    console.log("verduras NO es un arreglo")
}

/// Concatenar un arraglo
const friuts = ["🍇", "🍌", "🍉"]
const vegetables = ["🥒", "🍅", "🥬"]
const lacteos = ["🥛", "🧀"]

const recauderia = friuts.concat(vegetables, lacteos)
console.log(recauderia, "la tienda")

const tienda2 = []
tienda2.push(friuts)
tienda2.push(vegetables)
tienda2.push(lacteos)

console.log(tienda2, 'tienda dos')
// :TODO funcion que busque un elemento determinado
/* function buscarProducto(busqueda) {
    tienda2.forEach()

} */

// 2018  para aplanar un array
console.log(tienda2.flat(Infinity))

// spread operator // arreglos como en objetos
const tienda3 = [...friuts, ...vegetables, ...lacteos]
console.log(tienda3, "tienda 3")
const frutasrespaldo = [...friuts]


// PREGUNTA DE EXAMEN TECNICO formas de elimiar en un arreglo elementos repetidos
const inventario = ["🍇", "🍌", "🍉", "🍇", "🍌", "🍉", "🍇", "🍌", "🍉"]
// objeton los objetos unicos

// interar el arrelgo
// añadir en cada interacion cada uno de los elementos
// nuevo arreglo unicos 🍇, 
// entre cada iteracion preguntar ya existe el elemento en el nuevo arrelgo
// 🍇 🍌
// 

const unicosElementos = [...new Set(inventario)]
console.log(unicosElementos, 'unicos elementos')