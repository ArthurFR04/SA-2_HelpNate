import { Dimensions, StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({

    container: {
        marginTop: "5%",
        marginBottom: "10%",
        padding: "2%",
        borderRadius: Dimensions.get('window').width / 20,
        flex: 1,
        ...Platform.select({
            android:{
                minHeight: Dimensions.get('window').height,
            },
            ios:{
                height: Dimensions.get('window').height /1.1
            }
        }),
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#fff"
    },

    topPage: {
        width: '100%',
        height: '35%',
        borderRadius: 15,
        padding: '3%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems: "center",
        justifyContent: 'space-around'
    },

    tituloP: {
        backgroundColor: '#E5E5E5',
        padding: '2%',
        borderRadius: 8,
        fontSize: 18,
    },

    descrP: {
        top: '5%',
        backgroundColor: '#E5E5E5',
        padding: '2%',
        borderRadius: 8,
        height: '60%',
        fontSize: 18,
        marginTop: 15
    },

    categoria: {
        width: '100%',
        height: "20%",
        alignItems: "center",
    },

    categorias:{
        paddingTop: "5%",
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderTopColor: "#3c3c3c"
    },

    titleCategory:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
        width: "75%",
        marginBottom: '1%'
    },

    fotosGeral: {
        width: '100%%',
        height: '25%',
        backgroundColor: '#d2d2d2',
        padding: '3%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },

    textCategory:{
        fontSize: 22,
        fontWeight: "400",
        textAlign: "center"
    },

    buttonCategoria:{
        margin: 5
    },

    fotos: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },

    quadrofoto: {
        borderStyle: 'dotted',
        borderWidth: 2,
        height: 125,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 7
    },

    thumbnail: {
        alignSelf: 'center',
        height: 120,
        width: 195,
    },

    locate: {
        backgroundColor: '#fff',
        marginTop: '5%',
        marginBottom: '5%',
        width: '90%',
        marginLeft: "auto",
        marginRight: "auto",
        height: "10%",
        padding: '2%',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    locateText: {
        fontSize: 18
    },

    cep: {
        fontSize: 18,
        width: '95%',
        backgroundColor: '#e5e5e5',
        padding: '3%',
        borderRadius: 10,
        top: '10%',
    },

    btnSend: {
        width: "65%",
        height: "5%",
        marginTop: "10%",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F2BC1B',
        borderRadius: 20
    },

    Text: {
        fontSize: 18
    }

})
