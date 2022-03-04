import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    conteudo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 65,
        marginBottom: '20%',
        color: '#3c3c3c',
    },
    input: {
        backgroundColor: '#f2bc1b',
        width: 280,
        height: 55,
        padding: '2%',
        marginBottom: 45,
        color: '#3c3c3c',
        fontSize: 20,
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3.62,
        elevation: 4,
    },
    btnLogar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 45,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 8,
    },
    textbtn: {
        fontSize: 24,
        color: '#3c3c3c',
    },

    conteudo2: {
        backgroundColor: 'white',
        width: 500,
        height: '32%',
        //borderRadius: 200,
        borderTopEndRadius: Dimensions.get('window').width / 2,
        borderTopStartRadius: Dimensions.get('window').width / 2,
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
        shadowRadius: 5.62,
        elevation: 8,
    },

    arrowG: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        height: 75,
        width: 75,
        borderRadius: 50,
        transform: [
            // Transform the origin down
            { translateY: 0 / 2 },
            // Transform the origin back up
            { translateY: -60 / 2 },
        ],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.23,
        shadowRadius: 5.62,
        elevation: 4,
    },

    arrow: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    butons: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '7%',
    },

    googlee: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2bc1b',
        marginRight: '10%',
        width: 70,
        height: 70,
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
        width: 70,
        height: 70,
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
