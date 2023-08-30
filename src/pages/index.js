import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import { setCurrentUser } from '../store/user/user.reducer';

const Directory = dynamic(
  () => {
    return import('../components/directory/directory');
  },
  { ssr: false }
);

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);
  return <Directory />;
};

export default Home;
