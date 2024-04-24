// Objeto persona
const cesar = {
  nombre: "",
  apellido: "",
  calificacionFinal: 0,
  inscrito: false,
};

// instancia de una clase
const fecha = new Date().getFullYear();
console.log(fecha);

// crear una clase
class Persona {
  //atributos del objeto
  constructor({ nombre, apellido, calificacionFinal = 0 }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.calificacionFinal = calificacionFinal;
  }

  // métodos del objeto
  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

const cesarClass = new Persona({
  nombre: "Cesar",
  apellido: "Vivas",
  calificacionFinal: 0,
});

console.log(cesarClass.nombre);
console.log(cesarClass.nombreCompleto());

// Herencia