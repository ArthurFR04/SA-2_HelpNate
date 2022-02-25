import { StyleSheet } from 'react-native';
import { color, not } from 'react-native-reanimated';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFEF6D'
    },
    conteudo: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    input:{
        backgroundColor:'#f2bc1b',
        width: 250,
        height: 55,
        padding: '2%',
        marginBottom: 45,
        color: '#3c3c3c',
        fontSize: 17,
        borderRadius: 10
    },
    text:{
        fontSize:40,
        marginBottom:'30%',
        color: '#3c3c3c',
    },
    btnLogar:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        width: 150,
        height: 45,
        borderRadius: 10,
    },
    textbtn:{
        fontSize: 22,
        color: '#3c3c3c',
    },

});
