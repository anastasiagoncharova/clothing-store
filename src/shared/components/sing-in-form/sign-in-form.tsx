import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import CommonButton, { BUTTON_TYPE_CLASSES } from "../button/button";
import { useRouter } from 'next/navigation';
import styles from "./sign-in-form.module.scss";
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
  const router = useRouter();
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
      router.push('/');
    } catch (error) {
      console.log('user sign in failed', error);
    }
  }

  return (
    <div className={styles.SignInContainer}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.Group}>
          <input className={styles.Input}
            type="email"
            required
            {...register('email', { pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
          <div className={styles.FormInputLabel}>Email</div>
        </div>
        <div className={styles.Group}>
          <input className={styles.Input}
            type="password"
            required
            {...register('password')} />
          <div className={styles.FormInputLabel}>Password</div>
        </div>
        <div className={styles.ButtonsContainer}>
          <CommonButton type="submit">Sign In</CommonButton>
          <CommonButton
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </CommonButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
