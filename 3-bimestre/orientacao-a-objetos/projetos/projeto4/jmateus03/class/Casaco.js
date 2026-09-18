const Peca = require("./Peca")

class Casaco extends Peca{
    descricao(){
        return "Casaco disponível para venda"
    }
}

module.exports = Casaco