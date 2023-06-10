import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();
const facebookAuth = new FacebookAuthProvider();



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,googleAuth);
    }
    const facebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,facebookAuth);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        
        const unsubscribe = onAuthStateChanged(auth, ( currentUser ) => {

            setUser(currentUser);

            if(currentUser){
                axios.post('http://localhost:5000/jwt',{ email: currentUser.email})
                .then(data => {
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token');

            }
        });

        return () => {
           return unsubscribe()
        }

    }, [])
    const authInfo = {
        createUser,
        updateUserProfile,
        user,
        signIn,
        googleSignIn,
        facebookSignIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;