class Colecao {

    constructor(nome) {
        this.nome = nome
        this.categorias = []
        this.membros = []
    }

    adicionarCategoria(item) {
        this.categorias.push(item)
    }

    adicionarMembro(membro) {
        this.membros.push(membro)
    }
}

module.exports = Colecao
