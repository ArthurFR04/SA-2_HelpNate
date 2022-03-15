import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Registration2Style';
import { Link } from '@react-navigation/native';
import style from 'react-native-inset-shadow/src/styles';
import { VirtualizedListCellContextProvider } from 'react-native/Libraries/Lists/VirtualizedListContext';

export const Registration2Screen = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
            <View style={styles.container}>
                <View className='tituloPagina' style={styles.tituloContent}>
                    <Text style={styles.tituloP}>Continuar cadastro</Text>
                </View>
                <View className='inputs' style={styles.inputs}>
                    <TextInput style={styles.textInput} placeholder='Nome' placeholderTextColor="#3c3c3c"></TextInput>
                    <TextInput style={styles.textInput} placeholder='Localização' placeholderTextColor="#3c3c3c"></TextInput>
                    <TextInput style={styles.textInput} placeholder='Telefone' placeholderTextColor="#3c3c3c"></TextInput>
                    <TextInput style={styles.textInput} placeholder='Senha' placeholderTextColor="#3c3c3c"></TextInput>
                    <View style={styles.descInput}>
                        <TextInput placeholder='O que você está buscando'  placeholderTextColor="#3c3c3c"></TextInput>
                        {/*Pesquisar word wrap */}
                    </View>
                </View>
                <View className='fotoUsuario' style={styles.contentUser}>
                    <Text style={styles.textUser} >Adicionar foto de perfil</Text>
                    <View style={styles.fotoUser}>
                        <TouchableOpacity style={styles.addPicture}>
                            <Text style={styles.plus}>+</Text>
                            <Text style={styles.textAddImage}>ADD IMAGE</Text>
                            <Text style={styles.styleImage}>JPG, GIF ou PNG</Text>
                        </TouchableOpacity>
                        <View style={styles.imgUser}>
                            <Text>img</Text>
                            <TouchableOpacity style={styles.arrow}>
                                <Text>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnFinalizar}>
                        <Text style={styles.btnText}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
