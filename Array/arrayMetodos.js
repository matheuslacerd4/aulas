const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop () // REMOVE o ULTIMO elemento da lista do arrAY !!!
console.log(pilotos)

pilotos.push('Verstappen')  // ADICIONA um elemento a lista !!!
console.log(pilotos)

pilotos.shift()  // REMOVE o PRIMEIRO elemento da lista !!!
console.log(pilotos)

pilotos.unshift('Hamilton') // ADICIONA um elemento na frente da lista !!!
console.log(pilotos)

                 // splice pode adicionar e remover elementos !!!!

// adicionar !

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover !

pilotos.splice(3, 1)   //removeu o indice 3 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // novo array 
console.log(algunsPilotos1)

const algunsPilotos2  = pilotos.slice(1, 4) // novo array do numero 1 ao 4
console.log(algunsPilotos2)
