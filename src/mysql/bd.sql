create database db_canal;
use db_canal;
 
 create table tb_canal(
id_canal int  auto_increment primary key,
nm_canal varchar(200),
nr_canal int,
bt_aberto bool
);

update tb_canal 
set nm_canal = ?,
nr_canal = ?,
bt_aberto = ?
where id_canal = ?;

select * from tb_canal; 


create table tb_canal_programa( 
id_canal_programa int auto_increment primary key,
id_canal int,
nm_programa varchar(200),
ds_genero varchar(200),
hr_programa varchar(10),
 FOREIGN KEY (id_canal) REFERENCES tb_canal(id_canal)
);

update tb_canal_programa
set id_canal = ?,
nm_programa = ?,
ds_genero = ?,
hr_programa = ?
where id_canal_programa = ?;

delete from tb_canal_programa 
where id_canal_programa = ?;

select * from tb_canal_programa;





create table tb_usuario(
id_usuario int auto_increment primary key,
nm_usuario varchar(200)
);

select*from tb_usuario;

create table tb_programa_favorito(
id_programa_favorito int auto_increment primary key,
id_usuario int,
id_canal_programa int,
vl_avaliacao int,
 FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario),
 FOREIGN KEY (id_canal_programa) REFERENCES tb_canal_programa(id_canal_programa)
);

   insert into tb_programa_favorito (vl_avaliacao, id_usuario, id_canal_programa)
        values (9, 1, 1);

select * from tb_programa_favorito;