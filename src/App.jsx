import './App.css';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './router/AppRouter';
import UserProfileContextProvider from './context/UserProfileContext.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import { UserProgressContextProvider } from './context/UserProgressContext.jsx';
import { motion, useScroll } from 'framer-motion';
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>
      <AuthContextProvider>
        <UserProfileContextProvider>
          <UserProgressContextProvider>
            <CartContextProvider>
              <AppRouter />
            </CartContextProvider>
          </UserProgressContextProvider>
        </UserProfileContextProvider>
      </AuthContextProvider>
      </>
  );
}

export default App;
