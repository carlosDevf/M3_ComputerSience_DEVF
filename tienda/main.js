/// estructura de datos de una tienda de impresoras
const carrito = []

const impresora1 = {
    id: 1,
    titulo: "Impresora Multifuncional Epson Ecotank L3260",
    precio: 5800,
    foto: "https://http2.mlstatic.com/D_NQ_NP_672092-MLU75666783476_042024-O.webp",
}

const impresora2 = {
    id: 2,
    titulo: "Multifuncional Hp Ink Advantage 2875,inyección De Tinta,wifi",
    precio: 7800,
    foto: "https://http2.mlstatic.com/D_NQ_NP_2X_970903-MLU73452276707_122023-F.webp",
}

const impresora3 = {
    id: 3,
    titulo: "Impresora multifunción Canon imageCLASS D1620 con wifi blanca y negra 120V - 127V",
    precio: 13000,
    foto: "https://http2.mlstatic.com/D_NQ_NP_997422-MLA40080811342_122019-O.webp",
}

const storeImpresoras = [
    impresora1,
    impresora2,
    impresora3, // buena practica    
]

console.log(storeImpresoras[1].precio)

// donde voy a guardar lo que quiero comprar carrito
// reducer => // objetos Globales
function addToCarrito () {

}

function removeToCarrito () {

}

function updateCarrito () {

}

function cleanCarrito () {

}