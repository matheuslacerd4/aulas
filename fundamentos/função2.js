// armazendando uma funcao em uma variavel 
const imprimaSoma = function (a, b) {

console.log(a + b)
}

imprimaSoma(2, 3)


//armazenando uma funçao arrow em uma variavel 

const soma = (a, b) => {

    return a + b 
} 

console.log(soma(2, 3))

// retorno implicito 

const subtracao = (a, b) => a - b 
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)

imprimir2('legal!!!')
imprimir2('fim!!!')
