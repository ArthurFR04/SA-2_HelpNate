import * as React from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import { RegistrationScreen } from './src/screens/Registration/RegistrationScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import NewAnuncioScreen from './src/screens/NewAnuncio/NewAnuncioScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen'

const Drawer = createDrawerNavigator()

const App = () => {

  const dimensions = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Registration" screenOptions={{
          headerStyle: { backgroundColor: "#f2bc1b" },
          height: 80,
          drawerType: dimensions.width >= 821 ? 'permanent' : 'front',
          overlayColor: 'transparent'
        }}>
          <Drawer.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Perfil" component={ProfileScreen} />
          <Drawer.Screen name="Criar Anúncio" component={NewAnuncioScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;