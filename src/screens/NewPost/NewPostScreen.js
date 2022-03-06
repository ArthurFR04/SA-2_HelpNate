import React from 'react'
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import styles from './NewPostStyle'
import { Link } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

let img1; let img2; let img3; let img4; let img5;

export const NewPostScreen = () =>{

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
        <View className="Container">

            <View className="Basico">
                <TextInput placeholder='Titúlo da publicação'></TextInput>
                <TextInput placeholder='Descrição...'></TextInput>
            </View>

            <View className="Categoria">
                <Text>Selecione a categoria</Text>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>

            <View className="Fotos">
                <Text>Fotos</Text>
                <Text>Selecione até 5 fotos</Text>
                <View>
                    <TouchableOpacity onPress={openImagePickerAsync1} style={styles.button}>
                        <Text style={styles.buttonText}>Pick a photo 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openImagePickerAsync2} style={styles.button}>
                        <Text style={styles.buttonText}>Pick a photo 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openImagePickerAsync3} style={styles.button}>
                        <Text style={styles.buttonText}>Pick a photo 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openImagePickerAsync4} style={styles.button}>
                        <Text style={styles.buttonText}>Pick a photo 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openImagePickerAsync5} style={styles.button}>
                        <Text style={styles.buttonText}>Pick a photo 5</Text>
                    </TouchableOpacity>
                </View>

                <Image source={{ uri: img1 }} style={styles.thumbnail} />
                <Image source={{ uri: img2 }} style={styles.thumbnail} />
                <Image source={{ uri: img3 }} style={styles.thumbnail} />
                <Image source={{ uri: img4 }} style={styles.thumbnail} />
                <Image source={{ uri: img5 }} style={styles.thumbnail} />

            </View>

            <View className="Localizacao"></View>

            <View className="EnviarBTN"></View>

        </View>
    );
}