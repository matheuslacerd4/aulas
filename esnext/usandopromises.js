Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas))
.then(x => console.log(x))