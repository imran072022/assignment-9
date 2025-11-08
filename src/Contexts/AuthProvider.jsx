import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  /*Sign Up */
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /*Sign In */
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /*Google Sign Up */
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  /*Log Out*/
  const logOut = () => {
    return signOut(auth);
  };

  /*Forget Password */
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  /*Update Profile */
  const updateProfileInfo = (photoURL, displayName) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    }).then(() => {
      setUser({ ...auth.currentUser, displayName, photoURL });
    });
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
    googleSignIn,
    forgotPassword,
    updateProfileInfo,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
