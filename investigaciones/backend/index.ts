import conectarBD from "./db/db";
import {userModel} from "./models/user";
import {Enum_Rol,Enum_EstadoUsuario, Enum_TipoObjetivo, Enum_EstadoInscripcion} from "./models/enum";
import { projectModel } from './models/projects';
import { objectiveModel } from "./models/objective";
import { inscriptionModel } from "./models/inscription";

const main=async() =>{
    await conectarBD();
   


     await inscriptionModel.create({
        proyecto: '6198687a394731707fcaa07a',
        estudiante: '619866c8a84351daddb224be',
        estado: Enum_EstadoInscripcion.aceptada,
        fechaIngreso: Date.now(),
        fechaEgreso: new Date("2022/11/10")
    }).then((u)=>{
        console.log('usuario inscrito',u);
    }).catch((e=>{
        console.error('error inscribiendo al usuario',e);
    })); 
    
    // const inscripcion = await inscriptionModel.find({ _id: '619809855e99e962df597efb'}).populate('proyecto').populate('estudiante')
    // console.log('la inscripcion es:', inscripcion);
    
    

}
main();


//CRUD USUARIOS-------------
// codigo para crear los usuarios
// await userModel.create({
//     correo: 'perez@gmail.com',
//     identificacion: '111183',
//     nombre: 'Prueba3',
//     apellido: 'perez',
//     rol:Enum_Rol.lider,        
// }).then((u)=>{
//     console.log('usuario creado',u);
// }).catch((e=>{
//     console.error('error creando el usuario',e);
// })); 
//      //codigo para realizar consulta a base de datos y traer todos los usuarios existentes
    /* await userModel.find().then(u=>{
        console.log("usuarios",u);
    }).catch(e=>{
        console.error("error obteniendo los usuarios",e);
    }); */

    // consulta a base de datos para obtener un usuario en especifico
    // await userModel.findOne({identificacion:'1234567'}).then(u=>{
    //     console.log("usuarios encontrado ",u);
    // }).catch(e=>{
    //     console.error("error obteniendo el usuario",e);
    // });

    // codigo para editar usuarios
    /* await userModel.findOneAndUpdate(
        {correo:'kevin@gmail.com'},
        {nombre:'Mariana',
        apellido:'Londono'
        }
    ); */
    
    //Eliminar un usuario
    // await userModel.findOneAndDelete({correo:'asdfg@gg.com'}).then((u)=>{
    //     console.log('usuario eliminado con exito',u);
    // }).catch((e=>{
    //     console.error('error eliminando el usuario',e);
    // }));

    //CREACION PROYECTO CON RELACION--------------------------------------------
    // projectModel.create({
    //     nombre:"Proyecto2",
    //     presupuesto:90000000,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date("2022/11/10"),
    //     lider: '6197ba8cc39e9eec4a20eb73'
    // }).then((u)=>{
    //     console.log('usuario creado',u);
    // }).catch((e=>{
    //     console.error('error creando el usuario',e);
    // })); 
 //Mostrar el documento con la con la relacion
    /* const proyecto = await projectModel.find({ nombre: 'Proyecto1' }).populate('lider')
    console.log('el proyecto es: ', proyecto); */

    //CREACION DE OBJETIVOS PARA TENERLOS EN EL ARRAY DE PROYECTOS----------------
    // const object = objectiveModel.create({
    //     descripcion: "Este es el objetivo General",
    //     tipo: Enum_TipoObjetivo.general,
    // }) 