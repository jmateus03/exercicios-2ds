const http = require("http")
const config = require("./config")

const handler = (req, res) =>{
    const appConfig = config.carregarConfig()

    if(req.url === "/"){
        res.statusCode = 200
        res.end(`Servico ativo: ${appConfig.servico}`)
        return
    }

    if(req.url === "/teste"){
        res.statusCode = 200
        res.end(`teste`)
        return
    }

    if(req.url === "/status"){
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")

        res.end(JSON.stringify({
            "online": true,
            "servico": appConfig.servico,
            "porta": appConfig.porta,
            "ambiente": appConfig.ambiente
        }))
        return
    }

    if(req.url === "/versao"){
        res.statusCode = 200
        res.setHeader("Content-Type" , "application/json")

        res.end(JSON.stringify({
            "servico": appConfig.servico,
            "versao": process.env.VERSAO || "1.0.0"
        }))
        return
    }

    res.statusCode = 404
    res.end("Rota nao encontrada")
}

module.exports = handler