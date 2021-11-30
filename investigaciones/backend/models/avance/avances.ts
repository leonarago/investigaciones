import { model, Schema } from "mongoose";
import { projectModel } from "../proyecto/projects";
import { userModel } from "../usuario/user";

interface Avances{
    proyecto: Schema.Types.ObjectId;
    descripcionavance: string;
    observacion: string;
    creadopor: Schema.Types.ObjectId;
    fechaIngreso: Date;  
} 



const avancesSchema = new Schema<Avances>({
    proyecto: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: projectModel
    },
    descripcionavance: {
        type: String,
        required: true,
    },
    creadopor: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: userModel
    },

    fechaIngreso: {
        type: Date,
        required: true,
    },
    observacion: {
        type: String,
        required: true,
    }
})

const avancesModel = model("Avances", avancesSchema);
export {avancesModel};