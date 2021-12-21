import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuario/queries';
import { Link } from 'react-router-dom';
import { Enum_Rol,Enum_EstadoUsuario} from 'utils/enums';
import PrivateRoute from 'components/PrivateRoute';
import Spinner from 'components/spinner';


const Usuarios = () => {
  
  const { loading, error, data } = useQuery(GET_USUARIOS);
  // const { loading, error, data } = useQuery(GET_USUARIOS,{
  //   variables: {
  //     filtro: { rol: 'ESTUDIANTE' },
  //   },
  // });

  if (loading) return <div> <Spinner/> </div>;

  if (error) return <div>Error...</div>;

  return (
    <PrivateRoute roleList={['ADMINISTRADOR', 'LIDER']}>
    <div>
      Datos Usuarios:
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Identificación</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.Usuarios.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.nombre}</td>
                  <td>{u.apellido}</td>
                  <td>{u.correo}</td>
                  <td>{u.identificacion}</td>
                  <td>{Enum_Rol[u.rol]}</td>
                  <td>{Enum_EstadoUsuario[u.estado]}</td>
                  <td>
                    <Link to={`/usuarios/editar/${u._id}`}>
                      <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                    </Link>

                    <Link to={`/usuarios/eliminar/${u._id}`}>
                      <i className='fas fa-trash hover:text-red-400 cursor-pointer' />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    </PrivateRoute>
  );
};

export default Usuarios;
