import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import style from './ChatsStyle'; 
import { Link } from '@react-navigation/native';

export const AllChatsScreen = () =>{
    return(
        <View style={style.container}>
            <Text>All Chats Screen</Text>

            <Link to={{ screen: 'IndividualChat' }}>IndividualChat</Link>
        </View>
    )   
}