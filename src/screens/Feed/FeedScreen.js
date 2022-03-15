import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import style from './FeedStyle'; 
import { Link } from '@react-navigation/native';
import { FontAwesome, AntDesign, FontAwesome5, Entypo, MaterialCommunityIcons, Feather, Ionicons  } from '@expo/vector-icons';
import InsetShadow from 'react-native-inset-shadow'

export const FeedScreen = () =>{

    const[active, setActive] = useState(false)
    const[desactive, setDesactive] = useState(true)
    // const[arrayValue, setArrayValue] = useState([])
    const arrayValue = []

    const teste = [{
        nome: "Ismael Teixeira da Silva",
        fotoPerfil : require("../../../assets/images/ismaelSilva.jpg"),
        images:[
            {src: require("../../../assets/images/camisetaPreta.jpg")},
            {src: require("../../../assets/images/camisePretaVerso.jpg")}
        ]
        },
        {
        nome: "Paulo Eduardo Battistella",
        fotoPerfil : require("../../../assets/images/BATTISTELLA.jpg"),
        images:[
            {src: require("../../../assets/images/mesaMarmore.png")},
            {src: require("../../../assets/images/mesaDeMarmore2.jpg")}
        ]
        },
        {
        nome: "Arthur Rodrigues",
        fotoPerfil : require("../../../assets/images/ARTHUR.jpg"),
        images:[
            {src: require("../../../assets/images/PS2.png")},
            {src: require("../../../assets/images/PS22.jpg")}
        ]
        }   
    ]

    const Doar = () => {
        return <TouchableOpacity style={[style.button, {borderRightWidth: 1} , active == true ? {width: "100%"} : {width: "50%"}]}
                onPress={() => { if(active === false){setActive(!active, setDesactive(!desactive))}}}>
                    <Text style={style.textButton}>Quero doar</Text>
                </TouchableOpacity>
    }

    const PrecisoDeAlgo = () => {
        return <TouchableOpacity style={[style.button, {borderLeftWidth: 1} ,desactive == true ? {width: "100%"} : {width: "50%"}]} 
                onPress={() => { if(active === true ){setActive(!active, setDesactive(!desactive))}}}>
                    <Text style={style.textButton}>Preciso de algo</Text>
                </TouchableOpacity>
    }

    const CardStructure = (index) => {
        return (<View style={style.cardPost}>
                    <View style={style.userInfo}>
                        <Image source={teste[index].fotoPerfil} style={style.userImage}></Image>
                        <Text style={style.userName}>{teste[index].nome}</Text>
                        <Link to={{screen: "IndividualChat"}} style={style.chatIcon}>
                            <Ionicons name="chatbubble-ellipses" size={32} color="#F2BC1B" />
                        </Link>
                    </View>
                    <View style={style.postInfo}>
                        <View style={style.carousel}>
                            <Feather name="arrow-left" size={28} color="black"
                            onPress={() => {
                                if(arrayValue[index].value === 0){
                                    let length = (teste[index].images).length
                                    length--
                                    arrayValue[index].value = length
                                }
                                else{
                                    let newValue = arrayValue[index].value
                                    newValue--
                                    arrayValue[index].value = newValue
                                }
                            }} />
                            <Image source={teste[index].images[arrayValue[index].value].src} style={style.imageCarousel}></Image>
                            <Feather name="arrow-right" size={28} color="black" 
                            onPress={() => {
                                console.warn("2src: " + teste.map(t => t.images[0].src))
                                if(arrayValue[index].value === ((teste[index].images).length - 1)){arrayValue[index].value = 0
                                    // console.warn(arrayValue[index].value);
                                    let posicao = arrayValue[index].value
                                    // console.warn("LET POSICAO: " + posicao);
                                    
                                    // console.warn("src: " + teste[index].images[posicao].src  );
                                    
                                    
                                }
                                else{
                                    let newValue = arrayValue[index].value
                                    newValue++
                                    arrayValue[index].value = newValue
                                    console.warn(arrayValue[index].value);
                                }
                            }} 
                            />
                        </View>
                        <View style={style.optionsPost}>
                            <Text style={style.postDescription}>Doa-se mesa de mármore(em bom estado)</Text>
                            <TouchableOpacity style={style.postButton}>
                                <Text style={style.textPostButton}>Eu quero!</Text>
                            </TouchableOpacity>
                            <Text style={style.postDate}>09/03 17:10  /  Florianópolis</Text>
                        </View>
                    </View>
                </View>
        )
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <View style={style.containerFilter}>
                <ScrollView contentContainerStyle={{height: "100%"}}  horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={style.filter}>
                        <FontAwesome name="cutlery" style={style.filterIcon} size={20} />
                        <Text style={style.filterText}>Utensílios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.filter}>
                    <FontAwesome name="home" style={style.filterIcon} size={24} />
                        <Text style={style.filterText}>Casa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.filter}>
                        <MaterialCommunityIcons name="hanger" style={style.filterIcon} size={26} />
                        <Text style={style.filterText}>Roupas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.filter}>
                        <FontAwesome name="mobile-phone" style={style.filterIcon} size={28}  />
                        <Text style={style.filterText}>Eletrônicos</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            { 
            active ? (
            <View style={style.containerButtons}>   
                <InsetShadow containerStyle={{width: "50%"}} shadowRadius={4} right={false} left={false} bottom={false}>
                    <Doar></Doar>
                </InsetShadow>
                <PrecisoDeAlgo></PrecisoDeAlgo>
            </View>
            ): null}
            { desactive ? (
            <View style={style.containerButtons}>                
                <Doar></Doar>
                <InsetShadow containerStyle={{width: "50%"}} shadowRadius={4} right={false} left={false} bottom={false}>
                    <PrecisoDeAlgo></PrecisoDeAlgo>
                </InsetShadow>
            </View>
            ): null}
            <View style={style.containerPosts}>
                <Text style={style.titlePosts}>Postagens</Text>
                {teste.map((Element, index) => {
                    let value = {[`value`]: 0}
                    arrayValue.push(value)
                    return (CardStructure(index))
                })}
            </View>
        </ScrollView>
    )   
}