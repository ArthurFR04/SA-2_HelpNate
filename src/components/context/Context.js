import React, {createContext, useState} from 'react';
import { Platform } from 'react-native';

export const Context = createContext({})

function ContextProvider({children}){

    // REGISTRATION

    const [registrationInfo, setregistrationInfo] = useState({
        nome: null,
        sobrenome: null,
        nascimento: null,
        email: null,
        senha: null,
        telefone: null,
        cep: null,
        cidade: null,
        estado: null,
        biografia: null
    });
    
    const[file, setFile] = useState();

    async function insertImageProfile(id){
        try {
            const data = new FormData();
            data.append('id', id[0].idusuario);
            if(Platform.OS === "web"){
                data.append('img', file); 
                await fetch("https://helpnate.herokuapp.com/imagemPerfil",{
                    method: 'POST',
                    body: data
                });
            }
            else{
                data.append('img',{name: 'teste.jpg' , type: "image/jpg", uri: file.uri}); 
                await fetch("https://helpnate.herokuapp.com/imagemPerfil",{
                    method: 'POST',
                    header: {"Content-Type": "multipart/form-data", Accept: "application/json"},
                    body: data
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    async function insertData(){
        try {
            if(registrationInfo.estado != null){
                let newUser = await fetch("https://helpnate.herokuapp.com/usuarioCompleto",{
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
                fetch("https://helpnate.herokuapp.com/usuarioIncompleto",{
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


    const[status, setstatus] = useState(false)

    const[verify, setverify] = useState(false)
    const[pos, setpos] = useState()
    
    const verifyLogin = async(data) => {
        const response = await fetch("https://helpnate.herokuapp.com/usuarios")
        .then(function(res){ return res.json()})
        .then(function(response){return response})


        await response.map((element, index) => {
        if(data.email === element.email && data.senha === element.senha){
            let status = verify
            status = true
            let indexx = index
            setverify(status)
            setpos(indexx)
        }
        })
    }


    return(
        <Context.Provider value={{firstPart, secondPart, insertData, file, setFile, verify, pos, verifyLogin}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;