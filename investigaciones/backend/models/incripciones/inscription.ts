import { Schema,model } from "mongoose";
import { Enum_EstadoInscripcion } from "../enums/enum";
import { projectModel } from "../proyecto/projects";
import { userModel } from "../usuario/user";

interface Inscription {
    proyecto: Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
    estado: Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date; 
}

const inscriptionSchema = new Schema<Inscription>({
    proyecto: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: projectModel
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: userModel
    },
    estado: {
        type: String,
        required: true,
        enum: Enum_EstadoInscripcion
    },
    fechaIngreso: {
        type: Date,
        required: true,
    },
    fechaEgreso: {
        type: Date,
        required: true
    }
})

export const inscriptionModel = model("Inscripcion", inscriptionSchema);