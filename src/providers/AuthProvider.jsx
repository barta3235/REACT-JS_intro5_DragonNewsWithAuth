import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext= createContext('Auth');
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthProvider = ({children}) => {


    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
              setUser(currentUser);
              setLoading(false);
        });
        return () =>{
            unSubscribe();
        } 

    },[])

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }
 
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    const authInfo={user,createUser,logOut,signIn,loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;