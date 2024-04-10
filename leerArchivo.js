const fs= require ('fs'); // línea obligatoria

fs.writeFileSync('C:/Users/PC19/Desktop/valen/Programación III/leerTexto.txt', 'Voy a cambiar') //sobreescribir archivo
fs.appendFileSync('C:/Users/PC19/Desktop/valen/Programación III/leerTexto.txt', '. Esto es agregado.') //agregar contenido al archivo
const data = fs.readFileSync('C:/Users/PC19/Desktop/valen/Programación III/leerTexto.txt', 'utf-8'); //leer archivo
console.log(data); 