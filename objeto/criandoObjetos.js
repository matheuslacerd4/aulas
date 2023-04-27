// usando a notaçao literal 
const objeto1 = {
    nome: 'Matheus',
    sobreNome: 'Lacerda',
    idade: 22,
}

// objeto em JS 
console.log(typeof Object, typeof new Object)
const objeto2 = new Object
console.log(objeto2)

// funçao construtora 

function Produto(nome, preco, desc) {
    this.nome = nome 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory ]
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('joão', 5000, 4)
const f2 = criarFuncionario('Maria', 5000, 2)
console.log(f1.getSalario(), f2.getSalario())