import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserProfileContext } from '../context/UserProfileContext';
import { Outlet } from 'react-router-dom';
import { toastWarnNotify } from '../helper/toastNotify';

export default function PrivateRoute({children}) {
  //const { user } = useUserProfileContext();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  if (user) {
    console.log('User is authenticated');
    return children; // Renders child routes if the user is authenticated
  } else {
    console.log('User is not authenticated');
    toastWarnNotify('You need to login first!');
    return <Navigate to="/auth?mode=login" replace />;
  }
}
