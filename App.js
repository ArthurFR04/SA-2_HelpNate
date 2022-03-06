import React from 'react';
import { View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { LoginScreen } from './src/screens/Login/LoginScreen';
import { RegistrationScreen } from './src/screens/Registration/RegistrationScreen';
import { 
  Registration2, 
  Profile, 
  Feed, 
  AllChats, 
  IndividualChat,
   NewPost, 
   IndividualPost, 
   Search } from './AppStackRoutes';

const Drawer = createDrawerNavigator();

export default function App(){
  return (
    <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: "#e3b014"}}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Feed">
          <Drawer.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Drawer.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}} />
          <Drawer.Screen name="Registration2" component={Registration2} options={{headerShown: false}} />
          <Drawer.Screen name="Profile" component={Profile} options={{headerShown: false}} />
          <Drawer.Screen name="Feed" component={Feed} options={{headerShown: false}} />
          <Drawer.Screen name="AllChats" component={AllChats} options={{headerShown: false}} />
          <Drawer.Screen name="IndividualChat" component={IndividualChat} options={{headerShown: false}} />
          <Drawer.Screen name="NewPost" component={NewPost} options={{headerShown: false}} />
          <Drawer.Screen name="IndividualPost" component={IndividualPost} options={{headerShown: false}} />
          <Drawer.Screen name="Search" component={Search} options={{headerShown: false}} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}