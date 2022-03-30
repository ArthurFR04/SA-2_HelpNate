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
        estado: "",
        biografia: ''
    })

    function insertData(){
        try {
            if(registrationInfo.estado != ""){
                console.warn(registrationInfo);
                fetch("http://localhost:5000/usuarioCompleto",{
                    method: "POST",
                    headers: { "Content-Type":"application/json" },
                    body: JSON.stringify({
                        nome: registrationInfo.nome,
                        sobrenome: registrationInfo.sobrenome,
                        nascimento: registrationInfo.nascimento,
                        email: registrationInfo.email,
                        senha: registrationInfo.senha,
                        telefone: registrationInfo.telefone,
                        cep: registrationInfo.cep,
                        cidade: registrationInfo.cidade,
                        estado: registrationInfo.estado,
                        biografia: registrationInfo.biografia
                    })
                })
            }
            else{

                fetch("http://localhost:5000/usuarioIncompleto",{
                    method: "POST",
                    headers: { "Content-Type":"application/json" },
                    body: JSON.stringify({
                        nome: registrationInfo.nome,
                        sobrenome: registrationInfo.sobrenome,
                        nascimento: registrationInfo.nascimento,
                        email: registrationInfo.email,
                        senha: registrationInfo.senha,
                        telefone: registrationInfo.telefone
                    })
                })
            }
        } catch (error) {
            console.warn(error.message)
        }
    }

    function firstPart(data){
        let newValues = registrationInfo;
        newValues.nome = data.nome;
        newValues.sobrenome = data.sobrenome;
        newValues.nascimento = data.nascimento;
        newValues.email = data.email;
        newValues.senha = data.senha;
        newValues.telefone = data.telefone;
        setregistrationInfo(newValues)
        console.log(registrationInfo);
    }

    function secondPart(data){
        let newValues = registrationInfo;
        newValues.cep = data.cep;
        newValues.cidade = data.cidade;
        newValues.estado = data.estado;
        newValues.biografia = data.biografia;
        setregistrationInfo(newValues)
        insertData()
    }

    return(
        <RegistrationContext.Provider value={{firstPart, secondPart, insertData}}>
            {children}
        </RegistrationContext.Provider>
    )
}

export default RegistrationInfoProvider;