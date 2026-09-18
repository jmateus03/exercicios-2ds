const Peca = require("./Peca")

class Calca extends Peca{
    descricao(){
        return "Calça disponível para venda"
    }
}

module.exports = Calca