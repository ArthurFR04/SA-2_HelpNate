import React, {createContext, useState} from 'react';

export const RegistrationContext = createContext({})

function RegistrationInfoProvider({children}){

    const [registrationInfo, setregistrationInfo] = useState({
        nome: "",
        sobrenome: "",
        nascimento: "",
        email: "",
        senha: "",
        telefone: "",
        cep: "",
        cidade: "",
        estado: ""
    })

    function firstPart(data){
        let newValues = registrationInfo;
        newValues.nome = data.nome;
        newValues.sobrenome = data.sobrenome;
        newValues.nascimento = data.nascimento;
        newValues.email = data.email;
        newValues.senha = data.senha;
        newValues.telefone = data.telefone;
        setregistrationInfo(newValues)
        console.warn(registrationInfo);
        navigation.navigate("Feed")
    }

    return(
        <RegistrationContext.Provider value={{registrationInfo, firstPart}}>
            {children}
        </RegistrationContext.Provider>
    )
}

export default RegistrationInfoProvider;