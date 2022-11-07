import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../fire.config/fire.config"
import { useState, useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    let googleLogin = (provider)=>
    {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    let usersignOut = ()=>
    {
        setLoading(true);
        return signOut(auth)
    }

    let createUser = (email, password) =>
    {
         setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      }

      const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    const forgetPassword =(email)=>
    {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, googleLogin, usersignOut, createUser , setLoading, login, setUser, verifyEmail, forgetPassword ,loading}
    return ( 
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;