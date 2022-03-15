import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    tituloContent: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        padding: '4%',
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#3c3c3c'
    },
    tituloP: {
        fontSize: 25,
        color: '#3c3c3c',
    },
    inputs: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: '5%',
        width: '85%',
    },
    textInput: {
        borderRadius: 8,
        padding: '3%',
        marginTop: '4%',
        backgroundColor: '#eeee'
    },
    descInput: {
        borderRadius: 8,
        padding: '3%',
        marginTop: '4%',
        marginBottom: '10%',
        height: 120,
        backgroundColor: '#eeee',
    },
    contentUser: {
        backgroundColor: '#eeee',
        display: 'flex',
        alignSelf: 'center',
        width: '85%',
        padding: '3%',
        borderRadius: 10,
    },
    textUser: {
        marginBottom: 5,
        color: '#3c3c3c'
    },
    fotoUser: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    addPicture: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '10%',
        padding: '6%',
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    plus: {
        color: '#3c3c3c',
        fontSize: 30
    },
    textAddImage: {
        color: '#3c3c3c',
        fontSize: 12
    },
    styleImage: {
        color: '#3c3c3c',
        fontSize: 8
    },
    imgUser: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2BC1B',
        width: 90,
        height: 90,
        borderRadius: 50
    },
    arrow: {
        backgroundColor: '#000',
        width: 20,
        height: 20,
        borderRadius: 50,
        transform: [
            { translateY: 50 / 2 },
            { translateY: 0 / 2 },

            { translateX: 50 / 2 },
        ],
    },
    btnFinalizar:{
        display:'flex',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:'#F2BC1B',
        width:100,
        height:35,
        marginTop:'5%',
        marginBottom:'5%',
        borderRadius:6
        
    },
    btnText:{

    }


})
