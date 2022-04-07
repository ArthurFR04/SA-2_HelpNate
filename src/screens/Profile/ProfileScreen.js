import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import styles from './ProfileStyle'; 
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export const ProfileScreen = () =>{

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.capa}>
                <Image source={require("../../../assets/images/capa2.jpg")} style={styles.imgCapa}></Image>
                <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={styles.imgFotoPerfil}></Image>
                <View style={styles.userInformation}>
                    <Text name='UserName'style={styles.UserName}>Ismael Silva</Text>
                    <Text>(47)99999-9556</Text>
                </View>
            </View>
            <View style={styles.userDescription}>
                <Text style={styles.font_20}>Florianópolis-SC</Text>
                <Text style={styles.UserInfos}>ismael.silva@gmail.com</Text>
                <Text style={styles.UserInfos}>Eu sou um programador e necessito de um pc bala, que nem o Battistella.</Text>
                <View>
                    <Text style={styles.UserDate}>Des de: 1999</Text>
                </View>
            </View>
            <View style={styles.UserOptions}>

            
                    <TouchableOpacity style={styles.botoes} onPress={() => navigation.navigate('AllChats')}>
                        <Text style={styles.botoes_text}>Conversas</Text>
                    </TouchableOpacity>
              

             
                    <TouchableOpacity style={styles.botoes} onPress={() => navigation.navigate('Registration2')}>
                        <Text style={styles.botoes_text}>Editar Perfil</Text>
                    </TouchableOpacity>
             
                
            </View>

            <Link to={{ screen: 'Registration' }}>Cadastro</Link>
            <Link to={{ screen: 'Login' }}>Login</Link>
            <Link to={{ screen: 'IndividualPost' }}>Post Individual</Link>



        </View>
    )   
}