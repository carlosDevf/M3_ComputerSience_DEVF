console.log("METODOS REVERSE, SORT, FIND")

/// API => 
const inventario = ["🍇", "🍌", "🍉", "🍇", "🍌", "🍉", "🍇", "🍌", "🍉"]
/* console.log(inventario) */

// metodos que mutal em arreglo original
const inventarioReverse = inventario.reverse()
/* 
console.log(inventarioReverse, 'reverse')
console.log(inventario, 'original') */

const palindtromo = "Anita lava la Tina"

/// crea una funcion de 
const isPalindrome = function (palindromo) {        
    /// crear un arreglo 
    const arryString = palindromo.split(" ")
    const normal = arryString.join("").toLowerCase()        
    /// invertirlo
    const reverse = normal.split("").reverse().join("")    

    if (normal === reverse) {
        console.log("es un palindromo")
    }

}
  
isPalindrome(palindtromo) // si es o no es un palindromo

/// arreglos en JS
const p = "Anita lava la tina"
// /[^aA-zZ]/g
// metodo de string replace replaceAll
const normal = p.replaceAll(" ", "").toLowerCase()
/* console.log(normal) */

const reverse = normal.split("").reverse().join("")
/* console.log(reverse) */

const numero = "5555555555"
// numero de telefono que tiene 10 digt
const regex = /^\d{10}$/;
/* console.log(numero.match(regex)) */


const rfc = "CARC841212783"
const regexRFC = /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/;
/* console.log(rfc.match(regexRFC)) */


const palindromo = "anita lava la tina"
const isPalindromeExplicado = function (palindromo) {
  
    // string cambio a un arreglo
    const palindromoArray = palindromo.split(" ")
    //
    // const arrayReversed = palindromoArray.reverse()          
    // uniamos los elementos de un arreglo y creamos un string
    // pasabamos todos a minusculas
    // string!
    const arraypalindrome = palindromoArray.join("").toLowerCase()    
    // crear un arreglo    
    // darle la vuelta a ese arreglo
    // unirlo en un string
    const reverse = arraypalindrome.split("").reverse().join("")
    
    if (arraypalindrome === reverse) {
        console.log("si es palindromo")
    }else {
        console.log("no es palindromo")
    }
} 

isPalindrome(palindromo)

