import { createContext, useState,useContext } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
const UserProgressContext = createContext({
  progress: '', // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

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
  const createOrder = async (orderData) => {
    if (user && user.uid) {
      const db = getDatabase();
      const orderId = uuidv4();
      const orderRef = ref(db, `users/${user.uid}/orders/${orderId}`);
      await set(orderRef, orderData)
        .then(() => {
          console.log(`Order saved successfully!${orderId}`);
        })
        .catch((error) => {
          console.error('Failed to save order:', error);
        });
    } else {
      console.log('No user logged in, cannot save order.');
    }
  };

  return (
    <UserProgressContext.Provider
      value={{
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        createOrder
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
