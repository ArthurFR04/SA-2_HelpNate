import React from 'react';
import {View, Text} from 'react-native';
import style from './RegistrationStyle'; 
import { Link } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export const RegistrationScreen = () =>{
    return(
        <View style={style.container}>
            <View style={style.circle}>
                <View style={style.containerCircle}></View>
                <View style={style.logoCircle}>
                    <Link to={{ screen: 'Login'}}>
                        LOGIN
                    </Link>
                </View>
                <View style={style.arrow}>
                    <FontAwesome name="long-arrow-down" size={36} color="#F2F2F2" />
                </View>   
            </View>
        </View>
    )   
}