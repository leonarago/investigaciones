import { Schema,model } from "mongoose";
import { Enum_EstadoInscripcion } from "./enum";
import { projectModel } from "./projects";
import { userModel } from "./user";

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