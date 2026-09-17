class Peca{
    #nome
    #tamanhoNumerico
    constructor(nome, tamanhoNumero){
        this.#nome = nome
        this.#tamanhoNumerico = tamanhoNumero
    }

    descricao(){
        return "Peça cadastrada na loja"
    }
}

class Camiseta extends Peca{
    descricao(){
        return "Camiseta disponível para venda"
    }
}

class Calca extends Peca{
    descricao(){
        return "Calça disponível para venda"
    }
}
class Casaco extends Peca{
    descricao(){
        return "Casaco disponível para venda"
    }
}
class Vestido extends Peca{
    descricao(){
        return "Vestido disponível para venda"
    }
}
