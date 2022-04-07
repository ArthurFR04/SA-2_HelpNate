import React, { useContext, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import style from './LoginStyle'
import { Context } from '../../components/context/Context';
import { Link } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import CustomInput from "../../components/customInput/customInput";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from "react-hook-form";

export const LoginScreen = () => {

  const { verify, pos, verifyLogin } = useContext(Context)
  const[error, seterror] = useState("")
  const { control, handleSubmit, formState: { errors }, watch } = useForm();

  const authLogin = async(data) => {
    await verifyLogin(data)
    continueVerify()
  }

  const continueVerify = () => {
    if(verify === true){
      console.warn('oi');
    }
    else{
      let myErrorMessage = "Usuário inexistente!"
      seterror(myErrorMessage)
    }
  }

  return (
      <View style={style.container}>
        <LinearGradient colors={['#f2bc1b', '#fff395']} style={{ flex: 1 }} start={{ x: 0, y: 1 }} end={{ x: -1, y: 0 }}>
          <View style={style.conteudo}>
            <Text style={style.text}>Login</Text>
            <View style={style.inputs}>
              <CustomInput
                name="email"
                placeholder="Email"
                control={control}
                rules={{ required: "Email é obrigatório!" }}
              />
              <CustomInput
                name="senha"
                placeholder="Senha"
                secureTextEntry
                control={control}
                rules={{ required: "Senha inválida!", minLength: { value: 6, message: "A senha necessita conter ao menos 6 dígitos!" } }}
              />
            </View>
            {error != "" ? <Text style={{color: "red", fontSize: 16}}>{error}</Text> : <></>}
            <TouchableOpacity style={style.btnLogar} onPress={handleSubmit(authLogin)}>
              <Text style={style.textbtn}>Logar</Text>
            </TouchableOpacity>

          </View>

          <View style={style.containerCircle}>
            <View style={style.circle}>
              <View style={style.circleFormat}></View>
              <View style={style.logoCircle}>
                <Text style={style.textRegistration}>Não possui conta? Clique na flecha.</Text>
                <Image source={require("../../../assets/images/logo.png")} style={style.imageLogo}></Image>
              </View>
              <View style={style.arrow}>
                <Link to={{ screen: 'Registration' }}>
                  <FontAwesome name="long-arrow-up" size={42} color="#3c3c3c" />
                </Link>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
  );
}