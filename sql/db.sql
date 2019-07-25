create table if not exists catalogo_equipos(
    id  integer primary key generated  by DEFAULT as IDENTITY,
    nombre  text not null  check (nombre <> '')
);


create table if not exists catalogo_usuarios(
    id  integer primary key generated  by DEFAULT as IDENTITY,
    nombre  text not null  check (nombre <> ''),
    equipo_id integer references catalogo_equipos(id)
);

create table if not exists clientes(
    id  integer primary key generated  by DEFAULT as IDENTITY,
    email  text not null  check (email <> ''),
    usuario_id integer references catalogo_usuarios(id)
);