// operador ... rest(juntar)/spread(espalhar)

// usar spread com array 
const grupoA = ['joao','pedro ', 'gloria']
const grupoB = ['maria', ...grupoA, 'rafaela'] // '...' pega tudo do grupoA e junta com o grupoB
console.log(grupoB)