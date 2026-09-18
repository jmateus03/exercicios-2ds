class Venda {
    constructor(valor, tecido) {
        this.valor = valor
        this.tecido = tecido
    }

    adicionarRegistro(item) {
        if (this.valor < 0) {
            return "Valor inválido"
        }
        if(this.tecido === "camiseta"){
            this.tecido = []
        }
        this.tecido = item
    }
}

module.exports = Venda
