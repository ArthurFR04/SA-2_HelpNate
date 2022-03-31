import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        width: '90%',
        height: Dimensions.get('window').height / 1.3,
        alignItems: 'center',
        paddingBottom: '1%',
        marginTop: "5%",
        marginLeft: "auto",
        marginRight: "auto",
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
        width: '90%',
        height: "8%",
        paddingTop: "1%",
        justifyContent: 'center',
        marginLeft: "auto",
        marginRight: "auto",
        borderBottomWidth: 1,
        borderBottomColor: '#3c3c3c'
    },
    tituloP: {
        width: '100%',
        textAlign: 'center',
        fontSize: 25,
        color: '#3c3c3c',
    },
    inputs: {
        width: '100%',
        height: "50%",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5%',
    },
    contentUser: {
        backgroundColor: '#eeee',
        marginTop: '5%',
        width: '85%',
        height: '28%',
        padding: '3%',
        borderRadius: 10,
    },
    textUser: {
        height: "10%",
        marginBottom: 5,
        color: '#3c3c3c'
    },
    fotoUser: {
        height: "85%",
        padding: "3%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    addPicture: {
        width: "50%",
        height: "100%",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginRight: '10%',
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    plus: {
        height: "25%",
        color: '#3c3c3c',
        fontSize: 30
    },
    textAddImage: {
        height: "25%",
        paddingTop: "5%",
        color: '#3c3c3c',
        fontSize: 12
    },
    styleImage: {
        height: "25%",
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
    containerButtons:{
        width: "100%",
        justifyContent: 'space-around',
        flexDirection: 'row',
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
    btnPular:{
        alignItems: "flex-end",
        justifyContent:'center',
        width:100,
        height:35,
        marginTop:'5%',
        marginBottom:'5%',
    },
    btnText:{
        fontSize: 15,
        color: "#A1A1A1" 
    }
})
