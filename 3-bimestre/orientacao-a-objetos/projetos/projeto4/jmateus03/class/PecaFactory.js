const Camiseta = require("./Camiseta")
const Calca = require("./Calca")
const Casaco = require("./Casaco")
const Vestido = require("./Vestido")

class PecaFactory{
    static criar(tipo, nome, tamanhoNumerico ){
        if(tipo === "camiseta"){
            return new Camiseta(tipo, nome, tamanhoNumerico)
        }
        if(tipo === "calca"){
            return new Calca(tipo, nome, tamanhoNumerico)
        }
        if(tipo === "casaco"){
            return new Casaco(tipo, nome, tamanhoNumerico)
        }
        if(tipo === "vestido"){
            return new Vestido(tipo, nome, tamanhoNumerico)
        }
        throw new Error("Tipo de peça inválido")
    }
}

    const instancia0 = PecaFactory.criar("camiseta", "Básica Azul", 42)
    const instancia1 = PecaFactory.criar("calca", "Algodão", 7)
    const instancia2 = PecaFactory.criar("casaco", "Poliéster", 5)
    const instancia3 = PecaFactory.criar("vestido", "Coleção Verão", 60)


module.exports = PecaFactory