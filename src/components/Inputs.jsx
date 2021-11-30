import React from 'react';
import Condition from './Condition';
import Dropdown from './Dropdown';
import ValidationError from './ValidationError';

function Inputs({ inputsValue, onChangeHandler, regData, errors }) {
  return (
    <>
      {inputsValue.map((item, index) => {
        switch (item.type) {
          case 'dropdown':
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
          case 'checkbox':
            return (
              <Condition
                name={item.name}
                value={regData[item.name]}
                onChange={onChangeHandler}
                type={item.type}
              />
            );
          default:
            return (
              <div className='account-form__element' key={index}>
                <label className='account-form__title'>
                  {item.title}
                  <input
                    className='account-form__input'
                    name={item.name}
                    value={regData[item.name]}
                    onChange={onChangeHandler}
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                </label>
                {errors[item.name] && <ValidationError />}
              </div>
            );
        }
      })}
    </>
  );
}

export default Inputs;
