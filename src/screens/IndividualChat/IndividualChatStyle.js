import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5'
    },
    destinatario: {
        backgroundColor: '#fff',
        maxWidth: '65%',
        marginTop: '2%',
        marginBottom: '2%',
        padding: '2.2%',
        marginLeft: '2%',
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 3

    },
    donativo: {
        backgroundColor: '#FFF395',
        maxWidth: '65%',
        marginTop: '2%',
        marginBottom: '2%',
        marginRight: '2%',
        alignSelf: 'flex-end',
        padding: '2.2%',
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 3
    },
    text: {
        fontSize: 16
    },
    donativoIMG:{
        backgroundColor: '#FFF395',
        maxWidth: '65%',
        marginTop: '2%',
        marginBottom: '2%',
        marginRight: '2%',
        alignSelf: 'flex-end',
        padding: '2.2%',
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 3
    },
    image:{
        maxWidth: '100%',
        maxHeight:150,
    }
});