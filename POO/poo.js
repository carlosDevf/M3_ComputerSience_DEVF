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
  constructor({ nombre, apellido }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = `${this.nombre} ${apellido}`;
  }

  // métodos del objeto
  nombreCompletoMethod() {
    // this.nombre = nuevoNombre;
    // this.ejemplo = "lo que sea"
    return `${this.nombre} ${this.apellido}`;
  }
}

const cesarClass = new Persona({
  nombre: "Cesar",
  apellido: "Vivas",
});
// console.log(cesarClass.nombre);
// console.log(cesarClass.nombreCompletoMethod());

// Herencia
class Estudiante extends Persona {
  constructor({ nombre, apellido, calificacionFinal }) {
    super({ nombre, apellido });
    this.calificacionFinal = calificacionFinal;
  }

  set nuevoNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  get calificacion() {
    return this.calificacionFinal;
  }
}

const fernandoClass = new Estudiante({
  nombre: "Fernando",
  apellido: "Medina",
  calificacionFinal: 100,
});

console.log(fernandoClass.nombre);
console.log(fernandoClass.calificacion);
fernandoClass.nuevoNombre = "Danny";
console.log(fernandoClass.nombre);
console.log(fernandoClass.calificacion);

class Largometraje {
  constructor({ nombre }) {
    this.nombre = nombre;
  }

  play() {}
}

class Peli extends Largometraje {
  constructor({ nuevoNombre }) {
    super({ nombre: nuevoNombre });
    this.tipo = "Peli";
  }
}

class Docu extends Largometraje {
  constructor({ nombre }) {
    super({ nombre });
    this.tipo = "Docu";
  }
}

const pelicula = new Peli({ nuevoNombre: "X" });
pelicula.play();
