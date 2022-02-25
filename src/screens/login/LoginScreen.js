import React from 'react'
import { View, TextInput, Text, Button} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from './loginstyle'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Link } from '@react-navigation/native';

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

      {/*<Link to={{ screen: 'Registration'}}>
          Dale pro Registrozinho
      </Link>*/}
 
      <View className="conteudo-2">

        <TouchableOpacity>
          <Text>Arrow</Text>
        </TouchableOpacity>

        <Button title="Instagram"/>
        <Button title="GitHub"/>
        <Button title="Facebook"/>

      </View>
    </View>
  );
}


