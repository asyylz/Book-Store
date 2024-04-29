import './App.css';
import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppRouter from './router/AppRouter';
import UserProfileContextProvider from './context/UserProfileContext.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import { UserProgressContextProvider } from './context/UserProgressContext.jsx';

function App() {
  return (
    <AuthContextProvider>
      <UserProfileContextProvider>
        <UserProgressContextProvider>
          <CartContextProvider>
            <AppRouter />
          </CartContextProvider>
        </UserProgressContextProvider>
      </UserProfileContextProvider>
    </AuthContextProvider>
  );
}

export default App;
