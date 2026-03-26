import { createContext, useState, useContext } from 'react'

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function signUp(firstName, lastName, email, password) {
        const newUser = { firstName, lastName, email, password };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
    }

    function login(firstName, lastName, email, password) {
        // your login logic
    }
    function logout() {
        localStorage.removeItem("user");
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ signUp, user, login, logout}}>  {children} </AuthContext.Provider>
    );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
