import React from 'react';

import { Arrow } from '../assets/icons';

function Dropdown({ elements, placeholder, onChange, name, value }) {
  const [dropdownActive, setDropdownActive] = React.useState(false);

  const handlerValue = (index) => {
    setDropdownActive(false);
    onChange({ target: { name, value: elements[index] } });
  };

  const dropdownClick = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className='dropdown'>
      <div
        onClick={() => dropdownClick()}
        className={`dropdown__window ${dropdownActive ? 'active' : ''} ${
          value ? 'changed' : ''
        }`}
      >
        {value || placeholder}
        <Arrow />
      </div>
      {dropdownActive && (
        <ul className='dropdown__list'>
          {elements.map((item, index) => (
            <li
              key={`${index}_${item}`}
              onClick={() => handlerValue(index)}
              className='dropdown__list__item'
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
