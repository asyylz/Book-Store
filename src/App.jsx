import './App.css';
import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppRouter from './router/AppRouter';
import UserProfileContextProvider from './context/UserProfileContext.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import UserProgressContextProvider from './context/UserProgressContext.jsx';

function App() {
  return (
    <UserProfileContextProvider>
      <AuthContextProvider>
        <UserProgressContextProvider>
          <CartContextProvider>
            <AppRouter />
            <ToastContainer />
          </CartContextProvider>
        </UserProgressContextProvider>
      </AuthContextProvider>
    </UserProfileContextProvider>
  );
}

export default App;
