import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    topPage: {
        backgroundColor: '#fff',
        width: '85%',
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
    },

    tituloP: {
        backgroundColor: '#E5E5E5',
        padding: '2%',
        borderRadius: 8,
        fontSize: 18,

    },

    descrP: {
        top: '10%',
        backgroundColor: '#E5E5E5',
        padding: '2%',
        borderRadius: 8,
        height: '60%',
        fontSize: 18,
        marginTop: 15
    },

    categoria: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 8,
        padding: '3%',
        top: '2%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    fotosGeral: {
        backgroundColor: '#d2d2d2',
        padding: '3%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top: '5%',
        width: '85%',

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
        top: '10%',
        width: '85%',
        padding: '2%',
        paddingBottom: '5%',
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
        top: '15%',
        backgroundColor: '#F2BC1B',
        padding: '5%',
        borderRadius: 20
    },

    Text: {
        fontSize: 18
    }

})
