import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1
    },
    containerCircle:{
        height: "30%",
        paddingBottom: 35
    },
    circle:{
        position: "relative",
        height: "100%",
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 20,
        ...Platform.select({
            android:{
                borderBottomEndRadius: Dimensions.get('window').width / 2.6,
                borderBottomStartRadius: Dimensions.get('window').width / 2.6
            },
            ios:{
                borderBottomEndRadius: Dimensions.get('window').width / 2,
                borderBottomStartRadius: Dimensions.get('window').width / 2
            }
        })
    },
    circleFormat:{
        position: "relative",
        height: "100%",
        backgroundColor: "#F2BC1B",
        ...Platform.select({
            android:{
                borderBottomEndRadius: Dimensions.get('window').width / 2.6,
                borderBottomStartRadius: Dimensions.get('window').width / 2.6
            },
            ios:{
                borderBottomEndRadius: Dimensions.get('window').width / 2,
                borderBottomStartRadius: Dimensions.get('window').width / 2
            }
        })
    },
    arrow:{
        position: "absolute",
        top: "83%",
        left: "50%",
        transform: [{translateX: "-37.5%"}],
        width: 70,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2BC1B",
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
        top: "7.5%",
        left: "25%",
        transform: [{translateX: "-106.5%"}],
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
    content:{
        height: "70%",
        display: "flex",
        alignItems: "center",
    },
    title:{
        fontSize: 42,
        fontWeight: "700",
        color: "#3C3C3C",
    },
    containerInput:{
        width: "100%",
        height: "75%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    button:{
        width: "60%",
        height: "8%",
        backgroundColor: "#F2BC1B",
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#FFEF6D"
    },
    textButton:{
        fontSize: 23,
        fontWeight: "700",
        color: "#F2F2F2",
    },
    textRegistration:{
        fontSize: 14,
        color: "#f9f9f9",
        fontWeight: "bold",
        marginTop: "4%"
    }
})