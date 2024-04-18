import LoginForm from '../components/LoginForm';
import { json, redirect } from 'react-router-dom';
import { toastSuccessNotify, toastErrorNotify } from '../helper/toastNotify';
import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../auth/firebase';

export default function AuthenticationPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}

export async function actionLogin(data) {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    toastSuccessNotify('Logged in!');
    return redirect('/');
  } catch (error) {
    console.log('clicked');
    toastErrorNotify(error.message);
    console.log(error.message);
    throw json({ message: error.message }, { status: 500 });
  }
}
