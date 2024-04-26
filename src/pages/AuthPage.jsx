import { useSearchParams, useNavigation } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

export default function AuthPage() {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const isSubmitting = navigation.state === 'submitting';

  return <>{isLogin ? <LoginForm /> : <RegisterForm />}</>;
}

// export async function action({ request, params }) {
//   console.log(request.formData)
//   const data = await request.formData();
// console.log('clicked')
//   const eventData = {
//     email: data.get('email'),
//     password: data.get('password'),
//     displayName: data.get('firstName'),
//   };
//   console.log(eventData.email)
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       eventData.email,
//       eventData.password
//     );
//     const { user } = userCredential;
//     console.log(user)
//     await updateProfile(auth.currentUser, {
//       displayName: displayName,
//     });
//     toastSuccessNotify('Registered!');
//     //createUserInDB(user.uid, displayName, email);
//   } catch (error) {
//     console.log(error);
//     toastErrorNotify(error.message);
//   }
//   return redirect('/');
// }