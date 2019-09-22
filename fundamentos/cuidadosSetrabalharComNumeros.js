//Cuidados ao se trabalhar com números usando Javascript
console.log('Cuidados ao se trabalhar com números usando Javascript');
console.log('-------------------------------------------------------');

//Divisão por zero não da erro, vai gerar um infinito. dividir por um menor numero o resultado é sempre maior
console.log('Operação: 10/0  Resultado:' + 10/0);

//Gerando uma impresisão 
console.log('Gera uma imprecisão '+ (0.1 + 0.7) );

//String sendo usada para operação matemática 
console.log('10' / 2);
console.log("10" + 2); //String tem preferência.
console.log("10" - 2);

//provocando um erro NAN (Não é um numero)
console.log('show' / 2);

//Erro ao tentar chamar uma função direto pelo literal
//console.log(10.toFixed(2));
//Com o literal dentro de parênteses funciona 
console.log((10.345).toFixed(2));
