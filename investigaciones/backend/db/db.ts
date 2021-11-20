import { connect } from "mongoose";

const conectarBD =async ()=>{
    return await connect('mongodb+srv://ciclo4:admin@cluster0.3uq0m.mongodb.net/projecSoft?retryWrites=true&w=majority')
    .then(()=> {
        console.log('conexion exitosa');
    })
    .catch(()=>{
        console.error('fallas en conexion');
    })
};
export default conectarBD;