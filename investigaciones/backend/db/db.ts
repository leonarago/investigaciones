import { connect } from "mongoose";

const conectarBD =async ()=>{
    return await connect(process.env.DATABASE_URL)
    .then(()=> {
        console.log('conexion exitosa');
    })
    .catch(()=>{
        console.error('fallas en conexion');
    })
};
export default conectarBD;