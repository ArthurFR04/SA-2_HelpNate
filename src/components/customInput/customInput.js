import React from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry}) => {
  return (
    <Controller
      control={control }
      name={name }
      rules={rules }
      render={({field: { value, onChange, onBlur }, fieldState: { error }}) => (
        <>
          <TextInput
            value={ value }
            onChangeText={ onChange }
            onBlur={ onBlur }
            keyboardType={name === 'nascimento' || name === 'telefone' ? "numbers-and-punctuation" : "default"}
            placeholder={ placeholder }
            style={[style.input,{ borderColor: error ? 'red' : 'transparent'}, name === 'biografia' || name === 'descricao' ? {height: 150}: {height: 45}]}
            secureTextEntry={ secureTextEntry }
            multiline={name === 'biografia' || name === 'descricao' ? true : false}
          />
          {error && (
            <Text style={{ width: "75%", marginLeft: "auto", marginRight: "auto", color: 'red', textAlign: "left", fontSize: 12 }}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const style = StyleSheet.create({
  input:{
    width: "85%",
    backgroundColor: "#E5E5E5",
    ...Platform.select({
      android: {
        textAlignVertical: "center"
      },
      ios:{
        textAlignVertical: "top",
      }
    }),
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#3C3C3C",
    paddingLeft: 10,
    borderWidth: 1
},
});

export default CustomInput;