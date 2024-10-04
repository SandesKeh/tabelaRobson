import con from "./connection.js";

export async function salvarPrograma(programaobj){
    let comando = `
                insert into tb_canal_programa(id_canal, nm_programa, ds_genero, hr_programa)
            values (?,?,?,?)
     `

     let resposta = await con.query (comando, [programaobj.canal, programaobj.nome, programaobj.genero, programaobj.hora])

     let id = resposta[0];

     return id.insertId
}      


export async function consultarPrograma(){
    let comando = ` 
        select 
            tb_canal_programa.id_canal_programa,
            tb_canal_programa.nm_programa,
            tb_canal_programa.ds_genero,
            tb_canal_programa.hr_programa,
            tb_canal.nm_canal,
            tb_canal.nr_canal,
            tb_canal.bt_aberto
        FROM 
            tb_canal_programa
        INNER JOIN 
            tb_canal ON tb_canal_programa.id_canal = tb_canal.id_canal

            
    `
    let resposta = await con.query (comando)

    let id = resposta[0]

    return id;
}

export async function alterarPrograma (programaobj, id){
    let comando = `
        update tb_canal_programa
        set id_canal = ?,
        nm_programa = ?,
        ds_genero = ?,
        hr_programa = ?
        where id_canal_programa = ?
    `
    let resposta = await con.query (comando, [programaobj.canal, programaobj.nome, programaobj.genero, programaobj.hora, id])
    
    let resp = resposta[0]

    return resp.affectedRows;
}

export async function deletarPrograma(id){
    let comando = ` 
        delete from tb_canal_programa 
        where id_canal_programa = ?
    `
    let resposta = await con.query (comando, [id])

    let resp = resposta[0]

    return resp.affectedRows
}
