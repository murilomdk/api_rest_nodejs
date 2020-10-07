const conexao = require('../infra/conexao')


class Atendimento {

    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'


        conexao.query(sql, atendimento, (erro,resultados)=>{
            if(erro){
                console.log('ocorreu erro ao salvar atendimento: ' + erro)
            }else{
                console.log('Atendimento salvo com sucesso!: ' + resultados)
            }

        })
    }

}

module.exports = new Atendimento