//Usando o Objeto Math da linguagem Javascript
const pi = 3.1416;
var raio;
raio = 10; 
//Usando o método pow do objeto Math
var area = pi * Math.pow(raio, 2);
console.log(area.toFixed(2));

//Usando o operador de exponenciação do Javascript (**)
area = pi * raio**2;
console.log(area.toFixed(2));

console.log(typeof Math);