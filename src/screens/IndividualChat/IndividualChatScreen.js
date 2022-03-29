import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import style from './IndividualChatStyle';
import { Link } from '@react-navigation/native';

export const IndividualChatScreen = () => {
    return (
        <View style={style.container}>
            <ScrollView style={style.scrollview}>
                <View className="chatDestinatario" style={style.destinatario}>
                    <Text style={style.text}>Olá boa tarde, estou aqui para perguntar se aquele foquete ainda esta para doação? E gostaria de ver algumas imagens dele para ver se está tudo certo.</Text>
                </View>
                <View className="chatDonativo" style={style.donativo}>
                    <Text style={style.text}>Olá já irei te passar as fotos, estou doando o foguete pois nao tenho mais utilidade para ele e sei que alguem vai ter!</Text>
                </View>
                <View className="chatDonativo" style={style.donativo}>
                    <Text style={style.text}>Estou te passando as imagens agora para você ver, segue em anexo:</Text>
                </View>
                <View  className="chatDonativo" style={style.donativoIMG}>
                    <Image style={style.image} source={require("../../../assets/images/fogueteSpaceX.jpg")}></Image>
                </View>
                <View className="chatDonativo" style={style.donativoIMG}>
                    <Image style={style.image} source={require("../../../assets/images/fogueteSpaceX1.jpg")}></Image>
                </View>
                <View className="chatDestinatario" style={style.destinatario}>
                    <Text style={style.text}>Nossa gostei muito desse foguete gostaria de marcar o local onde posso pega-lo!</Text>
                </View>
                <View className="chatDestinatario" style={style.destinatario}>
                    <Text style={style.text}>Qual o tamanho dele, é de brinquedo né?</Text>
                </View>
                <View className="chatDonativo" style={style.donativo}>
                    <Text style={style.text}>Tenho um foguete de verdade mas posso lhe entregar um de brinquedo! O de verdade nao teria onde você deixar então estou apenas doando o de brinquedo</Text>
                </View>
            </ScrollView>
        </View>
    )
}