import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import styles from './ProfileStyle'; 
import { Link } from '@react-navigation/native';


export const ProfileScreen = () =>{


    return(
        <View style={styles.container}>
            <View style={styles.capa}>
                <Image source={require("../../../assets/images/capa.png")} style={styles.imgCapa}></Image>
                <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={styles.imgFotoPerfil}></Image>
                <View style={styles.userInformation}>
                    <Text name='UserName'>Ismael Silva</Text>
                    <Text>(47)99999-9556</Text>
                </View>
            </View>
            <View style={styles.userDescription}>
                <Text>Florianópolis-SC</Text>
                <Text>ismael.silva@gmail.com</Text>
                <Text>Eu sou um programador e necessito de um pc bala, que nem o Battistella.</Text>
                <View>
                    <Text>Des de: 1999</Text>
                </View>
            </View>
            <View name='DonationsUser' style={styles.donationUser}>
                <View style={styles.donation}>
                    <Text>Doações</Text>
                </View>
                <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={styles.imgFotoPerfil}></Image>
                <Text>Doa-se carro</Text>
                <TouchableOpacity>
                    <Text>Eu quero</Text>
                </TouchableOpacity>
            </View>


        </View>
    )   
}