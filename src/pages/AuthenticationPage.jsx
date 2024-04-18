import LoginModalForm from '../components/LoginModalForm';
import { json, redirect } from 'react-router-dom';

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
export default function AuthenticationPage() {
  return (
    <>
      <LoginModalForm />
    </>
  );
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported mode' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  try {
    await signInWithEmailAndPassword(authData.email, authData.password);
    //toastSuccessNotify('Logged in!');
    return redirect('/');
  } catch (error) {
    //toastErrorNotify(error.message);
    throw json({ message: error.message }, { status: 500 });
  }
}
