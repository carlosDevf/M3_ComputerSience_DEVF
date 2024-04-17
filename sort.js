console.log("CLASE SORT 1.0")
// crear arreglos random Math - 0.5 // temas estadistica
numerosSort()
// numerosSortFlecha() ERROR // no puede usar la funcion antes de declarla

// repaso de funciones

// this => class
// JavaScript Hoisting
function numerosSort () {
    console.log("Hoisting")
    return "Hola"
}

// funciones flecha = () => {}
// return implicito
// 🚫 this // más complicado
// 🚫 Hoisting
const numerosSortFlecha = () => "Soy una funcion flecha"
console.log(numerosSortFlecha())


/// acomoda de forma acendente el siguente array usando sort  // for
const numeros = [1,5,74,15,9,5,364,7,85,21] 
// funcion =>                           1      5      current - next = -4       
const listaAcendente = numeros.sort((current, next) => next - current)
console.log(listaAcendente, 'LISTA')

// siguentes temas como buscar dentro de arrglos
// indexOf, lastIndexOf, filter, find, /// map, for, forEch

// find // busque numeros iguales a 5 => 
// termina la interacion cuando encuentra un valor que cumpla con la condicion
const primerCinco = numeros.find((numero) => numero === 364)

// filter crea un arreglo cuando la condicion sea verdadera

/* const numerosConCinco = numeros.filter((numero) => numero % 5 === 0) */

const numerosConCinco2 = numeros.filter((numero) => {
    return numero % 5 === 0
})

const numerosConCinco = numeros.filter(function(numero){
    return numero % 5 === 0
})

// some && every
// si no hay valores que cumplan con la condicion retorna un undefined
console.log(numerosConCinco, 'numeros con 5')

/* const letras = ["1G", "d", "1a", "u", "t", "A"]
console.log(letras, "original")
console.log(letras.sort(), "con sort") */

const saludo = (nombre) => "Hola" + " " + nombre
console.log(saludo("Carlos"))