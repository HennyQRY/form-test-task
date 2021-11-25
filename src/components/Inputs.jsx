import React from 'react';
import Dropdown from './Dropdown';
import ValidationError from './ValidationError';

function Inputs({ inputsValue, onChangeHandler, regData }) {
  return (
    <>
      {inputsValue.map((item, index) => {
        if (item.type === 'dropdown') {
          return (
            <div key={index}>
              <h3 className='account-form__title'>{item.title}</h3>
              <Dropdown
                onChange={onChangeHandler}
                elements={item.elements}
                placeholder={item.placeholder}
                name={item.name}
                value={regData[item.name]}
              />
            </div>
          );
        } else {
          return (
            <div className='account-form__element' key={index}>
              <h3 className='account-form__title'>{item.title}</h3>
              <input
                className='account-form__input'
                name={item.name}
                value={regData[item.name]}
                onChange={onChangeHandler}
                type={item.type}
                placeholder={item.placeholder}
              />
              <ValidationError />
            </div>
          );
        }
      })}
    </>
  );
}

export default Inputs;
