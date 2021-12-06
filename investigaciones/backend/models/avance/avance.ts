import { Schema,model } from "mongoose";
import {ProjectModel} from "../proyecto/proyecto";
import {userModel} from "../usuario/usuario";

interface avance{
    fecha: Date;
    descripcion: string;
    observaciones: [string];
    creadoPor:Schema.Types.ObjectId;
    proyecto:Schema.Types.ObjectId;
}
const avanceSchema= new Schema<avance>({
    
    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    observaciones:[{
        type:String,
    }],
    proyecto: {
        type:Schema.Types.ObjectId,
        ref:ProjectModel,
        required:true,
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref:userModel,
        required:true,
    }
});
const avanceModel=model('Avance',avanceSchema);
export {avanceModel};