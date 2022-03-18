import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import style from './FeedStyle'; 
import { Link } from '@react-navigation/native';
import { FontAwesome, AntDesign, FontAwesome5, Entypo, MaterialCommunityIcons, Feather, Ionicons  } from '@expo/vector-icons';
                                                                                                                                {/* aqui havia um  InsetShadow*/}

export const FeedScreen = () =>{

    const[active, setActive] = useState(false)
    const[desactive, setDesactive] = useState(true)
    const arrayValue = []

    let testeSrc  = [
        {
            src: <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.userImage}></Image>
            ,
            postImages:[
                {src: <Image source={require("../../../assets/images/camisetaPreta.jpg")} style={style.imageCarousel}></Image>},
                {src: <Image source={require("../../../assets/images/camisePretaVerso.jpg")} style={style.imageCarousel}></Image>}
            ]
        },
        {
            src: <Image source={require("../../../assets/images/BATTISTELLA.jpg")} style={style.userImage}></Image>,
            postImages:[
                {src: <Image source={require("../../../assets/images/mesaMarmore.png")} style={style.imageCarousel}></Image>},
                {src: <Image source={require("../../../assets/images/mesaDeMarmore2.jpg")} style={style.imageCarousel}></Image>}
            ]
        },
        {
            src: <Image source={require("../../../assets/images/ARTHUR.jpg")} style={style.userImage}></Image>,
            postImages:[
                {src: <Image source={require("../../../assets/images/PS2.png")} style={style.imageCarousel}></Image>},
                {src: <Image source={require("../../../assets/images/PS22.jpg")} style={style.imageCarousel}></Image>}
            ]
        }
    ]

    const teste = [{
        nome: "Ismael Teixeira da Silva",
        fotoPerfil : null,
        images:[]
        },
        {
        nome: "Paulo Eduardo Battistella",
        fotoPerfil : null,
        images:[]
        },
        {
        nome: "Arthur Rodrigues",
        fotoPerfil : null,
        images:[]
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
        teste[index].fotoPerfil = testeSrc[index].src
        const Srcc = []
        testeSrc[index].postImages.map((e, i) => {
            teste[index].images.push(e.src)
            Srcc.push(teste[index].images[i])
        })
        let Src = teste[index].fotoPerfil
        const ImageStructureeee = () => {
            return Src
        }
        const OtherImage = () => {
            return Srcc[arrayValue[index].value]
        }
        return (
            <View style={style.cardPost} key={index}>
                <View style={style.userInfo}>
                    <ImageStructureeee></ImageStructureeee>
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

                        <OtherImage></OtherImage>

                        <Feather name="arrow-right" size={28} color="black" 
                        onPress={() => {
                            if(arrayValue[index].value === ((teste[index].images).length - 1)){
                                arrayValue[index].value = 0
                                console.warn(arrayValue[index].value)
                                console.warn(arrayValue)
                            }
                            else{
                                let newValue = arrayValue[index].value
                                newValue++
                                arrayValue[index].value = newValue
                                console.warn(arrayValue)
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
                                                                                                                                {/* aqui havia um  InsetShadow*/}
                <PrecisoDeAlgo></PrecisoDeAlgo>
            </View>
            ): null}
            { desactive ? (
            <View style={style.containerButtons}>                
                <Doar></Doar>
                                                                                                                                {/* aqui havia um  InsetShadow*/}
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