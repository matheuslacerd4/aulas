// closure é o escopo criado quando uma função e declarada 
// esse escopo permite a funçao acessar e manipular as variaves externas a fuinçao

// Contexto Lexico em ação!


const x = 'global'

function fora() {
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())