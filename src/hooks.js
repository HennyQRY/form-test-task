import React from 'react';

export const useForm = () => {
  const [regData, setRegData] = React.useState({
    name: '',
    email: '',
    tel: '',
    language: '',
  });

  const [errors, setErrors] = React.useState({});

  const validateField = (fillName, value) => {
    const newErrors = {};
    switch (fillName) {
      case 'name':
        newErrors.name = !/^[а-яА-Яa-zA-Z\s\-]+$/.test(value);
        break;
      case 'email':
        newErrors.email = !/^[\w\-]+@[\w\-]+\.[a-zA-Z]+$/.test(value);
        break;
      case 'tel':
        newErrors.tel = !/^\+\d\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/.test(value);
        break;
      default:
        break;
    }
    setErrors({ ...errors, ...newErrors });
  };

  const onChangeHandler = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  console.log(errors);

  return [regData, onChangeHandler];
};
