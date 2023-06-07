import { useState } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from "../button/button";

import { SignUpContainer, FormInputLabel, Input, Group } from "./sign-up-form.styles";
import { signUpStart } from "../../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type Inputs = {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string
};

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [_formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmit: SubmitHandler<Inputs> = data => {
    const {email, password, displayName, confirmPassword} = data;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Group>
            <Input
              type="text"
              required
              {...register('displayName')} />
            <FormInputLabel>Display Name</FormInputLabel>
          </Group>
          <Group>
            <Input
              type="email"
              required
              {...register('email', { pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
            <FormInputLabel>Email</FormInputLabel>
          </Group>
          <Group>
            <Input
              type="password"
              required
              {...register('password')} />
            <FormInputLabel>Password</FormInputLabel>
          </Group>
          <Group>
            <Input
              type="password"
              required
              {...register('confirmPassword')} />
            <FormInputLabel>Confirm Password</FormInputLabel>
          </Group>
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
