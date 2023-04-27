const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

const getNota = aluno => aluno.nota 
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// desafio

const getNota2 = aluno => aluno.nota
const soma2 = (total, atual) => total + atual 

const total3 = alunos.map(getNota2).reduce(soma2)
console.log(total3 / alunos.length)


