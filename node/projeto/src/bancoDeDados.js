// const sequense = {
//     _id: 1,
// get id () { return this._id++ }
// }

const produtos = []

function salvarProduto(produto) {
    produtos.push(produto)
    return produto 
}

function getProduto(nome) {
    return produtos.find(produto => produto.nome === nome)
}

function getProdutos() {
    return produtos
}

module.exports = { salvarProduto, getProduto, getProdutos}