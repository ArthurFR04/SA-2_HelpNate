import React, { useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { RegistrationContext } from '../../components/context/RegistrationContext';
import style from './RegistrationStyle';
import { Link } from '@react-navigation/native';
import { FontAwesome, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import CustomInput from "../../components/customInput/customInput";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native'

const EMAIL_AUTH = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const RegistrationScreen = () => {

    const navigation = useNavigation()
    const { firstPart } = useContext(RegistrationContext)
    const { control, handleSubmit, formState: { errors }, watch } = useForm();
    const verify = watch('senha')

    const onSubmit = async (data) => {
        await firstPart(data)
        navigation.navigate("Registration2")
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
            <View style={style.container}>
                <View style={style.containerCircle}>
                    <View style={style.circle}>
                        <View style={style.circleFormat}></View>
                        <View style={style.logoCircle}>
                            <Image source={require("../../../assets/images/logo.png")} style={style.imageLogo}></Image>
                        </View>
                        <View>
                            <Link to={{ screen: 'Login' }}>
                                <TouchableOpacity style={style.arrow}>
                                    <Link to={{ screen: 'Login' }}>
                                        <FontAwesome name="long-arrow-down" size={54} color="#3c3c3c" />
                                    </Link>
                                </TouchableOpacity>
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
                            rules={{ required: "Nome é obrigatório!" }}
                        />
                        <CustomInput
                            name="sobrenome"
                            placeholder="Sobrenome"
                            control={control}
                            rules={{ required: "Sobrenome é obrigatório!" }}
                        />
                        <CustomInput
                            name="nascimento"
                            placeholder="Data de Nascimento"
                            control={control}
                            rules={{ required: "Data de Nascimento é obrigatória!" }}
                        />
                        <CustomInput
                            name="email"
                            placeholder="Email"
                            control={control}
                            rules={{ required: "O email é obrigatório!", pattern: { value: EMAIL_AUTH, message: "Email inválido!" } }}
                        />
                        <CustomInput
                            name="telefone"
                            placeholder="Telefone"
                            control={control}
                            rules={{ required: "Telefone é obrigatório!" }}
                        />
                        <CustomInput
                            name="senha"
                            placeholder="Senha"
                            secureTextEntry
                            control={control}
                            rules={{ required: "Senha inválida!", minLength: { value: 6, message: "A senha necessita conter ao menos 6 dígitos!" } }}
                        />
                        <CustomInput
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            secureTextEntry
                            control={control}
                            rules={{ validate: value => value === verify || "As senhas não correspondem!", }}
                        />
                    </View>
                    <TouchableOpacity style={style.button} onPress={handleSubmit(onSubmit)}>
                        <Text style={style.textButton}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

// https://reactnative.dev/docs/datepickerios
// https://reactnative.dev/docs/datepickerandroid