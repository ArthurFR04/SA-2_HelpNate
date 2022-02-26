import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        width: "100%",
        height: Dimensions.get('window').height / 4,
        backgroundColor: "#f2f2f2"
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
        elevation: 3,
        borderBottomEndRadius: Dimensions.get('window').width / 2,
        borderBottomStartRadius: Dimensions.get('window').width / 2
    },
    containerCircle:{
        position: "relative",
        height: "100%",
        backgroundColor: "#F2BC1B",
        borderBottomEndRadius: Dimensions.get('window').width / 2,
        borderBottomStartRadius: Dimensions.get('window').width / 2,
    },
    arrow:{
        position: "absolute",
        top: "85%",
        left: "50%",
        transform: [{translateX: - (Dimensions.get('window').width) / 10}],
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
        elevation: 3,
    },
    logoCircle:{
        position: "absolute",
        top: "7.5%",
        left: "29%",
        width: "40%",
        height: "70%",
        backgroundColor: "#CCBC3B",
        borderRadius: Dimensions.get('window').width / 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})