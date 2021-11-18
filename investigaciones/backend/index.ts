import conectarBD from "./db/db";
import {userModel} from "./models/user";
import {Enum_Rol} from "./models/enum";

const main=async() =>{
    await conectarBD();
    // codigo para crear los usuarios
    // await userModel.create({
    //     correo:'prueba@psalazar.com',
    //     identificacion:'64984631984  ',
    //     nombre:'PePruebaCrud',
    //     apellido:'Mujica',
    //     rol:Enum_Rol.administrador,
    // }).then((u)=>{
    //     console.log('usuario creado',u);
    // }).catch((e=>{
    //     console.error('error creando el usuario',e);
    // }));

    // codigo para realizar consulta a base de datos y traer todos los usuarios existentes
    // await userModel.find().then(u=>{
    //     console.log("usuarios",u);
    // }).catch(e=>{
    //     console.error("error obteniendo los usuarios",e);
    // });
     // codigo para editar  un usuario 

    // await userModel.findOneAndUpdate(
    //     { apellido: "Mujico" },
    //     {
    //         identificacion: "32547",
    //         nombre: "Pipe"
    //     }
    //     )
    //     .then((u) => {
    //         console.log("Usuario Actualizado", u);
            
    //     })
    //     .catch((e) => {
    //         console.error( " Error al Actualizar", e);
            
    //     });

    // codigo para eliminar un usuario

    await userModel.findOneAndDelete(
            { apellido: "Mujico" })
            .then((u) => {
                console.log("Usuario Eliminado", u);
                
            })
            .catch((e) => {
                console.error( " Error al Eliminar", e);
                
            });
};

main();