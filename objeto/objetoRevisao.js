const produto = new Object
produto.nome = 'cadeira'
produto.marca = 'generica'
produto.preco = '220'

console.log(produto)

delete produto.preco
delete produto.marca 
console.log(produto)

const carro = { 
    modele: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            Rua: 'Rua ABC', // sempre colocar virgula no final 
            Bairro: 'Botafogo', 
            Numero: 777

        }
    }
}
console.log(carro)

