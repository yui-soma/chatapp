import {createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const state = 'これはグローバルステートです'
    return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
};