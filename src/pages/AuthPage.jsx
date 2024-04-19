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

import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
  redirect,
} from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import { auth } from '../auth/firebase';

export default function AuthPage() {
  const data = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const isSubmitting = navigation.state === 'submitting';

    return <>{isLogin ? <LoginForm /> : <RegisterForm />}</>;
  
}

export async function login(data) {
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

export async function loginAction() {
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
    await signInWithEmailAndPassword(auth, authData.email, authData.password);
    toastSuccessNotify('Logged in!');
    console.log('clicked');
    return redirect('/');
  } catch (error) {
    toastErrorNotify(error.message);
    throw json({ message: error.message }, { status: 500 });
  }
}

export async function registerAction({ request }) {
  console.log(request);
  console.log('clicked');
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };
  try {
    await createUserWithEmailAndPassword(
      auth,
      authData.email,
      authData.password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    toastSuccessNotify('Registered!');
    return redirect('/');
  } catch (error) {
    toastErrorNotify(error.message);
    return 'auth';
  }
}
