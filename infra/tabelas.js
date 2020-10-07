class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.criarAtendimentos()
    }

    criarAtendimentos(){

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT,cliente varchar(100) NOT NULL, pet varchar(50), servico varchar(50), status varchar(50), observacoes text, PRIMARY KEY(id) )'

        this.conexao.query(sql,(erro)=>{
            if(erro){
                console.log('ocorreu erro ao criar a tabela Atendimentos: ' + erro)
            }else{
                console.log('tabela Atendimentos criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas
