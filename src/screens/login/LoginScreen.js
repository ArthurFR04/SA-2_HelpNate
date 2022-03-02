import React from 'react'
import { View, TextInput, Text, Button, TouchableOpacity} from "react-native";
import style from './loginstyle'
import { Link } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View className="container" style={style.container}>
      <View className="conteudo" style={style.conteudo}>
        <Text style={style.text} className="text">Login</Text>
        <TextInput style={style.input} placeholder="Insira seu nome" placeholderTextColor="#3c3c3c"  autoCorrect={false}></TextInput>
        <TextInput  style={style.input} placeholder="Insira sua senha" placeholderTextColor="#3c3c3c" autoCorrect={false}></TextInput>
        <TouchableOpacity style={style.btnLogar}>
          <Text style={style.textbtn}>Logar</Text>
        </TouchableOpacity>
      </View>

      <View className="conteudo-2" style={style.conteudo2}>
        
        <View style={style.arrowG}>
          <TouchableOpacity style={style.arrow}>
            <Link to={{screen:'Registration'}}>
              <FontAwesome name="long-arrow-up" size={60} color="#3c3c3c"/>
            </Link>
          </TouchableOpacity>
        </View>
        <View className="butonss" style={style.butons}>
          <TouchableOpacity style={style.butons1}>
            <FontAwesome name="long-arrow-up" size={60} color="#3c3c3c"/>
          </TouchableOpacity>

          <TouchableOpacity style={style.butons2}>
            <FontAwesome name="long-arrow-up" size={60} color="#3c3c3c"/>
          </TouchableOpacity>

          <TouchableOpacity style={style.butons3}>
            <FontAwesome name="long-arrow-up" size={60} color="#3c3c3c"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


