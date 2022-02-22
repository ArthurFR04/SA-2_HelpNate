import React from 'react'
import { View, TextInput, Text, Button} from "react-native";
import style from './loginstyle'

import { Link } from '@react-navigation/native';

export default function App() {
  return (
    <View className="container" style={style.container}>
      <View className="conteudo" style={style.conteudo}>
        <Text className="text">Login</Text>
        <TextInput placeholder="Insira seu nome" ></TextInput>
        <TextInput placeholder="Insira sua senha"></TextInput>
        <Button title="Logar"/>
      </View>

      <Link to={{ screen: 'Registration'}}>
          Dale pro Registrozinho
      </Link>

      <View className="conteudo-2">
        <Button title="Arrow"/>
        <Button title="Instagram"/>
        <Button title="GitHub"/>
        <Button title="Facebook"/>

      </View>
    </View>
  );
}


