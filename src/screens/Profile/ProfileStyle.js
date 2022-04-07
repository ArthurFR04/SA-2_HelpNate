import { StyleSheet, Dimensions, Platform } from "react-native";

let dimensoes = Dimensions.get('window')
let proporciones = (dimensoes.height/dimensoes.width)

// console.log(dimensoes.width/2.5);
// console.log(dimensoes.height/4.884259255);

export default StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: "#EFEFEF"
    },

    capa:{
        height: dimensoes.height/4.5
    },

    imgCapa:{
        width: dimensoes.width, 
        height: dimensoes.height/5
    },

    imgFotoPerfil: {
        width: dimensoes.width/3.7,
        height: dimensoes.width/3.7,
        borderRadius: (dimensoes.width/3)/2,
        position: 'absolute',
        top: dimensoes.height/7.5,
        left: dimensoes.width/20
    },
    userInformation: {
        display:'flex',
        alignItems:'flex-start',
        width:'50%',
        marginLeft:'40%',
        padding:'2%',
        position:'absolute',
        top: dimensoes.height/5.15,
        right: dimensoes.width/10


        // backgroundColor:'#3c3c3c'
    },

    UserName: {
        fontWeight: "bold",
        fontSize: 25,

    },

    userDescription: {
        display:'flex',
        marginLeft:'5%',
        marginTop:'12%',
        
    },

    UserInfos: {
        marginTop: 7,
        fontSize: 20
    },

    UserDate: {
        fontSize: 20,
        marginLeft: "60%",
        marginTop: "5%"
    },

    font_20: {
        fontSize: 20
    },

    UserOptions: {
        alignItems: "center",
        marginTop: "40%"
    },

    botoes: {
        backgroundColor: "#f2bc1b",
        marginTop: "10%",
        width: dimensoes.width*0.9,
        height: dimensoes.height*0.05,
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3.62,
        elevation: 4,

        justifyContent: "center",
        alignItems: "center",
        
    },

    botoes_text: {
        fontSize: 20,
        color: "#000",
    },
})