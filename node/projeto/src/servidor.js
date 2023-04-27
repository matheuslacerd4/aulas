const porta = 3003 


const express = require('express')
const app = express()
 
app.get('/produtos', (req, res, next) => {
    res.json({ nome: 'Placa mãe', preco: 100.45 }) // converter para JSON automaticamente
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}. `)
})