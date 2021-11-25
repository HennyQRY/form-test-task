import React from 'react';
import Button from './Button';
import Condition from './Condition';
import Inputs from './Inputs';
import { useForm } from '../hooks';

const inputsValue = [
  { title: 'Имя', type: 'text', placeholder: 'Введите Ваше имя', name: 'name' },
  {
    title: 'Email',
    type: 'email',
    placeholder: 'Введите ваш email',
    name: 'email',
  },
  {
    title: 'Номер телефона',
    type: 'tel',
    placeholder: 'Введите номер телефона ',
    name: 'tel',
  },
  {
    title: 'Язык',
    type: 'dropdown',
    placeholder: 'Язык',
    elements: ['Русский', 'Английский', 'Китайский', 'Испанский'],
    name: 'language',
  },
];

function Form() {
  const [regData, onChangeHandler] = useForm();

  return (
    <form  className='account-form'>
      <Inputs
        inputsValue={inputsValue}
        onChangeHandler={onChangeHandler}
        regData={regData}
      />
      <Condition />
      <Button />
    </form>
  );
}

export default Form;
