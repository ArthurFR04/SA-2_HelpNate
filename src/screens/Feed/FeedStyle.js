import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
    containerFilter:{
        height: 65,
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#C3C3C3"
    },
    filter:{
        minHeight: "70%",
        maxHeight: "70%",
        padding: 10,
        marginRight: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: Dimensions.get('window').width / 2,
        borderWidth: 1,
        borderColor: "#C4C4C4"
    },
    filterIcon:{
        height: "100%",
        color: "#000",
        marginLeft: 2,
        marginRight: 6
    },
    filterText:{
        fontSize: 18
    },
    containerButtons:{
        height: 55,
        marginBottom: 10,
        flexDirection: "row",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3},
        shadowRadius: 4,
        shadowOpacity: 0.4,
        elevation: 3
    },
    button:{
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: "#989898"
    },
    textButton:{
        fontSize: 18
    },
    containerPosts:{
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    titlePosts:{
        fontSize: 36,
        fontWeight: "600",
        paddingLeft: "7.5%",
        marginBottom: "2%"
    },
    cardPost:{
        width: "95%",
        height: 200,
        padding: 10,
        marginBottom: "7%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#fff",
        borderRadius: Dimensions.get('window').width / 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 6},
        shadowRadius: 4,
        shadowOpacity: 0.5,
        elevation: 3
    },
    userInfo:{
        width: "90%",
        height: "25%",
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#c3c3c3"
    },
    chatIcon:{
        marginLeft: "auto"
    },
    userName:{
        fontSize: 18,
        fontWeight: "500"
    },
    userImage:{
        width: 40, 
        height: 40, 
        marginRight: 8, 
        borderRadius: Dimensions.get('window').width / 2
    },
    postInfo:{
        height: "75%",
        flexDirection: "row"
    },
    carousel:{
        position: "relative",
        width: "45%",
        height: "100%",
        paddingBottom: 3,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    imageCarousel:{
        position: "absolute",
        zIndex: -2,
        left: "15%",
        width: "70%",
        height: "90%",
        alignSelf: "center",
    },
    optionsPost:{
        width: "55%",
        height: "100%"     
    },
    postDescription:{
        height: "50%",
        fontSize: 18,
        fontWeight: "500",
    },
    postButton:{
        width: "40%",
        height: "30%",
        marginLeft: "60%",
        justifyContent: "center",
        alignItems: "center",        
        backgroundColor: "#F2BC1B",
        borderRadius: 10,
    },
    postDate:{
        marginTop: "auto",
        marginLeft: "auto",
        fontSize: 12
    }
})