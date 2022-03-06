import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import style from './LoginStyle'
import { Link } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export const LoginScreen = () =>{
  return (
    <View className="container" style={style.container}>
      <LinearGradient colors={['#f2bc1b', '#fff395']} style={style.background} start={{ x: 0, y: 1 }} end={{ x: -1, y: 0 }}>
        <View className="conteudo" style={style.conteudo}>
          <Text style={style.text} className="text">Login</Text>
          <TextInput style={style.input} placeholder="Insira seu nome" placeholderTextColor="#3c3c3c" autoCorrect={false}></TextInput>
          <TextInput style={style.input} placeholder="Insira sua senha" placeholderTextColor="#3c3c3c" autoCorrect={false}></TextInput>
          <TouchableOpacity style={style.btnLogar}>
            <Text style={style.textbtn}>Logar</Text>
          </TouchableOpacity>
        </View>

        <View className="conteudo-2" style={style.conteudo2}>

          <View style={style.arrowG}>
            <TouchableOpacity style={style.arrow}>
              <Link to={{ screen: 'Registration' }}>
                <FontAwesome name="long-arrow-up" size={54} color="#3c3c3c" />
              </Link>
            </TouchableOpacity>
          </View>
          <View className="butonss" style={style.butons}>
            <View style={style.googlee}>
              <TouchableOpacity>
                <AntDesign name="google" size={50} color="#3c3c3c" />
              </TouchableOpacity>
            </View>
            <View style={style.facebookk}>
              <TouchableOpacity>
                <FontAwesome name="facebook-f" size={50} color="#3c3c3c" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}


