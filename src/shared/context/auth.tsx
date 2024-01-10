import { createContext, useState } from "react";
import { AuthState, User } from "../types";

const defaultState: AuthState = {
    singIn: (email: string) => {},
    user: {
        email: "email",
        status: "INATIVO"
    }
}

export const AuthContext = createContext(defaultState)

function AuthProvider({children}: any){
    const [user, setUser] = useState<User>(defaultState.user)

    function singIn(email: string){
        setUser({
            email: email,
            status: "ATIVO"
        })
    }

    return(
        <AuthContext.Provider value={{ singIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider