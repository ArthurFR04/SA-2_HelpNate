import { StyleSheet, Dimensions, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            android:{
                minHeight: Dimensions.get('window').height,
            },
            ios:{
                height: Dimensions.get('window').height
            }
        }),
    },
    conteudo: {
        height: "75%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 65,
        color: '#3c3c3c',
    },
    input: {
        backgroundColor: '#f2bc1b',
        width: 280,
        height: 55,
        padding: '2%',
        marginTop: 45,
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
    inputs:{
        width: '100%',
        height: "25%",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '5%',
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
        marginTop: "10%"
    },
    textbtn: {
        fontSize: 24,
        color: '#3c3c3c',
    },

    containerCircle:{
        width: "100%",
        height: "25%",
    },
    circle:{
        position: "relative",
        height: "100%",
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: -3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 20,
        ...Platform.select({
            android:{
                borderTopEndRadius: Dimensions.get('window').width / 2.3,
                borderTopStartRadius: Dimensions.get('window').width / 2.3
            },
            ios:{
                borderTopEndRadius: Dimensions.get('window').width / 1.8,
                borderTopStartRadius: Dimensions.get('window').width / 1.8
            }
        })
    },
    circleFormat:{
        position: "relative",
        height: "100%",
        backgroundColor: "#FFF",
        ...Platform.select({
            android:{
                borderTopEndRadius: Dimensions.get('window').width / 2.3,
                borderTopStartRadius: Dimensions.get('window').width / 2.3
            },
            ios:{
                borderTopEndRadius: Dimensions.get('window').width / 1.8,
                borderTopStartRadius: Dimensions.get('window').width / 1.8
            }
        })
    },
    arrow:{
        position: "absolute",
        bottom: "83%",
        left: "50%",
        ...Platform.select({
            android:{
                transform: [{translateX: -Dimensions.get('window').width / 11}],                   
            },
            ios:{
                transform: [{translateX: "-35.5%"}],                   
            }
        }),                                 
        width: 70,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: Dimensions.get('window').width,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 10,
    },
    logoCircle:{
        position: "absolute",
        bottom: "12.5%",
        left: "25%",
        ...Platform.select({
            android:{
                transform: [{translateX: -Dimensions.get('window').width / 4}],                   
            },
            ios:{
                transform: [{translateX: "-95.5%"}],                   
            }
        }),
        width: "100%",
        height: "65%",
        borderRadius: Dimensions.get('window').width / 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    imageLogo:{
        flex: 1,
        resizeMode: 'contain'
    },

    textRegistration:{
        fontSize: 14,
        marginBottom: "2%"
    }

});