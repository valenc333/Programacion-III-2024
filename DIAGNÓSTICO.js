//1
var miNombre = "Valentina";
var edad = 16;
console.log (`Mi nombre es ${miNombre} y tengo ${edad} años`);

//2
let num1 = parseFloat(prompt("Ingrese un número"));
let num2 = parseFloat(prompt ("Ingrese otro número"));
let suma = num1 + num2;
alert(suma);

//3
let primero = 56;
let segundo = 32;
console.log (primero == segundo);
console.log (primero != segundo);
console.log (primero > segundo);

//4
let base = parseFloat(prompt("Ingrese la base del triángulo"));
let altura = parseFloat(prompt ("Ingrese la altura del triángulo"));
let area = (base * altura) / 2;
alert(area);

// 5
let numero = 78;
function numeroMayorA50 (numero) {
    if (numero < 10) {
        console.log ("El número es menor a 10")
    } else if (numero => 10 && numero <= 50) {
        console.log("El número está entre 10 y 50")
    } else {
        console.log ("El número es mayor a 50")
    }
};

console.log (numeroMayorA50(numero));

//6
let numProm1;
let numProm2;
let numProm3;
function promedio (numProm1, numProm2, numProm3){
    resultadoPromedio = (numProm1 + numProm2 + numProm3) / 3;
    console.log (`El promedio es ${resultadoPromedio}`);
}
console.log (promedio(7, 8, 10));

//7
var Película ={
    título: "Blade Runer 2049",
    año: "2017",
    minutosDeDuración: "164"
}

console.log(Película)