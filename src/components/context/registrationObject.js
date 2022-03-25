import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

const ObjectTeste = {
    nome: null,
    sobrneome: null,
    nascimento: null,
    email: null,
    senha: null,
    telefone: null,
    cep: null,
    cidade: null,
    estado: null,
    biografia: null
  }

export default function UserProvider({ children }) {
  const [userInfo, setuserInfo] = useState(ObjectTeste);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setuserInfo
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserInfo() {
  const context = useContext(UserContext);
  const { userInfo, setuserInfo } = context;
  return { userInfo, setuserInfo };
}