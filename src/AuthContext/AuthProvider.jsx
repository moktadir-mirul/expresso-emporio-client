import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [userInfo, setUserInfo] = useState(null);
  const [coffees, setCoffees] = useState([]);

  const googleProviderAuth = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signOutHandler = () => {
    return signOut(auth);
  }

  const signUpWithEmail = (email , password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const coffeeContext = {
    coffees,
    setCoffees,
    googleProviderAuth,
    userInfo,
    setUserInfo,
    signOutHandler,
    signUpWithEmail,
    signInWithEmail
  };
  return (
    <div>
      <AuthContext value={coffeeContext}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
