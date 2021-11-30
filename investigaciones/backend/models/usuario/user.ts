import { Schema,model } from "mongoose";
import {Enum_Rol,Enum_EstadoUsuario} from "../enums/enum";

interface User {
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
    estado:Enum_EstadoUsuario;
}
const userSchema = new Schema<User> ({
    correo: {
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:(email)=>{
                return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
            },
            message:'El formato del correo esta mal, rectificalo',
        },
    },
    identificacion: {
        type:String,
        required:true,
        unique:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
    rol:{
        type:String,
        required:true,
        enum:Enum_Rol,
       },
    estado:{
        type:String,
        required:true,
        enum:Enum_EstadoUsuario,
        default:Enum_EstadoUsuario.PENDIENTE,
    }
});
const userModel =model("User",userSchema);
export {userModel};