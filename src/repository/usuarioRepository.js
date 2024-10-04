import con from "./connection.js";

export async function salvarUsuario (nome) {
    let comando = `insert into tb_usuario (nm_usuario)
    values (?)`

let resposta = await con.query (comando, [nome])
    let id = resposta [0]

    return id.insertId
}

