import React from 'react';

function Condition({ name, value, onChange, type }) {
  return (
    <div className='condition'>
      <label className='condition__text'>
        <input
          checked={value}
          name={name}
          type={type}
          className='condition__checkbox'
          onChange={onChange}
        />
        <div className='condition__custom-checkbox'></div>
        <span>
          Принимаю <span className='condition__hypertext'>условия</span>{' '}
          использования
        </span>
      </label>
    </div>
  );
}

export default Condition;
