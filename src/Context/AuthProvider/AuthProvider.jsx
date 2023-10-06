import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../../firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const [users, setUsers] = useState(null);

  const createEmailUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signEmailUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUsers(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUsers(user);

        // ...
      } else {
        // User is signed out
        // ...
      }
      return () => {
        unSubscribe();
      };
    });
  }, []);

  const AuthInfo = { createEmailUser, users, signEmailUser, signOutUser,loading };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
