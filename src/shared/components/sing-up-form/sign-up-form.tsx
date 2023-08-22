import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';

import CommonButton from "../button/button";

import styles from "./sign-up-form.module.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';

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

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const {email, password, displayName, confirmPassword} = data;
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user }: any = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <div className={styles.SignUpContainer}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.Group}>
            <input className={styles.Input}
              type="text"
              required
              {...register('displayName')} />
            <div className={styles.FormInputLabel}>Display Name</div>
          </div>
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
          <div className={styles.Group}>
            <input className={styles.Input}
              type="password"
              required
              {...register('confirmPassword')} />
            <div className={styles.FormInputLabel}>Confirm Password</div>
          </div>
        <CommonButton type="submit">Sign Up</CommonButton>
      </form>
    </div>
  );
};

export default SignUpForm;
