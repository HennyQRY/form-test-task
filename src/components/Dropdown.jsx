import React from 'react';

import { Arrow } from '../assets/icons';

function Dropdown({ elements, placeholder, onChange, name, value }) {
  const [dropdownActive, setDropdownActive] = React.useState(false);
  const listRef = React.useRef();

  const handlerValue = (index) => {
    setDropdownActive(false);
    onChange({ target: { name, value: elements[index] } });
  };

  const dropdownClick = () => {
    setDropdownActive(!dropdownActive);
  };

  // не нужно коммитить закомментированный код

  // const handleOutsideClick = (e) => {
  //   if (!e.path.includes(listRef.current)) {
  //     setDropdownActive(false);
  //   }
  // };

  // React.useEffect(() => {
  //   document.body.addEventListener('click', handleOutsideClick);
  // }, []);

  return (
    <div className='dropdown'>
      <div
        onClick={() => dropdownClick()}
        // для работы с классами используй библиотеки, например эту: https://github.com/lukeed/clsx
        className={`dropdown__window ${dropdownActive ? 'active' : ''} ${
          value ? 'changed' : ''
        }`}
      >
        {value || placeholder}
        <Arrow />
      </div>
      {dropdownActive && (
        <ul ref={listRef} className='dropdown__list'>
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
