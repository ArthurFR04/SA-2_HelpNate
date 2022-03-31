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
    });
    const[file, setFile] = useState(null);

    async function insertImageProfile(id){
        try {
            const data = new FormData();
            data.append('id', id[0].idusuario)
            data.append('img', {uri: file.uri, type: 'image', name: 'imagemDePerfil'}); 
            await fetch("http://localhost:5000/imagemPerfil",{
                method: "POST",  
                body: data
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    async function insertData(){
        try {
            if(registrationInfo.estado != ""){
                let newUser = await fetch("http://localhost:5000/usuarioCompleto",{
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
                let newUserInfo = await newUser.json()
                insertImageProfile(newUserInfo)
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
        <RegistrationContext.Provider value={{firstPart, secondPart, insertData, file, setFile}}>
            {children}
        </RegistrationContext.Provider>
    )
}

export default RegistrationInfoProvider;