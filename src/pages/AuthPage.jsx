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
