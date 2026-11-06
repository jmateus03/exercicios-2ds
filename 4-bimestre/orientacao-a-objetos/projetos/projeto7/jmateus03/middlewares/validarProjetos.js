function validarProjeto(req, res, next){
    if(!req.body.cliente){
        return res.status(400).json({erro: "O campo cliente e obrigatorio"})
    }
    if(!req.body.movel){
        return res.status(400).json({erro: "O campo movel e obrigatorio"})
    }
    if(typeof req.body.valor != "number"){
        return res.status(400).json({erro: "O campo valor deve ser um numero"})
    }
    if(Number(req.body.valor) <= 0){
        return res.status(400).json({erro: "O campo valor deve ser maior que zero"})
    }

    next()
}

module.exports = validarProjeto