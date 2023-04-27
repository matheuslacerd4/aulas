    function Aula(nome, videoID) {
        this.nome = nome
        this.videoID = videoID
    }

    const aula1 = new Aula('Bem Vindo', 123)
    const aula2 = new Aula('até Breve', 456)
    console.log(aula1, aula2)

    