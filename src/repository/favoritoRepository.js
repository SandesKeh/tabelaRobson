import con from "./connection.js";

export async function inserirFavorito(favobj){
    let comando = `
            insert into tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
        values (?,?,?)
    `
    let resposta = await con.query (comando, [favobj.nome, favobj.programa, favobj.nota])

    let id = resposta [0]

    return id.insertId
}

export async function consultarFavorito(params) {
    let ccomando = `
            select
                tb_programa_favorito.id_programa_favorito,
                tb_usuario.id_usuario,
                tb_canal_programa.id_canal_programa,
                tb_programa_favorito.vl_avaliacao
            from
                tb_programa_favorito
            inner join 
                tb_usuario on tb_programa_favorito.id_usuario = tb_usuario.id_usuario
            inner join
                tb_canal_programa on tb_programa_favorito.id_canal_programa = tb_canal_programa.id_canal_programa

    `
    let resposta = await con.query (ccomando)

    let id = resposta[0]
    
    return id
}

export async function alterarFavorito(favobj, id) {
    let comando = `
            update tb_programa_favorito
                set id_usuario = ?,
                id_canal_programa = ?,
                vl_avaliacao = ?
            where id_programa_favorito = ?
    `
    let respsta = await con.query(comando, [favobj.usuario, favobj.canal, favobj.avaliacao, id])

    let into = respsta[0]

    return into.affectedRows;
    
}