import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext= createContext('Auth');
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthProvider = ({children}) => {


    const [user,setUser]=useState(null);


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
              setUser(currentUser);
        });
        return () =>{
            unSubscribe();
        } 

    },[])

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email, password);
    }
 
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        return signOut(auth);
    }


    const authInfo={user,createUser,logOut,signIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;