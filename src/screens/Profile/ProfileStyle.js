import { StyleSheet, Dimensions, Platform } from "react-native";

let dimensoes = Dimensions.get('window')
let proporciones = (dimensoes.height/dimensoes.width)

// console.log(dimensoes.width/2.5);
// console.log(dimensoes.height/4.884259255);

export default StyleSheet.create({
    container:{
        flex: 1

    },

    capa:{
        height: dimensoes.height/4.5
    },

    imgCapa:{
        width: dimensoes.width, 
        height: dimensoes.height/4.5
    },

    imgFotoPerfil: {
        width: dimensoes.width/3,
        height: dimensoes.width/3,
        borderRadius: (dimensoes.width/3)/2,
        position: 'absolute',
        top: dimensoes.height/7.5,
        left: dimensoes.width/20
    }
})