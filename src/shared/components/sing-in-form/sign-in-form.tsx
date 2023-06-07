import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from 'react-hook-form';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import { SignInContainer, ButtonsContainer, FormInputLabel, Input, Group } from "./sign-in-form.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

type Inputs = {
  email: string,
  password: string,
};

const SignInForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const onSubmit: SubmitHandler<Inputs> = data => {
    const {email, password} = data;
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
