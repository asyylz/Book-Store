import { useState, createContext, useContext } from 'react';
import { getDatabase, ref, set, get, onValue } from 'firebase/database';
import { useEffect } from 'react';
const BASE_DB_URL = import.meta.env.VITE_APP_databaseURL;
export const UserProfileContext = createContext();

const UserProfileContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUserData(user.uid);
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        // Handle errors as appropriate
      }
    }

    fetchData();
  }, [user.uid]);

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
    console.log('fetchuserdata:clicked');
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

  return (
    <UserProfileContext.Provider
      value={{
        createUserInDB,
        fetchUserData,
        userData,
        user
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
