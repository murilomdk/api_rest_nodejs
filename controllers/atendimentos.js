const Atendimento = require('../models/atendimentos')

module.exports = app => {
    //lista todos
    app.get('/atendimentos',(req,res)=>{
         console.log('Bateu no get - ')      
         Atendimento.listar(res)
    })
    //busca por id
    app.get('/atendimentos/:id',(req,res)=>{
        const id = parseInt(req.params.id)

        Atendimento.findById(id,res)
        
   })
    //adicina
    app.post('/atendimentos',(req,res)=>{
        const atendimento = req.body

        console.log('atendimento: ' + atendimento.body)
        
        Atendimento.adiciona(atendimento, res)
    

    })
    //atualiza
    app.patch('/atendimentos/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id,valores,res)

    })
    //deleta
    app.delete('/atendimentos/:id',(req,res)=>{
        const id = parseInt(req.params.id)

        Atendimento.delete(id,res)
        
   })


    
}