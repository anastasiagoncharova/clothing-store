import SignUpForm from "../../shared/components/sing-up-form/sign-up-form";
import SignInForm from "../../shared/components/sing-in-form/sign-in-form";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
