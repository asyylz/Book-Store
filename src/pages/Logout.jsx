import { useAuthContext } from '../context/AuthContext';
import { redirect } from 'react-router-dom';

export function action() {
  const { logout } = useAuthContext();
  logout();
  return redirect('/');
}
