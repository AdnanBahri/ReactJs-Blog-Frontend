import {createContext, useState} from "react"

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null)
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([])

    return <AuthContext.Provider value={{auth,setAuth,error, setError,posts, setPosts}}>
        {children}
    </AuthContext.Provider>
}