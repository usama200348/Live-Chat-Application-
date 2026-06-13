import {
  createContext,
  useState,
} from "react";

export function AuthContext (){ createContext();}

function AuthProvider({
  children,
}) {
  const [user, setUser] =
    useState(
      JSON.parse(
        localStorage.getItem("user")
      )
    );

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default {AuthProvider , AuthContext}