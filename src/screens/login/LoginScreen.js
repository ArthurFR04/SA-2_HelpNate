import React from 'react'
import { View, TextInput, Text, Button} from "react-native";
<<<<<<< HEAD
import style from './Loginstyle'
=======
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from './loginstyle'

import Ionicons from 'react-native-vector-icons/Ionicons';

>>>>>>> b21132c410e63e4011a7c337d229eb5ac4599435
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
<<<<<<< HEAD
      <Link to={{ screen: 'Registration'}}>
          Dale pro Registrozinho
      </Link>
=======

      {/*<Link to={{ screen: 'Registration'}}>
          Dale pro Registrozinho
      </Link>*/}
 
>>>>>>> b21132c410e63e4011a7c337d229eb5ac4599435
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


