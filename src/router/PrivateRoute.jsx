import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserProfileContext } from '../context/UserProfileContext';
import { toastWarnNotify } from '../helper/toastNotify';

export default function PrivateRoute({children}) {
  //const { user } = useUserProfileContext();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  if (user) {
    console.log('User is authenticated');
    return children; 
  } else {
    console.log('User is not authenticated');
    toastWarnNotify('You need to login first!');
    return <Navigate to="/auth?mode=login" replace />;
  }
}
