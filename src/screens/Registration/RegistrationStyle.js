import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        backgroundColor: "#f2f2f2"
    },
    circle:{
        height: "20%",
        backgroundColor: "#FFEF6D",
        borderBottomRightRadius: (Dimensions.get('window').width + (Dimensions.get('window').width * 5)),
        borderBottomLeftRadius: (Dimensions.get('window').width + (Dimensions.get('window').width * 5)),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    }
})