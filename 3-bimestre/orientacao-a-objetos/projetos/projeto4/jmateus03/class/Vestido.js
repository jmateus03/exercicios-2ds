const Peca = require("./Peca")

class Vestido extends Peca{
    descricao(){
        return "Vestido disponível para venda"
    }
}

module.exports = Vestido