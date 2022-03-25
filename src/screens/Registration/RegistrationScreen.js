import React, { useImperativeHandle } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { useUserInfo } from '../../components/context/registrationObject'
import style from './RegistrationStyle'; 
import { Link } from '@react-navigation/native';
import { FontAwesome, AntDesign, FontAwesome5, Entypo} from '@expo/vector-icons';

export const RegistrationScreen = () =>{

    const {userInfo, setuserInfo} = useUserInfo();

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View style={style.container}>
                    <View style={style.containerCircle}>
                        <View style={style.circle}>
                            <View style={style.circleFormat}></View>
                            <View style={style.logoCircle}>
                                {userInfo}
                                <Image source={require("../../../assets/images/logo.png")} style={style.imageLogo}></Image>
                            </View>
                            <View style={style.arrow}>
                                <FontAwesome name="long-arrow-down" size={36} color="#F2F2F2" />
                            </View>   
                        </View>
                    </View>
                    <View style={style.content}>
                        <Text style={style.title}>Cadastro</Text>
                        <View style={style.containerInput}>
                            <TextInput style={style.input} placeholder="Nome" placeholderTextColor={"black"}></TextInput>
                            <TextInput style={style.input} placeholder="Sobrenome" placeholderTextColor={"black"}></TextInput>
                            <TextInput style={style.input} placeholder="Data de Nascimento" placeholderTextColor={"black"}></TextInput>
                            <TextInput style={style.input} placeholder="Email" placeholderTextColor={"black"}></TextInput>
                            <TextInput style={style.input} placeholder="Senha" placeholderTextColor={"black"}></TextInput>
                            <TextInput style={style.input} placeholder="Confirmar Senha" placeholderTextColor={"black"}></TextInput>
                        </View>
                        <TouchableOpacity style={style.button}>
                            <Text style={style.textButton}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </ScrollView>
    )   
}



// https://reactnative.dev/docs/datepickerios
// https://reactnative.dev/docs/datepickerandroid