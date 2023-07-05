import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { useNavigate } from "react-router-dom";
import { SignInContainer, ButtonsContainer, FormInputLabel, Input, Group } from "./sign-in-form.styles";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../../utils/firebase/firebase.utils';

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
  const [formFields, setFormFields] = useState(defaultFormFields);
  const navigate = useNavigate();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const {email, password} = data;
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/");
    } catch (error) {
      console.log('user sign in failed', error);
    }
  }

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
