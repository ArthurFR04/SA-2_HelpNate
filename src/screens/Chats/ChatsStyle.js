import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
    
    
    container:{
        display:'flex',
        flexDirection:'column',

    },
    chatT:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:'8%',
        paddingBottom:'8%',
        borderBottomWidth:1,
    },
    chat:{
        display:'flex',
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
