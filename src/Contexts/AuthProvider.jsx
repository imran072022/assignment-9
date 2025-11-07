import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  /*Sign Up */
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /*Sign In */
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /*Log Out*/
  const logOut = () => {
    return signOut(auth);
  };
  /*On Auth State Changed */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  /*User Info */
  const userInfo = {
    signUp,
    signIn,
    user,
    setUser,
    loading,
    setLoading,
    logOut,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
