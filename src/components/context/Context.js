import React, { createContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';

export const Context = createContext({})

function ContextProvider({ children }) {

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

    const [file, setFile] = useState();

    async function insertImageProfile(id) {
        try {
            const data = new FormData();
            data.append('id', id[0].idusuario);
            if (Platform.OS === "web") {
                data.append('img', file);
                await fetch("https://helpnate.herokuapp.com/imagemPerfil", {
                    method: 'POST',
                    body: data
                });
                updateUserInfo(id)
            }
            else {
                data.append('img', { name: 'teste.jpg', type: "image/jpg", uri: file.uri });
                await fetch("https://helpnate.herokuapp.com/imagemPerfil", {
                    method: 'POST',
                    header: { "Content-Type": "multipart/form-data", Accept: "application/json" },
                    body: data
                });
                updateUserInfo(id)
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    async function insertData() {
        try {
            if (registrationInfo.estado != null) {
                let newUser = await fetch("https://helpnate.herokuapp.com/usuarioCompleto", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
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
            else {
                let newUser = await fetch("https://helpnate.herokuapp.com/usuarioIncompleto", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        nome: registrationInfo.nome,
                        sobrenome: registrationInfo.sobrenome,
                        nascimento: registrationInfo.nascimento,
                        email: registrationInfo.email,
                        senha: registrationInfo.senha,
                        telefone: registrationInfo.telefone
                    })
                })
                let newUserInfo = await newUser.json()
                updateUserInfo(newUserInfo)
            }
        } catch (error) {
            console.warn(error.message)
        }
    }

    function firstPart(data) {
        let newValues = registrationInfo;
        newValues.nome = data.nome;
        newValues.sobrenome = data.sobrenome;
        newValues.nascimento = data.nascimento;
        newValues.email = data.email;
        newValues.senha = data.senha;
        newValues.telefone = data.telefone;
        setregistrationInfo(newValues)
    }

    function secondPart(data) {
        let newValues = registrationInfo;
        newValues.cep = data.cep;
        newValues.cidade = data.cidade;
        newValues.estado = data.estado;
        newValues.biografia = data.biografia;
        setregistrationInfo(newValues)
        insertData()
    }


    const [status, setstatus] = useState(false)
    const [userInfo, setuserInfo] = useState()

    const updateUserInfo = async (data) => {
        if (data.length === 1) {
            const response = await fetch(`https://helpnate.herokuapp.com/usuarios/${data[0].idusuario}`)
            const responseJson = await response.json()
            let userInfoParam = responseJson[0]
            setuserInfo(userInfoParam)
        }
        else {
            setstatus(true)
            let userInfoParam = data
            setuserInfo(userInfoParam)
        }
        let boolean = true
        setstatus(boolean)
    }



    const newPost = async (data, categoria, arrayImages) => {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let idanuncio = await fetch("https://helpnate.herokuapp.com/anuncio", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                SITUACAO: "doando",
                IDUSUARIO: userInfo.idusuario,
                TITULO: data.titulo,
                DESCRICAO: data.descricao,
                CATEGORIA: categoria,
                DATA_POST: today
            })
        })

        let idAnuncioJson = await idanuncio.json()
        let dataa = new FormData();
        arrayImages.map((file, index) => {
            dataa.append('imgs', { name: 'teste.jpg', type: "image/jpg", uri: file.uri })
        })
        dataa.append('id', idAnuncioJson[0].idanuncio)
        await fetch("https://helpnate.herokuapp.com/imagensPost", {
            method: 'POST',
            header: { "Content-Type": "multipart/form-data", Accept: "application/json" },
            body: dataa
        });
    }

    return (
        <Context.Provider value={{ firstPart, secondPart, insertData, file, setFile, updateUserInfo, userInfo, status, newPost }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;