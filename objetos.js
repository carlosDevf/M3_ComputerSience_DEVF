// POO
//const perroClase = new Object()
// Objetos especiales en JS
const today = new Date()
// Math => MDN 
const random = Math.random() // raiz, rendondear, random (genrar colores)
// 
// forma de declarar un objeto
// veterinaria
// Objeto o Clase => 
// atributos o propediades
const perro = {
    nombre: "Huesos",
    edad: 10,
    raza: "Galgo",
    vacunas: {
        fecha: "10/02/22",
        fecha2: "20/03/23"
    },
    visitas: [1,2,3],
    // metodos => publicos y privados // *LUNES CON LA CLASE DE POO 
    // metodos setters y getters => // *LUNES CON LA CLASE DE POO 
    emitSonito: () => {
        console.log("Gua, Gua")
    },
    comer: function(){
        console.log("Hoy toca sobre!")
    },
    nombre: () => {
        console.log("Mi nombre es " + perro.raza)
    },
    trucos: (truco) => {
        console.log("Estoy en modo " + truco)
    }
}

// acceder a las propiedades
console.log(perro.visitas)
//
// como acceder a una propiedad con un caso practico
console.log(perro["edad"]) // "advertencia" linters
// Numeros magicos
// REDIS BD rapido acceso ** backendo SQL NoSQL
//  obten el nombre del color segun la lista de coloresnombre apartir de un numero
const color = 12
// color 4 = 'rojo'
// azul 2
// amarillo 3
/* si tuviera muchos colores tendria que crear un if por cada color
if (color === 4 ) {
    nombreColor = 'rojo'
} */
// DICCIONARIO
const coloresNombre = {
    4: "ROJO",
    2: "AZUL",
    3: "AMARILLO"
}

let nombreColor = coloresNombre[color]
console.log(coloresNombre)
// como añadir 

