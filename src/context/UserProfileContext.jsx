import { useState, createContext, useContext } from 'react';
import { getDatabase, ref, set, get, onValue, update } from 'firebase/database';
import { useEffect } from 'react';
const BASE_DB_URL = import.meta.env.VITE_APP_databaseURL;
export const UserProfileContext = createContext();

const UserProfileContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [favBookIds, setFavBookIds] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUserData(user?.uid);
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        // Handle errors as appropriate
      }
    }

    fetchData();
  }, [user?.uid]);

  useEffect(() => {
    const db = getDatabase();
    const favBooksRef = ref(db, `users/${user?.uid}/favBooks`);

    const unsubscribe = onValue(favBooksRef, (snapshot) => {
      const favBooks = snapshot.val() || [];
      const favBookIds = favBooks.map((book) => book.id);
      setFavBookIds(favBookIds);
    });

    return () => unsubscribe(); // Clean up the subscription
  }, [user?.uid]);

  const createUserInDB = async (userId, name, email) => {
    const db = getDatabase();
    try {
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        //profile_picture: imageUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserData = async (userId) => {
    //console.log('fetchuserdata:clicked');
    //console.log(userId);
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);
    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const user = snapshot.val();
        //console.log(user);
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
  async function handleFavClick(id, volumeInfo, saleInfo) {
    const db = getDatabase();
    const userRef = ref(db, `users/${user.uid}`);

    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val() || {};
        let favBooks = userData.favBooks || [];
        const isAlreadyFavorite = favBooks.some((book) => book.id === id);
        console.log(isAlreadyFavorite);

        if (!isAlreadyFavorite) {
          favBooks.push({ volumeInfo, id, saleInfo });
        } else {
          alert('Would you like to remove this book from your favorites?')
          favBooks = favBooks.filter((book) => book.id !== id);
        }
        await update(userRef, { favBooks });
        console.log('Favorite books updated successfully.');
      } else {
        console.log('No user data available.');
      }
    } catch (error) {
      console.error('Error updating favorite books:', error);
    }
  }

  return (
    <UserProfileContext.Provider
      value={{
        createUserInDB,
        fetchUserData,
        userData,
        user,
        favBookIds,
        setFavBookIds,
        handleFavClick,
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
