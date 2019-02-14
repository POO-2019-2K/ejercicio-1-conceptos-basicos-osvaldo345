import Movimiento from './Movimiento.js';

let Cliente1 = new Movimiento('Osvaldo', 18, "rio armeria #586, placetas", 120000, 3, 2);
Cliente1.informacion();

Cliente1.nombre = 'Rincon';
console.log(Cliente1.nombre);
Cliente1.edad = 20;
console.log(Cliente1.edad);
Cliente1.domicilio = 'Centro #253, mirador';
console.log(Cliente1.domicilio);
Cliente1.saldo = 180000;
console.log(Cliente1.saldo);
Cliente1.numeroDepositos = 5;
console.log(Cliente1.numeroDepositos);
Cliente1.numeroRetiros = 4;
console.log(Cliente1.numeroRetiros);

Cliente1.informacion();
Cliente1.retirar(30000);
Cliente1.informacion();
Cliente1.depositar(20000);
Cliente1.informacion();