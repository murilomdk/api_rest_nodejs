const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos',(req,res)=>{
        console.log('get - atendimentos')
        res.send('Rota: GET - atendimentos')
    })

    app.post('/atendimentos',(req,res)=>{
        const atendimento = req.body

        console.log('atendimento: ' + atendimento.body)

        Atendimento.adiciona(atendimento, res)

        

    })

    
}