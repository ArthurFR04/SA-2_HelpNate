import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import style from './Registration2Style';
import { Link } from '@react-navigation/native';

export const Registration2Screen = () =>{
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View style={style.container}>
                <Text>Continue Registration</Text>
            </View>
        </ScrollView>
    )   
}