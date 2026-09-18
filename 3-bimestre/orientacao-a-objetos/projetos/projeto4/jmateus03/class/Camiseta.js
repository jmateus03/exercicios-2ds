const Peca = require("./Peca")

class Camiseta extends Peca {

    constructor(nome, tamanhoNumerico) {
        super(nome, tamanhoNumerico)
        this.registros = []
    }

    descricao() {
        return "Camiseta disponível para venda"
    }

    adicionarRegistro(registro) {
        if (registro.valor < 0) {
            throw new Error("Valor inválido")
        }

        this.registros.push(registro)
    }
}

module.exports = Camiseta
