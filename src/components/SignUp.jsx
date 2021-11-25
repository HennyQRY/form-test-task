import React from 'react';

import Form from './Form';

function SignUp() {
  const reg = /^[а-яА-Я\w\s\-]+$/;

  const testName = (name, condition) => {
    return console.log(condition.test(name));
  };

  testName('Егор123 бурлакин', reg);

  return (
    <div className='signUp'>
      <h2 className='signUp__title'>Регистрация</h2>
      <p className='signUp__text'>
        Уже есть аккаунт? <span className='signUp__logIn'>Войти</span>
      </p>
      <Form />
    </div>
  );
}

export default SignUp;
