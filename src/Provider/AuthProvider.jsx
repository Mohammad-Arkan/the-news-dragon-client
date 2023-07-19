import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebase.config';
export const AuthContex = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const createUser =(email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
}
const logIn =(email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
const logOut=()=>{
    return signOut(auth)
}
useEffect(()=> {
  const unSubscribe =  onAuthStateChanged(auth, loggedUser => {
        console.log('logged in user insite auth state observer', loggedUser)
        setUser(loggedUser)
    })
    return()=>{
        unSubscribe();
    }
},[])
const authInfo = {
    user,
    createUser,
    logIn,
    logOut,

}
    return (  
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;