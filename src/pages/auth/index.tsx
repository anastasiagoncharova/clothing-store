import SignUpForm from "../../shared/components/sing-up-form/sign-up-form";
import SignInForm from "../../shared/components/sing-in-form/sign-in-form";
import styles from './authentication.module.scss';

const Authentication = () => {
  return (
    <div className={styles.authenticationContainer}>
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
