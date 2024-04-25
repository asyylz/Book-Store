import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: '', // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  }

  function hideCart() {
    setUserProgress('');
  }

  function showCheckout() {
    setUserProgress('checkout');
  }

  function hideCheckout() {
    setUserProgress('');
  }

  //   const userProgressCtx = {
  //     progress: userProgress,
  //     showCart,
  //     hideCart,
  //     showCheckout,
  //     hideCheckout,
  //   };

  return (
    <UserProgressContext.Provider
      value={{
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}

export const useUserProgressContext = () => {
  return useContext(UserProgressContext);
};

export default UserProgressContext;
