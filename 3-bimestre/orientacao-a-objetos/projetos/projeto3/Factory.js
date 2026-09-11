const Notificacao = require("./Notificacao")
// CRIE SUA SOLUÇÃO ABAIXO ================
class factory {
    static criar(tipo, mensagem){
        if(tipo === "email"){
            return new Email(mensagem)
        }else if(tipo === "sms"){
            return new SMS(mensagem)
        }else if(tipo === "app"){
            return new App(mensagem)
        }else{
            return "Tipo de notificação inválido"
        }
    }
}





// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Factory