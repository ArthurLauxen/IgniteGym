import { UserDTO } from "@dtos/userDTO";
import { ReactNode, createContext, useState } from "react";
import { api } from "@services/api";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContexts = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function signIn(email: string, password: string) {
    try{
    const { data } = await api.post("sessions", { email, password });

    if (data.User) {
      setUser(data.User);
    }}catch (error){
      throw error
    }
  }
  return (
    <AuthContexts.Provider value={{ user, signIn }}>
      {children}
    </AuthContexts.Provider>
  );
}
