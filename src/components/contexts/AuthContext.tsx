import { createContext } from "react";

interface AuthContextType {
  user: {
    id: string | null;
    login: string | null;
    email: string | null;
    profil_image: string | null;
  };
  setUser: (e: any) => void;
  auth: boolean;
  setAuth: (e: any) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: {
    id: null,
    login: null,
    email: null,
    profil_image: null,
  },
  setUser: (e: any) => e,
  auth: false,
  setAuth: (e: any) => e
});

export default AuthContext;
