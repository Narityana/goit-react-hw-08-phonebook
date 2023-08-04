import React from 'react';
import { logIn } from 'redux/Auth/auth-operations';
import { useDispatch } from 'react-redux';
import { InputField, PasswordField } from 'components/InputArea/InputArea';
import { Form } from '../RegisterForm/RegisterForm.styled';
import Button from 'components/Button/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputField label="Email" type="email" name="email" />
      <PasswordField />
      <Button text="Login" type="submit" />
    </Form>
  );
};
