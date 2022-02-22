import React from 'react';
import { SafeAreaView } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from 'react-native';

import RegistrationScreen from './src/screens/Registration/RegistrationScreen';
import LoginScreen from './src/screens/Login/LoginScreen';

const Drawer = createDrawerNavigator();

const App = () => {

  const dimensions = useWindowDimensions();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer >
        <Drawer.Navigator
          initialRouteName="Feed" 
          screenOptions={{
            headerStyle:{backgroundColor:"#f2bc1b"},
            height: 80,
            drawerType: dimensions.width >= 821 ? 'permanent' : 'front',
            overlayColor: 'transparent'
          }}
        >
          <Drawer.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }}/>

          <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>

        </Drawer.Navigator>

      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App