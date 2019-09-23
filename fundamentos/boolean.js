//Tipo de dado boolean
let isActive = false
console.log(isActive)
isActive = true
console.log(isActive)

//Usando a negação da negação, para pegar o valor lógico
isActive = 1
console.log(!!isActive)

//Javascript considera alguns valores como true ou false alem do true e false ou 0 e 1

console.log('Os verdadeiros.......')
console.log(!!12)//Qualquer número inteiro diferente de 0 é considerado verdadeiro
console.log(!!' ') //String com pelo menos um espaço
console.log(!!'teste')//Qualquer String que não esteja vazia
console.log(!![]) // Um array
console.log(!!{}) // Corpo de um objeto
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('Os falsos........')
console.log(!!0) //Número 0
console.log(!!'') //qualquer String vazia
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isActive = false))

//Se apenas um valor for verdadeiro será retornado true 
console.log(!!('' || null || undefined || 'teste'))
//Ou o valor que for verdadeiro
console.log('' || null || undefined || 'teste')

//Exemplo de aplicação
let nome =''
//Caso a variável nome esteja com um valor lógico falso, como por exemplo vazio será retorno o próximo true
console.log(nome || 'Nome esta com um valor lógico falso')