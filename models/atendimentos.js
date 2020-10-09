const conexao = require('../infra/conexao')
const moment = require('moment')

class Atendimento {

    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
         const data = moment(atendimento.data ,'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        //const data = moment(atendimento.data).format('YYYY-MM-DD HH:mm:ss')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'

        

        conexao.query(sql, atendimentoDatado, (erro,resultados)=>{
            if(erro){
                console.log(' - Ocorreu erro ao salvar atendimento: ' + erro)
                res.status(400).json(erro)
            }else{
                console.log('Atendimento salvo com sucesso!: ' + resultados)
                res.status(201).json(resultados)
            }

        })
    }

}

module.exports = new Atendimento