import { useState, createContext, useContext } from 'react';

export const UserProfileContext = createContext();
const BASE_DB_URL = import.meta.env.VITE_APP_databaseURL;
const UserProfileContextProvider = ({ children }) => {
  const createUserInDB = async (userProfile) => {
    try {
      const response = await fetch(`${BASE_DB_URL}/users.json`, {
        method: 'POST',
        body: JSON.stringify(userProfile),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(`${BASE_DB_URL}/users/-Nw6WlG9znx7xHQ1H1gF`);
      const resData = await response.json();
      console.log(resData);
      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserProfileContext.Provider
      value={{
        createUserInDB,
        fetchUser,
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
