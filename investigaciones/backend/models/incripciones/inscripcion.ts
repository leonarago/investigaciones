import { Schema,model } from "mongoose";
import {Enum_EstadoInscripcion} from "../enums/enum";
import {ProjectModel} from "../proyecto/proyecto";
import {userModel} from "../usuario/usuario";

interface inscripcion{
    estado:Enum_EstadoInscripcion;
    fechaIngreso:Date;
    fechaEgreso:Date;
    proyecto:Schema.Types.ObjectId;
    estudiante:Schema.Types.ObjectId;
}
const inscripcionSchema = new Schema<inscripcion>({
    fechaIngreso:{
        type:Date,
        required:true,
    },
    fechaEgreso:{
        type:Date,
        required:true,
    },
    estado:{
        type:String,
        enum:Enum_EstadoInscripcion,
        required:true,
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
        required:true,
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref:userModel,
        required:true,
    }
});
const inscriptionModel=model('Inscripcion',inscripcionSchema);
export {inscriptionModel};