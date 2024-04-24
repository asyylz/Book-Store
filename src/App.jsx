import './App.css';
import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppRouter from './router/AppRouter';
import UserProfileContextProvider from './context/UserProfileContext.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
import CartContext from './context/CartContext.jsx';

function App() {
  return (
    <UserProfileContextProvider>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </UserProfileContextProvider>
  );
}

export default App;
