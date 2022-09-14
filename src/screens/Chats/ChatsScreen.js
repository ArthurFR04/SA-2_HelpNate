import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import style from './ChatsStyle'; 
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export const AllChatsScreen = () =>{

    const navigation = useNavigation();

    return(
        <View style={style.container}>
            <ScrollView style={style.scrollview}>
            <TouchableOpacity style={style.chatT} onPress={() => navigation.navigate('IndividualChat')}>
                <View style={style.imgChatView}>
                    <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.imgChat}></Image>
                </View>
                <View style={style.chat} >
                    <Text style={style.tituloMSG}>Doa-se foguete (nunca usado)dsa dasd asd saasd asd </Text>
                    <Text style={style.mensagemE}>Elon Musk: Olá estou doando eu sou po chgaves e esto uaqui para te matar vou comer voce e depois te vomitar...</Text>
                    <Text style={style.status}>Hoje</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.chatT} onPress={() => navigation.navigate('IndividualChat')}>
                <View style={style.imgChatView}>
                    <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.imgChat}></Image>
                </View>
                <View style={style.chat} >
                    <Text style={style.tituloMSG}>Doa-se foguete (nunca usado)porem ja usa do vai entender? </Text>
                    <Text style={style.mensagemE}>Elon Musk: Olá estou doando...</Text>
                    <Text style={style.status}>Hoje</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.chatT} onPress={() => navigation.navigate('IndividualChat')}>
                <View style={style.imgChatView}>
                    <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.imgChat}></Image>
                </View>
                <View style={style.chat} >
                    <Text style={style.tituloMSG}>Doa-se foguete (nunca usado)</Text>
                    <Text style={style.mensagemE}>Elon Musk: Olá estou doando...</Text>
                    <Text style={style.status}>Hoje</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.chatT} onPress={() => navigation.navigate('IndividualChat')}>
                <View style={style.imgChatView}>
                    <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.imgChat}></Image>
                </View>
                <View style={style.chat} >
                    <Text style={style.tituloMSG}>Doa-se foguete (nunca usado)</Text>
                    <Text style={style.mensagemE}>Elon Musk: Olá estou doando...</Text>
                    <Text style={style.status}>Hoje</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.chatT} onPress={() => navigation.navigate('IndividualChat')}>
                <View style={style.imgChatView}>
                    <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.imgChat}></Image>
                </View>
                <View style={style.chat} >
                    <Text style={style.tituloMSG}>Doa-se foguete (nunca usado)</Text>
                    <Text style={style.mensagemE}>Elon Musk: Olá estou doando...</Text>
                    <Text style={style.status}>Hoje</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.chatT}>
                <View style={style.imgChatView}>
                    <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.imgChat}></Image>
                </View>
                <View style={style.chat} >
                    <Text style={style.tituloMSG}>Doa-se foguete (nunca usado)</Text>
                    <Text style={style.mensagemE}>Elon Musk: Olá estou doando dashgfd aisydg aifuug asfui ggasf uhas gaouihsdg oue aoashf slfda asidl iafsj oijfd sa...</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.chatT}>
                <View style={style.imgChatView}>
                    <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.imgChat}></Image>
                </View>
                <View style={style.chat} >
                    <Text style={style.tituloMSG}>Doa-se foguete (nunca usado)</Text>
                    <Text style={style.mensagemE}>Elon Musk: Olá estou doando...</Text>
                    <Text style={style.status}>Hoje</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.chatT}>
                <View style={style.imgChatView}>
                    <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.imgChat}></Image>
                </View>
                <View style={style.chat} >
                    <Text style={style.tituloMSG}>Doa-se foguete (nunca usado)</Text>
                    <Text style={style.mensagemE}>Elon Musk: Olá estou doando...</Text>
                    <Text style={style.status}>Hoje</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )   
}
