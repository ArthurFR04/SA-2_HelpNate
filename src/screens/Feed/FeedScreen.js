import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions, Button} from 'react-native';
import style from './FeedStyle'; 
import { Link } from '@react-navigation/native';
import { FontAwesome, AntDesign, FontAwesome5, Entypo, MaterialCommunityIcons, Feather, Ionicons  } from '@expo/vector-icons';
import InsetShadow from 'react-native-inset-shadow'

export const FeedScreen = () =>{

    const[active, setActive] = useState(false)
    const[desactive, setDesactive] = useState(true)
    const[arrayValue, setarrayValue] = useState([])

    const teste = [
        {
            nome: "Ismael Teixeira da Silva",
            fotoPerfil : <Image source={require("../../../assets/images/ismaelSilva.jpg")} style={style.userImage}></Image>,
            images:[
                {src: <Image source={require("../../../assets/images/camisetaPreta.jpg")} style={style.imageCarousel}></Image>},
                {src: <Image source={require("../../../assets/images/camisePretaVerso.jpg")} style={style.imageCarousel}></Image>}
            ],
        },
        {
            nome: "Paulo Eduardo Battistella",
            fotoPerfil : <Image source={require("../../../assets/images/BATTISTELLA.jpg")} style={style.userImage}></Image>,
            images:[
                {src: <Image source={require("../../../assets/images/mesaMarmore.png")} style={style.imageCarousel}></Image>},
                {src: <Image source={require("../../../assets/images/mesaDeMarmore2.jpg")} style={style.imageCarousel}></Image>}
            ],
        },
        {
            nome: "Arthur Rodrigues",
            fotoPerfil : <Image source={require("../../../assets/images/ARTHUR.jpg")} style={style.userImage}></Image>,
            images:[
                {src: <Image source={require("../../../assets/images/PS2.png")} style={style.imageCarousel}></Image>},
                {src: <Image source={require("../../../assets/images/PS22.jpg")} style={style.imageCarousel}></Image>}
            ],
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
        return (
            <View style={style.cardPost} key={index}>
                <View style={style.userInfo}>
                    {teste[index].fotoPerfil}
                    <Text style={style.userName}>{teste[index].nome}</Text>
                    <Link to={{screen: "IndividualChat"}} style={style.chatIcon}>
                        <Ionicons name="chatbubble-ellipses" size={32} color="#F2BC1B" />
                    </Link>
                </View>
                <View style={style.postInfo}>
                    <View style={style.carousel}>
                        <TouchableOpacity onPress={() => {
                                if(arrayValue[index] === undefined){
                                    let newArray = [...arrayValue]
                                    newArray[index] = {[`value`]: (teste[index].images.length) - 1}
                                    setarrayValue(newArray)
                                }
                                else{
                                    if(arrayValue[index].value === 0){
                                        let newArray = [...arrayValue]
                                        newArray[index].value = (teste[index].images.length) - 1
                                        setarrayValue(newArray)
                                    }
                                    else{
                                        let newArray = [...arrayValue]
                                        newArray[index].value--
                                        setarrayValue(newArray)
                                    }
                                }
                            }} style={{position: "absolute", zIndex:999, left: 0, height: "100%", width: "50%", justifyContent: "flex-end"}}>
                            <Feather name="arrow-left" size={28} color="black"/>
                        </TouchableOpacity>
                        {arrayValue[index] === undefined ? teste[index].images[0].src : teste[index].images[arrayValue[index].value].src}
                        <TouchableOpacity  onPress={() => {
                                if(arrayValue[index] === undefined){
                                    let newArray = [...arrayValue]
                                    newArray[index] = {[`value`]: 1}
                                    setarrayValue(newArray)
                                }
                                else{
                                    if(arrayValue[index].value === (teste[index].images).length - 1){
                                        let newArray = [...arrayValue]
                                        newArray[index].value = 0
                                        setarrayValue(newArray)
                                    }
                                    else{
                                        let newArray = [...arrayValue]
                                        newArray[index].value++
                                        setarrayValue(newArray)
                                    }
                                }
                            }} style={{position: "absolute", zIndex:999, right: 0, height: "100%", width: "50%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>
                            <Feather name="arrow-right" size={28} color="black" />
                        </TouchableOpacity>
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
            <View style={style.containerPosts}>
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
                { active ? (
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
                <Text style={style.titlePosts}>Postagens</Text>
                {teste.map((Element, index) => {
                    return (CardStructure(index))
                })}
                {/* <TouchableOpacity onPress={e => {
                    let newArray = [...arrayValue]
                    newArray[0] = 999
                    setarrayValue(newArray)}}><Text>CLICA AQUI PRA AUMENTAR A ARRAY PORRA {arrayValue[0]}</Text></TouchableOpacity> */}
            </View>
        </ScrollView>
    )   
}