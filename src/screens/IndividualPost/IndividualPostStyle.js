import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
    containerPost:{
        flex: 1
    },
    mainContent:{
        width: "95%",
        height: Dimensions.get('window').height / 1.5,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:  "center",
        borderRadius: Dimensions.get('window').width / 25,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 20,
    },
    title:{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 28
    },
    carousel:{
        height: "70%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    imageCarousel:{
        width: "65%",
        height: "65%"
    },
    buttonLeft:{
        width: "15%",
        height: "65%",
        justifyContent: "flex-end"
    },
    buttonRight:{
        width: "15%",
        height: "65%",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    button:{
        width: "50%",
        padding: "4.5%",
        backgroundColor: "#F2BC1B",
        borderRadius: Dimensions.get('window').width / 45
    },
    textButton:{
        textAlign: "center",
        fontSize: 25
    },
    infoPost:{
        width: "95%",
        height: Dimensions.get('window').height / 2,
        padding: "5%",
        marginTop: 15,
        marginBottom: 20,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        flexDirection: "column",
        borderRadius: Dimensions.get('window').width / 25,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 20,
    },
    descriptionContainer:{
        height: "50%",
        borderColor: "#3C3C3C",
        borderBottomWidth: 1
    },
    descriptionHeader:{
        width: "100%",
        height: "25%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    descriptionTitle:{
        fontWeight: "bold",
        fontSize: 24
    },
    descriptionText:{
        width: "80%",
        height: "75%",
        paddingBottom: "5%",
        justifyContent: "center"
    },
    paragraph:{
        fontSize: 16
    },
    donator:{
        height: "30%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#3C3C3C",
        borderBottomWidth: 1
    },
    profileImage:{
        width: "25%",
        height: "75%",
        borderRadius: Dimensions.get('window').width
    },
    userName:{
        width: "50%",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: "auto",
        marginRight: "auto"
    },
    localInfo:{
        width: "100%",
        height: "20%", 
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },
    textLocal:{
        minWidth: "50%",
        marginTop: "10%",
        fontSize: 18,
        fontWeight: "bold"
    }

})
