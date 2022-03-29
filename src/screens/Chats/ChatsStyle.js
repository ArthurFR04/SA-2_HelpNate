import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({


    container:{
        flex: 1,
        display:'flex',
        flexDirection:'column',

    },
    scrollview: {
        width:'auto',       
    },
    chatT:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        width: '100%',
        marginTop:'8%',
        paddingBottom:'8%',
        borderBottomWidth:1,
    },
    chat:{
        display:'flex',
        width: '75%',
    },
    imgChat:{
        display:'flex',
        height:80,
        width:80,
        borderRadius:50,
        marginRight:'5%',
        marginLeft:'5%'        
    },
    imgChatView:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:85,
        width:85,
        borderRadius:50,
        marginRight:'5%',
        marginLeft:'5%',
        backgroundColor:'#F2BC1B'
    },
    tituloMSG:{
        display:'flex',
        fontSize:18,
        color:'#000',
        maxWidth:'85%'

    },
    mensagemE:{
        display:'flex',
        fontSize:16,
        marginTop:'4%',
        color:'#6e6e6e',
        maxWidth:'85%'
    },
    status:{
        display:'flex',
        marginLeft: '60%',
        marginTop:'3%',
    },
}) 