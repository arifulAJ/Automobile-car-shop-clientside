import React, { createContext } from 'react';
import useFireBase from '../Pages/SignUp/UseFirebase/UseFireBase';
export const AuthContext=createContext()
const AuthProvide = ({children}) => {
    const allContent=useFireBase()
    return (
        <AuthContext.Provider value={allContent}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvide;