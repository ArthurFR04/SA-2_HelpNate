import React from 'react'
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import styles from './NewPostStyle'
import { Link } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

let img1; let img2; let img3; let img4; let img5;

export const NewPostScreen = () => {

    const [selectedImage1, setSelectedImage1] = React.useState(null);
    let openImagePickerAsync1 = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage1({ localUri: pickerResult.uri });
    };
    if (selectedImage1 !== null) {
        img1 = selectedImage1.localUri
    }

    const [selectedImage2, setSelectedImage2] = React.useState(null);
    let openImagePickerAsync2 = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage2({ localUri: pickerResult.uri });
    };
    if (selectedImage2 !== null) {
        img2 = selectedImage2.localUri
    }

    const [selectedImage3, setSelectedImage3] = React.useState(null);
    let openImagePickerAsync3 = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage3({ localUri: pickerResult.uri });
    };
    if (selectedImage3 !== null) {
        img3 = selectedImage3.localUri
    }

    const [selectedImage4, setSelectedImage4] = React.useState(null);
    let openImagePickerAsync4 = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage4({ localUri: pickerResult.uri });
    };
    if (selectedImage4 !== null) {
        img4 = selectedImage4.localUri
    }

    const [selectedImage5, setSelectedImage5] = React.useState(null);
    let openImagePickerAsync5 = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage5({ localUri: pickerResult.uri });
    };
    if (selectedImage5 !== null) {
        img5 = selectedImage5.localUri
    }


    return (
        <View className="Container" style={styles.container}>

            <View className="Basico" style={styles.topPage}>
                <TextInput placeholder='Titúlo' style={styles.tituloP} placeholderTextColor="#3c3c3c"></TextInput>
                <TextInput placeholder='Descrição...' style={styles.descrP} placeholderTextColor="#3c3c3c"></TextInput>
            </View>

            <View className="Categoria" style={styles.categoria}>
                <Text style={styles.Text}>Selecione a categoria</Text>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>

            <View className="Fotos" style={styles.fotosGeral}>
                <Text style={styles.Text}>Fotos</Text>
                <Text style={styles.Text}>Selecione até 5 fotos</Text>

                <View style={styles.fotos}>
                    <View style={styles.fotos1}>
                        <TouchableOpacity onPress={openImagePickerAsync1} style={styles.button}>
                            <Text style={styles.Text}>Pick a photo 1</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: img1 }} style={styles.thumbnail} />
                    </View>


                    <View style={styles.fotos1}>
                        <TouchableOpacity onPress={openImagePickerAsync2} style={styles.button}>
                            <Text style={styles.Text}>Pick a photo 2</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: img2 }} style={styles.thumbnail} />
                    </View>

                    <View style={styles.fotos1}>
                        <TouchableOpacity onPress={openImagePickerAsync3} style={styles.button}>
                            <Text style={styles.Text}>Pick a photo 3</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: img3 }} style={styles.thumbnail} />
                    </View>

                    <View style={styles.fotos1}>
                        <TouchableOpacity onPress={openImagePickerAsync4} style={styles.button}>
                            <Text style={styles.Text}>Pick a photo 4</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: img4 }} style={styles.thumbnail} />
                    </View>

                    <View style={styles.fotos1}>
                        <TouchableOpacity onPress={openImagePickerAsync5} style={styles.button}>
                            <Text style={styles.Text}>Pick a photo 5</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: img5 }} style={styles.thumbnail} />
                    </View>
                </View>
            </View>

            <View className="Localizacao" style={styles.locate}>
                <Text style={styles.locateText}>Localização</Text>
                <TextInput placeholder='CEP' placeholderTextColor="#3c3c3c" style={styles.cep}></TextInput>
            </View>

            <View className="EnviarBTN" style={styles.btnSend}>
                <TouchableOpacity>
                    <Text style={styles.Text}>Enviar anúncio</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
