import React, { useContext, useState, Fragment, useEffect } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Button, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import style from './LoginStyle'
import { Context } from '../../components/context/Context';
import { Link } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import CustomInput from "../../components/customInput/customInput";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from "react-hook-form";
import { requestCameraPermissionsAsync } from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'

export const LoginScreen = () => {

  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
  const { updateUserInfo } = useContext(Context)
  const [verify, setverify] = useState()
  const [pos, setpos] = useState()
  const [error, seterror] = useState("")
  const [arrayUsers, setarrayUsers] = useState([])

  const authLogin = async (data) => {
    let defaultVerify = undefined;
    setverify(defaultVerify)
    let defaultError = "";
    seterror(defaultError)
    const response = await fetch("https://helpnate.herokuapp.com/usuarios")
      .then(function (res) { return res.json() })
      .then(function (response) { return response })
    setarrayUsers(response)
    await response.map((element, index) => {
      if(data.email === element.email && data.senha === element.senha) {
        let status = verify
        status = true
        let indexx = index
        setpos(indexx)
        setverify(status)
      } else {
        let status = verify
        status = false
        setverify(status)
      }
    })
  }

  useEffect(async() => {
    if (verify === true) {
      await updateUserInfo(arrayUsers[pos])
      navigation.navigate("Feed");
    } else if(verify === false){
      let myErroMessage = "Usuário inexistente!";
      seterror(myErroMessage)
    } else{
      return;
    }
  }, [verify])

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={style.container} keyboardVerticalOffset={40}>
          <LinearGradient colors={['#f2bc1b', '#fff395']} start={{ x: 0, y: 1 }} end={{ x: -1, y: 0 }}>
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
              {error != "" ? <Text style={{ color: "red", fontSize: 16 }}>{error}</Text> : <></>}
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
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Fragment>
  );
}