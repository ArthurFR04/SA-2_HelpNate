import React, { Fragment, useContext, useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Context } from '../../components/context/Context';
import style from './RegistrationStyle'; 
import { Link } from '@react-navigation/native';
import { FontAwesome, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import CustomInput from "../../components/customInput/customInput";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native'

const EMAIL_AUTH = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const DATE_AUTH = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

export const RegistrationScreen = () => {

    const navigation = useNavigation()
    const { firstPart } = useContext(Context)
    const { control, handleSubmit, formState: {errors}, watch } = useForm();
    const verify = watch('senha')

    const onSubmit = async (data) => {
        await firstPart(data)
        navigation.navigate("Registration2")
    }
        
    return(
        <Fragment>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={style.container}>
                    <View style={style.containerCircle}>
                        <View style={style.circle}>
                            <View style={style.circleFormat}></View>
                            <View style={style.logoCircle}>
                                <Image source={require("../../../assets/images/logo.png")} style={style.imageLogo}></Image>
                                <Text style={style.textRegistration}>Possui conta? Clique na flecha.</Text>
                            </View>
                            <View style={style.arrow}>
                               <Link to={{screen: "Login"}}>
                                    <FontAwesome name="long-arrow-down" size={36} color="#F2F2F2" />
                               </Link>
                            </View> 
                        </View>
                    </View>
                    <View style={style.content}>
                        <Text style={style.title}>Cadastro</Text>
                        <View style={style.containerInput}>
                            <CustomInput 
                                name="nome"
                                placeholder="Nome"
                                control={control}
                                rules={{required: "Nome é obrigatório!"}}
                            />
                            <CustomInput 
                                name="sobrenome"
                                placeholder="Sobrenome"
                                control={control}
                                rules={{required: "Sobrenome é obrigatório!"}}
                            />
                            <CustomInput 
                                name="nascimento"
                                placeholder="Data de Nascimento"
                                control={control}
                                rules={{required: "Data de Nascimento é obrigatória!", pattern: {value: DATE_AUTH, message: "Data inválida! Exemplo: 02/04/2004" }}}
                            />
                            <CustomInput 
                                name="email"
                                placeholder="Email"
                                control={control}
                                rules={{required: "O email é obrigatório!", pattern: {value: EMAIL_AUTH, message: "Email inválido!" }}}
                            />
                            <CustomInput 
                                name="telefone"
                                placeholder="Telefone"
                                control={control}
                                rules={{required: "Telefone é obrigatório!"}}
                            />
                            <CustomInput 
                                name="senha"
                                placeholder="Senha"
                                secureTextEntry
                                control={control}
                                rules={{required: "Senha inválida!", minLength: { value: 6, message: "A senha necessita conter ao menos 6 dígitos!"}}}
                            />
                            <CustomInput 
                                name="confirmarSenha"
                                placeholder="Confirmar Senha"
                                secureTextEntry
                                control={control}
                                rules={{required: "Senha inválida!", validate: value => value === verify || "As senhas não correspondem!", }}
                            />
                        </View>
                        <TouchableOpacity style={style.button} onPress={handleSubmit(onSubmit)}>
                            <Text style={style.textButton}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Fragment>
    )   
}

// https://reactnative.dev/docs/datepickerios
// https://reactnative.dev/docs/datepickerandroid