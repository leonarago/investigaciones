import { Query } from "mongoose";
import { avanceModel } from "./avance";

const resolversAvance={
    Query:{
        Avances: async (parent,args) =>{
            const avances = await avanceModel.find();
            return avances;
        }

    },
    Mutation:{
        crearAvance:async (parent, args) =>{
            const avanceCreado =avanceModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        }
    },
};
export {resolversAvance};