import React, { useState, Fragment, useContext } from 'react'
import { View, TextInput, Text, TouchableOpacity, Image, Keyboard, ScrollView, SafeAreaView, TouchableWithoutFeedback, KeyboardAvoidingView } from "react-native";
import styles from './NewPostStyle'
import CustomInput from "../../components/customInput/customInput";
import { Link } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Context } from '../../components/context/Context';
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';

let img1 = null; let img2 = null; let img3 = null; let img4 = null; let img5 = null;

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
        setSelectedImage1(pickerResult);
    };
    if (selectedImage1 !== null) {
        img1 = selectedImage1.uri
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
        setSelectedImage2(pickerResult);
    };
    if (selectedImage2 !== null) {
        img2 = selectedImage2.uri
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
        setSelectedImage3(pickerResult);
    };
    if (selectedImage3 !== null) {
        img3 = selectedImage3.uri
    }

    const navigation = useNavigation()
    const[categoria, setcategoria] = useState("")
    const[arrayImages, setarrayimages] = useState([])
    const { control, handleSubmit, formState: { errors }, watch } = useForm();
    const { newPost } = useContext(Context)

    
    const onSubmit = async(data) =>{
        const arrayImagesEnvio = []
        arrayImages.push(selectedImage1)
        arrayImages.push(selectedImage2)
        arrayImages.push(selectedImage3)
        setarrayimages(arrayImagesEnvio)
        await newPost(data, categoria, arrayImages)
        navigation.navigate("Feed");
    }

    return (
        <Fragment>
            <ScrollView>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={40}>

                    <View style={styles.topPage}>
                        <CustomInput
                            name="titulo"
                            placeholder="Título"
                            control={control}
                            rules={{ required: "Título é obrigatório!" }}
                        />
                        <CustomInput
                            name="descricao"
                            placeholder="Descrição"
                            control={control}
                            rules={{ required: "Descrição é obrigatória!" }}
                        />
                    </View>

                    <View style={styles.categoria}>
                        <Text style={styles.titleCategory}>Categoria</Text>
                        <View style={styles.categorias}>
                            <View>
                                <TouchableOpacity style={styles.buttonCategoria} onPress={() => setcategoria("roupas")}>
                                    <Text style={[styles.textCategory, {color: categoria === 'roupas' ? "#f2bc1b" : "black"}]}>Roupas</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonCategoria}  onPress={() => setcategoria("utensilios")}>
                                    <Text style={[styles.textCategory, {color: categoria === 'utensilios' ? "#f2bc1b" : "black"}]}>Utensílios</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.buttonCategoria} onPress={() => setcategoria("casa")}>
                                    <Text style={[styles.textCategory, {color: categoria === 'casa' ? "#f2bc1b" : "black"}]}>Casa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonCategoria}  onPress={() => setcategoria("eletronicos")}>
                                    <Text style={[styles.textCategory, {color: categoria === 'eletronicos' ? "#f2bc1b" : "black"}]}>Eletrônicos</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.fotosGeral}>
                        <Text style={styles.Text}>Selecione até 3 fotos</Text>
                        <ScrollView horizontal>
                            <View style={styles.fotos}>
                                <View style={styles.quadrofoto}>
                                    <TouchableOpacity onPress={openImagePickerAsync1} style={styles.button}>
                                        {img1 === null ? <Text style={styles.Text}>Pick a photo 1</Text> : <Image source={{ uri: img1 }} style={styles.thumbnail} />}
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.quadrofoto}>
                                    <TouchableOpacity onPress={openImagePickerAsync2} style={styles.button}>
                                        {img2 === null ? <Text style={styles.Text}>Pick a photo 2</Text> : <Image source={{ uri: img2 }} style={styles.thumbnail} />}
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.quadrofoto}>
                                    <TouchableOpacity onPress={openImagePickerAsync3} style={styles.button}>
                                        {img3 === null ? <Text style={styles.Text}>Pick a photo 3</Text> : <Image source={{ uri: img3 }} style={styles.thumbnail} />}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.btnSend}>
                        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                            <Text style={styles.Text}>Criar anúncio</Text>
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>

            </TouchableWithoutFeedback>
            </ScrollView>

        </Fragment >
    );
}
