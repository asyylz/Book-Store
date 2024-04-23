import { useState, createContext, useContext } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
const BASE_DB_URL = import.meta.env.VITE_APP_databaseURL;
export const UserProfileContext = createContext();

const UserProfileContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

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
    try {
      const db = getDatabase();
      const userRef = ref(db, `users/${userId}`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        //updateStarCount(postElement, data);
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserProfileContext.Provider
      value={{
        createUserInDB,
        fetchUserData,
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
