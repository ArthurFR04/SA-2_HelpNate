import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import style from './RegistrationStyle'; 
import { Link } from '@react-navigation/native';
import { FontAwesome, AntDesign, FontAwesome5, Entypo} from '@expo/vector-icons';

export const RegistrationScreen = () =>{
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View style={style.container}>
                    <View style={style.containerCircle}>
                        <View style={style.circle}>
                            <View style={style.circleFormat}></View>
                            <View style={style.logoCircle}>
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
                            <TextInput style={style.input} placeholder="Email" placeholderTextColor={"black"}></TextInput>
                            <TextInput style={style.input} placeholder="Senha" placeholderTextColor={"black"}></TextInput>
                            <TextInput style={style.input} placeholder="Confirmar Senha" placeholderTextColor={"black"}></TextInput>
                        </View>
                        <TouchableOpacity style={style.button}>
                            <Text style={style.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.containerOpcoes}>
                        <View style={style.opcao}>
                            <TouchableOpacity style={style.opcaoButton}><Entypo name="instagram-with-circle" size={50} color="black" /></TouchableOpacity>
                        </View>
                        <View style={style.opcao}>
                            <TouchableOpacity style={style.opcaoButton}><AntDesign name="github" size={50} color="black"/></TouchableOpacity>
                        </View>
                        <View style={style.opcao}>
                            <TouchableOpacity style={style.opcaoButton}><FontAwesome5 name="facebook" size={50} color="black" /></TouchableOpacity>
                        </View>
                    </View>
            </View>
        </ScrollView>
    )   

    validar = () => {
        let inputs = 'em processo'
    }

    salvar = () => {
        validar()
        console.log('Salvou');
    }
}