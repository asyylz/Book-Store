import { useState, createContext, useContext } from 'react';
import { getDatabase, ref, get, onValue, update } from 'firebase/database';
import { useEffect } from 'react';
import { useAuthContext } from './AuthContext';
export const UserProfileContext = createContext();

const UserProfileContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [favBookIds, setFavBookIds] = useState([]);
  const { currentUser } = useAuthContext();



  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUserData(currentUser?.uid);
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    }

    fetchData();
  }, [currentUser?.uid]);

  /* ------------------- fetch userdata ------------------- */
  const fetchUserData = async (userId) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);
    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const user = snapshot.val();
        return user;
      } else {
        console.log('No data available');
        return {};
      }
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch user data');
    }
  };

  /* ---------------------- favclick ---------------------- */

  async function handleFavClick(id, volumeInfo, saleInfo, userId) {
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);

    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val() || {};
        let favBooks = userData.favBooks || [];
        const isAlreadyFavorite = favBooks.some((book) => book.id === id);

        if (!isAlreadyFavorite) {
          favBooks.push({ volumeInfo, id, saleInfo });
        } else {
          alert('Would you like to remove this book from your favorites?');
          favBooks = favBooks.filter((book) => book.id !== id);
        }
        await update(userRef, { favBooks });
        console.log('Favorite books updated successfully.');
      } else {
        alert('Please login.')
        console.log('No user data available.');
      }
    } catch (error) {
      console.error('Error updating favorite books:', error);
    }
  }

  /* ---------------------- listener ---------------------- */
  const [favBooksUpdated, setFavBooksUpdated] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const favBooksRef = ref(db, `users/${currentUser?.uid}/favBooks`);

    // Listener for real-time updates
    const unsubscribe = onValue(
      favBooksRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const updatedBooks = snapshot.val();
          setFavBooksUpdated(updatedBooks);
        } else {
          setFavBooksUpdated([]); // Handle no data scenario
        }
      },
      (error) => {
        console.error('Failed to fetch fav books:', error);
      }
    );

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [currentUser?.uid]);

  return (
    <UserProfileContext.Provider
      value={{
        fetchUserData,
        userData,
        favBookIds,
        setFavBookIds,
        handleFavClick,
        favBooksUpdated,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
export const useUserProfileContext = () => {
  return useContext(UserProfileContext);
};
export default UserProfileContextProvider;
