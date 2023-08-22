import './index.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import type { AppProps } from 'next/app';
import { setCurrentUser } from '../store/user/user.reducer';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './../utils/stripe/stripe.utils';

const Navigation = dynamic(
  () => {
    return import('../components/navigation-menu/navigation');
  },
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     const pickedUser =
  //       user && (({ accessToken, email }) => ({ accessToken, email }))(user);

  //     dispatch(setCurrentUser(pickedUser));
  //   });

  //   return unsubscribe;
  // }, []);
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <Navigation />
        <Component {...pageProps} />
      </Elements>
    </Provider>
  );
}
