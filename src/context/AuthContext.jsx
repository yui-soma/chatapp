import {createContext, useState, useEffect} from 'react';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({ loading: true, user: null});

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user===null){
                setAuthState({loading: false, user: null });
            } else {
                setAuthState({loading: false, user});
            }
        });
    },[]);

    return(
     <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
    );
};