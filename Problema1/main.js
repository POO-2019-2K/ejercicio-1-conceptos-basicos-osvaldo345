import Contacto from "./Contacto.js";

let trabajador1 = new Contacto('osvaldo', 'Programador', 3123007350, 'jrincon15@ucol.mx');
trabajador1.informacion();

trabajador1.nombre = 'osvaldo';
console.log(trabajador1.nombre);
trabajador1.puesto = 'Tester';
console.log(trabajador1.puesto);
trabajador1.telefono = 3123007350;
console.log(trabajador1.telefono);
trabajador1.email = 'jrincon15@gmail.com';
console.log(trabajador1.email);

trabajador1.informacion();