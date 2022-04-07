import React from 'react';
import 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigationRef } from './rootNavigation';

import ContextProvider from './src/components/context/Context';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { LoginScreen } from './src/screens/Login/LoginScreen';
import { RegistrationScreen } from './src/screens/Registration/RegistrationScreen';
import { 
  Stack_Registration2, 
  Stack_Profile, 
  Stack_Feed, 
  Stack_AllChats, 
  Stack_IndividualChat,
  Stack_NewPost, 
  Stack_IndividualPost
} from './AppStackRoutes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App(){
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView edges={"top"} style={{flex: 1, backgroundColor: "#e3b014"}}>
        <ContextProvider>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Feed">
              <Drawer.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
              <Drawer.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false, drawerItemStyle: { display: "none" }}} />
              <Drawer.Screen name="Registration2" component={Stack_Registration2} options={{headerShown: false, drawerItemStyle: { display: "none"}}} />
              <Drawer.Screen name="Profile" component={Stack_Profile} options={{headerShown: false}} />
              <Drawer.Screen name="Feed" component={Stack_Feed} options={{headerShown: false}} />
              <Drawer.Screen name="AllChats" component={Stack_AllChats} options={{headerShown: false}} />
              <Drawer.Screen name="IndividualChat" component={Stack_IndividualChat} options={{headerShown: false, drawerItemStyle: { display: "none"}}} />
              <Drawer.Screen name="NewPost" component={Stack_NewPost} options={{headerShown: false}} />
              <Drawer.Screen name="IndividualPost" component={Stack_IndividualPost} options={{headerShown: false, drawerItemStyle: { display: "none"}}}/>
            </Drawer.Navigator>
          </NavigationContainer>
        </ContextProvider>
      </SafeAreaView>
    );
  }
  else if(Platform.OS === "android") {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#e3b014"}}>
        <ContextProvider>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Feed">
              <Drawer.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
              <Drawer.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false, drawerItemStyle: { display: "none" }}} />
              <Drawer.Screen name="Registration2" component={Stack_Registration2} options={{headerShown: false, drawerItemStyle: { display: "none"}}} />
              <Drawer.Screen name="Profile" component={Stack_Profile} options={{headerShown: false}} />
              <Drawer.Screen name="Feed" component={Stack_Feed} options={{headerShown: false}} />
              <Drawer.Screen name="AllChats" component={Stack_AllChats} options={{headerShown: false}} />
              <Drawer.Screen name="IndividualChat" component={Stack_IndividualChat} options={{headerShown: false, drawerItemStyle: { display: "none"}}} />
              <Drawer.Screen name="NewPost" component={Stack_NewPost} options={{headerShown: false}} />
              <Drawer.Screen name="IndividualPost" component={Stack_IndividualPost} options={{headerShown: false, drawerItemStyle: { display: "none"}}}/>
            </Drawer.Navigator>
          </NavigationContainer>
        </ContextProvider>
      </SafeAreaView>
    );
  }
  else {
    return (
      <ContextProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Feed">
            <Drawer.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Drawer.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false, drawerItemStyle: { display: "none" }}} />
            <Drawer.Screen name="Registration2" component={Stack_Registration2} options={{headerShown: false, drawerItemStyle: { display: "none"}}} />
            <Drawer.Screen name="Profile" component={Stack_Profile} options={{headerShown: false}} />
            <Drawer.Screen name="Feed" component={Stack_Feed} options={{headerShown: false}} />
            <Drawer.Screen name="AllChats" component={Stack_AllChats} options={{headerShown: false}} />
            <Drawer.Screen name="IndividualChat" component={Stack_IndividualChat} options={{headerShown: false, drawerItemStyle: { display: "none"}}} />
            <Drawer.Screen name="NewPost" component={Stack_NewPost} options={{headerShown: false}} />
            <Drawer.Screen name="IndividualPost" component={Stack_IndividualPost} options={{headerShown: false, drawerItemStyle: { display: "none"}}}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </ContextProvider>
    );
  }
}