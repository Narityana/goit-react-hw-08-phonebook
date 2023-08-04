import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth-operations';
import { Form } from './RegisterForm.styled';
import Button from 'components/Button/Button';
import { InputField, PasswordField } from 'components/InputArea/InputArea';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputField label="Name" type="text" name="name" />
      <InputField label="Email" type="email" name="email" />
      <PasswordField />
      <Button text="Register" type="submit" />
    </Form>
  );
};

export default Register;
