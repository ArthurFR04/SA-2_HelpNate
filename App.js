import React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import RegistrationScreen from './src/screens/Registration/RegistrationScreen';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RegistrationScreen></RegistrationScreen>
    </SafeAreaView>
  );
}
