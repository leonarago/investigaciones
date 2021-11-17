import conectarBD from "./db/db";
import {userModel} from "./models/user";
import {Enum_Rol} from "./models/enum";

const main=async() =>{
    await conectarBD();
    // codigo para crear los usuarios
    await userModel.create({
        correo:'asdfg@gg.com',
        identificacion:'999999999999',
        nombre:'yilmar',
        apellido:'garces navia',
        rol:Enum_Rol.administrador,
    }).then((u)=>{
        console.log('usuario creado',u);
    }).catch((e=>{
        console.error('error creando el usuario',e);
    }));

    // codigo para realizar consulta a base de datos y traer todos los usuarios existentes
    /*await userModel.find().then(u=>{
        console.log("usuarios",u);
    }).catch(e=>{
        console.error("error obteniendo los usuarios",e);
    });*/
    
}

main();