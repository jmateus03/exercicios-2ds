const LaudoExame = require("./LaudoExame.js")

class Factory {

    static criar(tipo, paciente) {

        if (paciente === "") {
            throw new Error("Paciente é obrigatório")
        }

        if (tipo === "sangue") {
            return new LaudoExame.Sangue(paciente)
        }

        if (tipo === "raiox") {
            return new LaudoExame.RaioX(paciente)
        }

        if (tipo === "ultrassom") {
            return new LaudoExame.Ultrassom(paciente)
        }

        if (tipo === "ressonancia") {
            return new LaudoExame.Ressonancia(paciente)
        }

        throw new Error("Tipo de laudo inválido")
    }

}

module.exports = Factory