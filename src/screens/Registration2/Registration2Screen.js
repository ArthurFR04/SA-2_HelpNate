import React, { useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { RegistrationContext } from '../../components/context/RegistrationContext';
import CustomInput from "../../components/customInput/customInput";
import { useForm, Controller } from "react-hook-form";
import styles from './Registration2Style';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';


export const Registration2Screen = () => {

    const navigation = useNavigation()
    const { secondPart, insertData, file, setFile } = useContext(RegistrationContext)
    const { control, handleSubmit, formState: { errors }, watch } = useForm();

    const selectImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        console.log(pickerResult)
        setFile(pickerResult);
    };

    function onSubmit(data){
        secondPart(data)
        navigation.navigate("Feed")
    }

    function onSubmitDirectly(){
        insertData()
        navigation.navigate("Feed")
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
            <View style={{height: Dimensions.get('window').height}}>
                <View style={styles.container}>
                    <View style={styles.tituloContent}>
                        <Text style={styles.tituloP}>Continuar cadastro</Text>
                    </View>
                    <View style={styles.inputs}>
                        <CustomInput
                            name="cep"
                            placeholder="CEP"
                            control={control}
                            rules={{ required: "CEP é obrigatório!" }}
                        />
                        <CustomInput
                            name="cidade"
                            placeholder="Cidade"
                            control={control}
                            rules={{ required: "CEP é obrigatório!" }}
                        />
                        <CustomInput
                            name="estado"
                            placeholder="Estado"
                            control={control}
                            rules={{ required: "CEP é obrigatório!" }}
                        />
                        <CustomInput
                            name="biografia"
                            placeholder="Biografia"
                            control={control}
                            style={{ height: 60}}
                        />

                    </View>
                    <View style={styles.contentUser}>
                        <Text style={styles.textUser} >Adicionar foto de perfil</Text>
                        <View style={styles.fotoUser}>
                            <TouchableOpacity style={styles.addPicture} onPress={selectImage}>
                                {file === null ? <>
                                    <Text style={styles.plus}>+</Text>
                                    <Text style={styles.textAddImage}>ADD IMAGE</Text>
                                    <Text style={styles.styleImage}>JPG, GIF ou PNG</Text>
                                </> : 
                                <Image source={{ uri: file.uri }} style={{minWidth: "90%", width: "90%", minHeight: "90%", height: "90%",}} resizeMode={'contain'}/>}
                            </TouchableOpacity>
                            <View style={styles.imgUser}>
                                <Text>img</Text>
                                <TouchableOpacity style={styles.arrow}>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={styles.btnFinalizar} onPress={handleSubmit(onSubmit)}>
                            <Text>Finalizar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnPular} onPress={onSubmitDirectly}>
                            <Text style={styles.btnText}>Pular</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
