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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#f2bc1b',
        width: 250,
        height: 55,
        padding: '2%',
        marginBottom: 45,
        color: '#3c3c3c',
        fontSize: 17,
        borderRadius: 10
    },
    text: {
        fontSize: 40,
        marginBottom: '30%',
        color: '#3c3c3c',
    },
    btnLogar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 45,
        borderRadius: 10,
    },
    textbtn: {
        fontSize: 22,
        color: '#3c3c3c',
    },

    conteudo2: {
        backgroundColor: 'white',
        width: 500,
        height: '35%',
        borderRadius: 200,
        transform: [
            // Transform the origin down
            { translateY: 200 / 2 },
            // Transform the origin back up
            { translateY: -100 / 2 },
        ],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 8,
    },

    arrowG: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        height: 100,
        width: '20%',
        borderRadius: 50,
        transform: [
            // Transform the origin down
            { translateY: 0 / 2 },
            // Transform the origin back up
            { translateY: -100 / 2 },
        ],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

    arrow: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    butons: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '3%',
    },

    googlee: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2bc1b',
        marginRight: '5%',
        width: 80,
        height: 80,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

    facebookk: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2bc1b',
        width: 80,
        height: 80,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

});
