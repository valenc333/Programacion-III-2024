const moment = require ('moment');

const fechaNacimiento = moment ('2008-02-04');
const fechaActual = moment ();
const años = fechaActual.diff(fechaNacimiento, 'years');
const días = fechaActual.diff (fechaNacimiento, 'days');
const fechaActualFormateada = fechaActual.format('DD/MM/YYYY');

console.log (`Hoy es ${fechaActualFormateada}`);
console.log (`Nací el ${fechaNacimiento.format('DD/MM/YYYY')}`)
console.log (`Desde mi nacimiento han pasado ${años} años`);
console.log (`Desde mi nacimiento han pasado ${días} días`);
