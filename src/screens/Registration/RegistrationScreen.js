import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './RegistrationStyle'; 

function RegistrationScreen(){
    return(
        <View style={style.container}>
            <View style={style.containerCircle}>
                <Text>oi</Text>
                <View style={style.circle}><Text>oi</Text></View>
                <TouchableOpacity></TouchableOpacity>
            </View>
        </View>
    )
}

export default RegistrationScreen;