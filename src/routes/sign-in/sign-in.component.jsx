import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sing-up-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <div>Sign In Page</div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;