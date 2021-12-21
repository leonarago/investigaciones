import Spinner from 'components/spinner';
import React from 'react';

const Index = () => {
  return (
    <div>
      <div className='bg-blue-100 h-96'><Spinner/> </div>
      <div className='bg-blue-200 h-96'><Spinner/> </div>
      <div className='bg-blue-300 h-96'><Spinner/> </div>
      <div className='bg-blue-400 h-96'><Spinner/> </div>
    </div>
  );
};

export default Index;
