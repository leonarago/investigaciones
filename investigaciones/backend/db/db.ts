import { connect } from "mongoose";

const conectarBD =async ()=>{
    return await connect('mongodb+srv://admin:admin@gestionproyectosmisiont.eio5k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(()=> {
        console.log('conexion exitosa');
    })
    .catch(()=>{
        console.error('fallas en conexion');
    })
};
export default conectarBD;