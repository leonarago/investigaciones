enum Enum_Rol{
    ESTUDIANTE= 'ESTUDIANTE',
    LIDER='LIDER',
    ADMINISTRADOR='ADMINISTRADOR',
}
enum Enum_EstadoUsuario{
    PENDIENTE= 'PENDIENTE',
    AUTORIZADO='AUTORIZADO', 
    NO_AUTORIZADO='NO_AUTORIZADO',
}
enum Enum_EstadoProyecto{
    ACTIVO= 'ACTIVO',
    INACTIVO='INACTIVO',
}
enum Enum_FaseProyecto{
    INICIADO= 'INICIADO',
    DESARROLLO='EN_DESARROLLO',
    TERMINADO='TERMINADO',
    NULO='',
}
enum Enum_EstadoInscripcion{
    ACEPTADA= 'ACEPTADA',
    RECHAZADA='RECHAZADA',
}
enum Enum_TipoObjetivo{
    GENERAL= 'GENERAL',
    ESPECIFICO='ESPECIFICO',
}

export {Enum_Rol,Enum_EstadoUsuario,Enum_EstadoProyecto,Enum_FaseProyecto,Enum_TipoObjetivo,Enum_EstadoInscripcion};