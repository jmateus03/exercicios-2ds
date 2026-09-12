class LaudoExame{
    constructor(paciente){
        this.paciente = paciente
    }

    emitir(){
        return "msg"
    }
}

class Sangue extends LaudoExame{
    emitir(){
        return `Laudo de exame de sangue emitido para: ${this.paciente}`
    }
}

class RaioX extends LaudoExame{
    emitir(){
        return `Laudo de raio-x emitido para: ${this.paciente}`
    }
}

class Ultrassom extends LaudoExame{
    emitir(){
        return `Laudo de ultrassom emitido para: ${this.paciente}`
    }
}

class Ressonancia extends LaudoExame{
    emitir(){
        return `Laudo de ressonância emitido para: ${this.paciente}`
    }
}

module.exports = LaudoExame
module.exports.Sangue = Sangue
module.exports.RaioX = RaioX
module.exports.Ressonancia = Ressonancia
module.exports.Ultrassom = Ultrassom
