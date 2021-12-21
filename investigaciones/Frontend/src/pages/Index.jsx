import PrivateRoute from 'components/PrivateRoute';
import Spinner from 'components/spinner';
import PrivateLayout from 'layouts/PrivateLayout';
import React from 'react';
import Register from './auth/register';
import NuevoProyecto from './proyectos/NuevoProyecto';

const Index = () => {
  return (
    <div>
      <div className='bg-blue-100 h-96'><NuevoProyecto/> </div>
      <div className='bg-blue-200 h-96'><Spinner/> </div>
      <div className='bg-blue-300 h-96'><Spinner/> </div>
      <div className='bg-blue-400 h-96'><Spinner/> </div>
    </div>
  );
};

export default Index;
