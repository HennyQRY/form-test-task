import React from 'react';

function Button({ disabledButton }) {
  return (
    <button disabled={disabledButton} className='button'>
      Зарегистрироваться
    </button>
  );
}

export default Button;
