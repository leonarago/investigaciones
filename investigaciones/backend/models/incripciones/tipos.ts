import { gql } from "apollo-server-core";

const tiposInscripcion =gql`
Enum_EstadoInscripcion{
    ACEPTADA
    RECHAZADA
}
type Inscripcion{
    _id: ID!
    estado:Enum_EstadoInscripcion;
    fechaIngreso:Date!
    fechaEgreso:Date!   
    proyecto:Proyecto!
    estudiante:Usuario!
}
type Query  {
    Inscripciones:[Inscripcion]
}
type Mutation{
    crearIncripcion{
        estado:Enum_EstadoInscripcion;
        fechaIngreso:Date!
        fechaEgreso:Date!   
        proyecto:String!
        estudiante:String!
    }:Inscripcion
}
`;

export {tiposInscripcion};