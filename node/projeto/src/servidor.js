const porta = 3003 

const express = require('express')
const cors = require('cors')
const bancoDeDados = require('./bancoDeDados')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));     
app.use(express.json());

app.get('/produtos', (request, response, next) => {
    response.json(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (request, response, next) => {
    response.json(bancoDeDados.getProduto(request.params.nome))
})

app.post('/produtos', (request, response) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco    
    })
    response.json(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}. `)
})