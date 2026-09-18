class Peca{
    #nome
    #tamanhoNumerico
    constructor(nome, tamanhoNumero){
        this.#nome = nome
        this.#tamanhoNumerico = tamanhoNumero
    }

    get nome(){
        return this.#nome
    }
    get tamanhoNumerico(){
        return this.#tamanhoNumerico
    }

    descricao(){
        return "Peça cadastrada na loja"
    }
}

module.exports = Peca



