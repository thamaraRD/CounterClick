import React from 'react';

export const Button = ({ texto, isBotonClick, handlerClick }) => {

  return (
    <button className={ isBotonClick ? 'botonClick' : 'botonReiniciar' } 
    onClick={handlerClick}>
      {texto}
    </button>
  )
};
