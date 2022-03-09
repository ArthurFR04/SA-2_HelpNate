import React from 'react';
import { View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  Stack_IndividualPost, 
  Stack_Search } from './AppStackRoutes';

const Drawer = createDrawerNavigator();

export default function App(){
  return (
    <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: "#e3b014"}}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Feed">
          <Drawer.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Drawer.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}} />
          <Drawer.Screen name="Registration2" component={Stack_Registration2} options={{headerShown: false}} />
          <Drawer.Screen name="Profile" component={Stack_Profile} options={{headerShown: false}} />
          <Drawer.Screen name="Feed" component={Stack_Feed} options={{headerShown: false}} />
          <Drawer.Screen name="AllChats" component={Stack_AllChats} options={{headerShown: false}} />
          <Drawer.Screen name="IndividualChat" component={Stack_IndividualChat} options={{headerShown: false}} />
          <Drawer.Screen name="NewPost" component={Stack_NewPost} options={{headerShown: false}} />
          <Drawer.Screen name="IndividualPost" component={Stack_IndividualPost} options={{headerShown: false}} />
          <Drawer.Screen name="Search" component={Stack_Search} options={{headerShown: false}} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}