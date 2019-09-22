//Usando a function String 
console.log(typeof String)
var escola = "Cod3r";

//Pegando o valor, passando o indice
console.log(escola.charAt(3));
console.log(escola.charAt(5));//Não vai dar erro, mas não retorna nada

//Pegando o código da tabela Unicode passando o valor
console.log(escola.charCodeAt("C"));

//Concatenando com o concat e o operador +
console.log('Escola '.concat(escola).concat("!"));
console.log("Escola " + escola + '!');

//Pegando parte de uma String com o método substring
console.log(escola.substring(1));
console.log(escola.substring(0,3));

//Substituindo parte de uma String
console.log(escola.replace(3,'e'));
console.log(escola.replace('3','e'));
