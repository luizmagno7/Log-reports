import React, { createContext } from 'react';

const AuthContext = createContext({});

type Props = {
    children: React.ReactNode,
};

export const AuthProvider: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <AuthContext.Provider value={{ signed: true }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;