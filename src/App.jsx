import './App.css';
import React from "react";
import AuthContextProvider from './context/AuthContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
