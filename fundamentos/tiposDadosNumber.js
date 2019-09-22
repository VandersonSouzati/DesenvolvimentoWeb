console.log('Tipo de dado number');
const peso1 = 1.0;
const peso2 = Number('2.0');
/*
  * Verificando se as variáveis são do tipo inteiro
  * O npumero 1.0, mesmo com ponto flutuante, Javascript entende como inteiro por causa do zero na casa decimal 
*/
console.log(Number.isInteger(peso1)); 
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1  + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

// usando o método toFixed para determinar o total de casas decimais
console.log(media.toFixed(2));

//Usando o método toString para retornar uma String 
console.log(media.toString());

//passando o parametro com o valor 2 a função retorna a string binaria
console.log(media.toString(2));
console.log(typeof media);
console.log(typeof Number);