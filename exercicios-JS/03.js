function expoente(base, expoente){
    resultado = base ** expoente 
    return resultado 
}
console.log(expoente(2,3)) 

// aprimoramento exercicio  

function divida(divida, parcela){
    divida = divida - parcela 
    return `divida pendente ${divida}R$`
}

console.log(divida(1000, 350))