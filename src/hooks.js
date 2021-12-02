import React from 'react';
// файлы с хуками стоит выносить в отдельную директорию
const reg = {
  name: /^[а-яА-Яa-zA-Z\s\-]+$/,
  email: /^[\w\-]+@[\w\-]+\.[a-zA-Z]+$/,
  tel: /^\+?\d[\(\s\-]*\d{3}[\)\s\-]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}$/,
};

export const useForm = () => {
  const [regData, setRegData] = React.useState({
    name: '',
    email: '',
    tel: '',
    language: '',
    condition: false,
  });

  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    tel: false,
  });

  const disabledButton =
    Object.values(regData).some((item) => !item) ||
    Object.values(errors).some((item) => !!item);

  const validateField = (fillName, value) => {
    const newErrors = {};
    if (reg[fillName]) newErrors[fillName] = !reg[fillName].test(value);
    setErrors({ ...errors, ...newErrors });
  };

  const onChangeHandler = (e) => {
    setRegData({
      ...regData,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
    validateField(e.target.name, e.target.value);
  };

  return [regData, errors, disabledButton, onChangeHandler];
};
