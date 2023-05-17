import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,updateProfile,
onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../../firebase.config';


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () =>{
        setLoading(true);
       return signInWithPopup(auth, provider)
    }
    const updateUser = (current, name, image) =>{
        updateProfile(current,{
            displayName: name,
            photoURL: image
        })
        .then(()=>{

        })
    }
    const loginUSer = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true)
        signOut(auth);
    }
    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth,(loggedUser) =>{
            setUser(loggedUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUSer,
        logOut,
        googleLogin,
        updateUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;