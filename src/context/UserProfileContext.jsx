import { useState, createContext, useContext } from 'react';

export const UserProfileContext = createContext();
const BASE_DB_URL = import.meta.env.VITE_APP_databaseURL;
const UserProfileContextProvider = ({ children }) => {

//   const [userProfile, setUserProfile] = useState(
//     JSON.parse(localStorage.getItem('user')) || ''
//   );
//   console.log(userProfile)
  const createUserInDB = async (userProfile) => {
    console.log(userProfile)
  
    try {
        const response = await fetch(`${BASE_DB_URL}/users.json`,
        {
          method: 'POST',
          body: JSON.stringify(userProfile),
        });
        console.log(response)
    } catch (error) {
        console.log(error);
    }  
  };

  
  return (
    <UserProfileContext.Provider
      value={{
        // userProfile,
        // setUserProfile,
        createUserInDB
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
