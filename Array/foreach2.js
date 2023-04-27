Array.prototype.foreach2 = function(callback) {
    for (let i=0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Aguatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.foreach2(function(nome, indice) {
    console.log(`${indice +1} ${nome}`)
}) 

// preciso revisar !!!
