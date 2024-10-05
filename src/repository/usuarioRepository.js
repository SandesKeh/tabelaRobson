import con from "./connection.js";

export async function salvarUsuario (nome) {
    let comando = `insert into tb_usuario (nm_usuario)
    values (?)`

let resposta = await con.query (comando, [nome])
    let id = resposta [0]

    return id.insertId
}

export async function consultarUsuario() {
    let comando =  `
                    select *    
                    from tb_usuario
                `

    let resposta = await con.query(comando)

    let id = resposta[0]

    return id;
}

export async function alterarUsuario(nomeobj, id){
    let comando = `
            update tb_usuario
                set nm_usuario = ?
            where id_usuario = ?
    `
    let resposta = await con.query(comando, [nomeobj.nome, id])
    let into = resposta[0]

    return into.affectedRows;


}

export async function deletarUsuario(id) {

    let comando = `
                delete from tb_usuario where id_usuario = ?
    `
    let resposta = await con.query (comando, [id])
    let res = resposta[0]

    let linha = res.affectedRows;
    return linha
}