const conexao = require('../infra/conexao')
const moment = require('moment')

class Atendimento {

    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
         const data = moment(atendimento.data ,'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        //const data = moment(atendimento.data).format('YYYY-MM-DD HH:mm:ss')
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        var erros = []

        if(moment(data).isSameOrAfter(dataCriacao) != 1){ 
            erros.push({data: 'A data de agendamento precisa ser posterior a data de criacao'})
        }
        if(atendimento.cliente.length <= 5){ 
            erros.push({Cliente: 'O nome do cliente precisa ter mais que 5 caracteres'})
        }

        if(erros.length > 0){
            console.log('var erros: ' + erros)
            res.status(400).json(erros)

        }else{

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

    listar(res){
        const sql = 'select * from Atendimentos'

        conexao.query(sql,(erro, resultados)=> {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }

        })
    }

    findById(id,res){
        const sql = 'select * from Atendimentos where id = ?'

        console.log('findById: ' + id)

        conexao.query(sql,id, (erro, resultados)=> {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(atendimento)
            }

        })
    }

    altera(id,valores,res){

        const sql = 'UPDATE Atendimentos SET ? WHERE id=? '


        conexao.query(sql,[valores,id], (erro, resultados)=> {
            
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }

        })


    }


    delete(id,res){
        const sql = 'delete from Atendimentos where id = ?'

        console.log('deletar atendimento: ' + id)

        conexao.query(sql,id, (erro, resultados)=> {
            
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }

        })
    }
}

module.exports = new Atendimento