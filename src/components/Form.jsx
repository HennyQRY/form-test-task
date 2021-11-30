import React from 'react';
import Button from './Button';
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
  {
    title: 'Условия',
    type: 'checkbox',
    name: 'condition',
  },
];

function Form() {
  const [regData, errors, disabledButton, onChangeHandler] = useForm();

  return (
    <form className='account-form'>
      <Inputs
        errors={errors}
        inputsValue={inputsValue}
        onChangeHandler={onChangeHandler}
        regData={regData}
      />
      <Button disabledButton={disabledButton} />
    </form>
  );
}

export default Form;
