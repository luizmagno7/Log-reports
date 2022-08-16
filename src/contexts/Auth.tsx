import React, { createContext, useContext } from 'react';

type Props = {
    children: React.ReactNode,
};

interface IAuthContext {
    [key: string]: any;
}

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            console.info("[default]")

            return state;
    }
};

const AuthContext = createContext<IAuthContext>(initialState);

export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
    const auth = useContext(AuthContext)

    const localUser = localStorage.getItem("user");
    const localtoken = localStorage.getItem("token");

    auth.user = localUser;
    auth.token = localtoken;
    auth.isAuthenticated = !!localUser;

    const [state, dispatch] = React.useReducer(reducer, auth);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;