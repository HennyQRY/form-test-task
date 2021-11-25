import React from 'react';

import { Checkmark } from '../assets/icons';

function Condition() {
  const [activeCheckbox, setActiveCheckbox] = React.useState(false);

  const checkboxHandler = () => {
    setActiveCheckbox(!activeCheckbox);
  };

  return (
    <div className='condition'>
      <div
        onClick={() => checkboxHandler()}
        className={`condition__checkbox ${activeCheckbox && 'active'}`}
      >
        {activeCheckbox && <Checkmark />}
      </div>
      <p className='condition__text'>
        Принимаю <span className='condition__hypertext'>условия</span>{' '}
        использования
      </p>
    </div>
  );
}

export default Condition;
