import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from '../helper/toastNotify';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../auth/firebase';
import { getDatabase, ref, set, get, onValue, update } from 'firebase/database';
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //const { createUserInDB } = useUserProfileContext();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || ''
  );
  console.log('authContext:', currentUser);

  /* ---------------------- register ---------------------- */
  const register = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      toastSuccessNotify('Registered!');
      createUserInDB(user.uid, displayName, email);
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };
  /* ------------------------ login ----------------------- */
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify('Logged in!');
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  /* ----------------------- logout ----------------------- */
  const logout = () => {
    signOut(auth);
    toastSuccessNotify('Logged out!');
  };

  /* -------------------- google sign in ------------------- */
  const signGoogleProvider = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      //navigate('/');
      toastSuccessNotify('Logged in!');
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };

  /* ------------------- forget password ------------------ */
  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastWarnNotify('Please check your mail box!');
      })
      .catch((err) => {
        toastErrorNotify(err.message);
      });
  };

  /* ----------------------user observer ---------------------- */
  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        setCurrentUser({ email, displayName, photoURL, uid });
        localStorage.setItem(
          'user',
          JSON.stringify({ email, displayName, photoURL, uid })
        );
      } else {
        //User is signed out
        setCurrentUser(false);
        localStorage.removeItem('user');
      }
    });
  };

  useEffect(() => {
    userObserver(); // triggering userObserverı for user's sign in and out
  }, []);

  /* ------------------ create user in DB ----------------- */

  const createUserInDB = async (userId, name, email) => {
    const db = getDatabase();
    try {
      await set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        signGoogleProvider,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//customHook;
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
