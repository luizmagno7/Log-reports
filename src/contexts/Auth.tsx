import { useReducer, createContext } from 'react';

interface AuthContextValue {
    isAuthenticated: boolean;
    login: ( payload: object ) => void;
    logout: () => void;
}

interface Action {
    type: 'LOGIN' | 'LOGOUT';
    payload?: any;
}

function authReducer(state: AuthContextValue, action: Action): AuthContextValue {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
}

export const AuthContext = createContext<AuthContextValue>({
    isAuthenticated: false,
    login: () => { },
    logout: () => { }
});

export function AuthProvider(props: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        login: ( payload ) => {
            dispatch({ type: 'LOGIN', payload });
        },
        logout: () => {
            dispatch({ type: 'LOGOUT' });
        }
    });

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}