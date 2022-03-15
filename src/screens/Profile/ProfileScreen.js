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
            </View>
            <View style={styles.perfil}>
            </View>

            


            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
        </View>
    )   
}