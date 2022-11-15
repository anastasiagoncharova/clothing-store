import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdmtqLBxTLadlHYs8eJJD6wx3dtkculvY",
  authDomain: "clothing-react-42e70.firebaseapp.com",
  projectId: "clothing-react-42e70",
  storageBucket: "clothing-react-42e70.appspot.com",
  messagingSenderId: "182846317813",
  appId: "1:182846317813:web:4f6aff32be9f42f4c4d1bc"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error', error.message);
    }
  }

  return userDocRef;
};