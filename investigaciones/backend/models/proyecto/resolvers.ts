import {ProjectModel} from "./proyecto";

const resolversProyectos = {
    Query:{
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate('lider');
            return proyectos;
          },
    },
    Mutation: {
   
        crearProyecto: async (parent,args) =>{
            const proyectoCreado = await ProjectModel.create({
                nombre:args.nombre,
                presupuesto:args.presupuesto,
                fechaInicio:args.fechaInicio,
                fechaFin:args.fechaFin,
                fase:args.fase,
                estado:args.estado,
                objetivos:args.objetivos,
                
            });
            return proyectoCreado;
        }
    },  
};
export {resolversProyectos};