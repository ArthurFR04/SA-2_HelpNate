import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import style from './IndividualPostStyle'; 
import { Link } from '@react-navigation/native';
import { FontAwesome, AntDesign, FontAwesome5, Entypo, MaterialCommunityIcons, Feather, Ionicons  } from '@expo/vector-icons';


export const IndividualPostScreen = () =>{

    const[value, setValue] = useState(0);

    const Objectt = {
        nome: "Ismael Teixeira da Silva",
        fotoPerfil : <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.userImage}></Image>,
        images:[
            {src: <Image source={require("../../../assets/images/camisetaPreta.jpg")} style={style.imageCarousel}></Image>},
            {src: <Image source={require("../../../assets/images/camisePretaVerso.jpg")} style={style.imageCarousel}></Image>}
        ],
    }

    function Back(){
        if(value === 0){
            let newValue = (Objectt.images.length) - 1
            setValue(newValue)            
        }
        else{
            let newValue =  value
            newValue--
            setValue(newValue)
        }
    }

    function Next(){
        if(value === (Objectt.images.length) - 1){
            setValue(0)            
        }
        else{
            let newValue =  value
            newValue++
            setValue(newValue)
        }
    }

    return(
        <ScrollView ontentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
            <View style={style.containerPost}>
                <View style={style.mainContent}>
                    <Text style={style.title}>Doa-se camiseta preta(pouco usada)</Text>
                    <View style={style.carousel}>
                        <TouchableOpacity style={style.buttonLeft} onPress={() => Back()}>
                            <Feather name="arrow-left" size={28} color="black"/>
                        </TouchableOpacity>
                        {Objectt.images[value].src}
                        <TouchableOpacity style={style.buttonRight} onPress={() => Next()}>
                            <Feather name="arrow-right" size={28} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.textButton}>Eu quero</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.infoPost}> 
                    <View style={style.descriptionContainer}>
                        <View style={style.descriptionHeader}>
                            <Text style={style.descriptionTitle}>Descrição</Text>
                            <Text>10/02  17:00  /  Florianópolis</Text>
                        </View>
                        <View style={style.descriptionText}>
                            <Text style={style.paragraph}>COMPREI ESTA CAMISETA, POREM NAO GOSTEI MUITO, PORTANTO NÃO USEI, POR ISSO ESTOU DOANDO-A</Text>
                        </View>
                    </View>
                    <View style={style.donator}>
                        <Image style={style.profileImage} source={require("../../../assets/images/BATTISTELLA.jpg")}></Image>
                        <Text style={style.userName}>Paulo Battistella</Text>
                        <Link to={{screen: "IndividualChat"}}>
                            <Ionicons name="chatbubble-ellipses" size={50} color="#F2BC1B" />
                        </Link>
                    </View>
                    <View style={style.localInfo}>
                        <Text style={style.textLocal}>CEP: <Text style={{fontWeight: "normal", fontSize: 20}}>88052567</Text></Text>
                        <Text style={style.textLocal}>Cidade: <Text style={{fontWeight: "normal", fontSize: 20}}>Florianópolis</Text></Text>
                        <Text style={[style.textLocal,{marginTop: 10}]}>Bairro: <Text style={{fontWeight: "normal", fontSize: 20}}>Itacorubi</Text></Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )   
}
