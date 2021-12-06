import { inscriptionModel } from "./inscription";

const resolversInscripcion={
    Query:{
        Inscripcion: async (parent,args) =>{
            const inscripcion = await inscriptionModel.find()
            return inscripcion;
        }

    },
    Mutation:{
        crearAvance:async (parent, args) =>{
            const inscripcionCreada =inscriptionModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return inscripcionCreada;
        }
    },
};
export {resolversInscripcion};
© 2021 GitHub, Inc.
Terms
Pri