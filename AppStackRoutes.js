import React from 'react';
import { Text, View, Image, Dimensions, TextInput } from 'react-native';

import { Registration2Screen } from './src/screens/Registration2/Registration2Screen';
import { ProfileScreen } from './src/screens/Profile/ProfileScreen'
import { FeedScreen } from './src/screens/Feed/FeedScreen';
import { AllChatsScreen } from './src/screens/Chats/ChatsScreen';
import { IndividualChatScreen } from './src/screens/IndividualChat/IndividualChatScreen';
import { NewPostScreen } from './src/screens/NewPost/NewPostScreen';
import { IndividualPostScreen } from './src/screens/IndividualPost/IndividualPostScreen';
import { SearchScreen } from './src/screens/Search/SearchScreen'

import {  DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AntDesign, Ionicons, FontAwesome5, FontAwesome , EvilIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export const Registration2 = () => (
    <Stack.Navigator>
      <Stack.Screen name="Registration2" component={Registration2Screen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
            <FontAwesome name="bars" style={{ marginRight: 12, color: "#3c3c3c" }} size={32} onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())} />
            <Text style={{color: "#3c3c3c", fontSize: 24 }}>Registration</Text>
          </View>
        )
      })} />
    </Stack.Navigator>
  );
  
export const Profile = () => (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <FontAwesome name="bars" style={{ marginRight: 8, color: "#3c3c3c" }} size={32} onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())} />
                <Text style={{color: "#3c3c3c", fontSize: 24 }}>Profile</Text>
            </View>
        ),
        headerRight: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5 name="search" style={{ marginRight: 12, color: "#3c3c3c" }} size={28} />
                <MaterialCommunityIcons name="package-variant" style={{ marginRight: 12, color: "#3c3c3c" }} size={34} />
                <Ionicons name="person-circle-outline" style={{ marginRight: 12, color: "#3c3c3c" }} size={34} />
            </View>
        ),
      })} />
    </Stack.Navigator>
  );
  
export const Feed = () => (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <FontAwesome name="bars" style={{ marginRight: 8, color: "#3c3c3c" }} size={32} onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())} />
                <Text style={{color: "#3c3c3c", fontSize: 24 }}>Feed</Text>
            </View>
        ),
        headerRight: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5 name="search" style={{ marginRight: 12, color: "#3c3c3c" }} size={28} />
                <MaterialCommunityIcons name="package-variant" style={{ marginRight: 12, color: "#3c3c3c" }} size={34} />
                <Ionicons name="person-circle-outline" style={{ marginRight: 12, color: "#3c3c3c" }} size={34} />
            </View>
        ),
      })} />
    </Stack.Navigator>
  );
  
export const AllChats = () => (
    <Stack.Navigator>
      <Stack.Screen name="AllChats" component={AllChatsScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <AntDesign name="arrowleft" style={{ marginRight: 8, color: "#3c3c3c" }} size={32} onPress={() => navigation.goBack()}/>
                <Image source={require("./assets/images/ismaelSilva.jpg")} style={{width: 35, height: 35, marginRight: 8, borderRadius: Dimensions.get('window').width / 2}}></Image>
                <Text style={{color: "#3c3c3c", fontSize: 22 }}>Olá, Ismael Silva</Text>
            </View>
        ),
        headerRight: () => (
            <Ionicons name="ios-search-circle-outline" style={{ marginRight: 12, color: "#3c3c3c" }} size={45} />
        ),
      })} />
    </Stack.Navigator>
  );
  
export const IndividualChat = () => (
    <Stack.Navigator>
    <Stack.Screen name="IndividualChat" component={IndividualChatScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <AntDesign name="arrowleft" style={{ marginRight: 10, color: "#3c3c3c" }} size={32} onPress={() => navigation.goBack()}/>
                <Image source={require("./assets/images/ismaelSilva.jpg")} style={{width: 35, height: 35, marginRight: 10, borderRadius: Dimensions.get('window').width / 2}}></Image>
                <Text style={{color: "#3c3c3c", fontSize: 22 }}>Ismael Silva</Text>
            </View>
        ),
        headerRight: () => (
            <FontAwesome name="bars" style={{ marginRight: 14, color: "#3c3c3c" }} size={32} onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())} />
        ),
    })} />
  </Stack.Navigator>
  );
  
export const NewPost = () => (
    <Stack.Navigator>
      <Stack.Screen name="NewPost" component={NewPostScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <FontAwesome name="bars" style={{ marginRight: 8, color: "#3c3c3c" }} size={32} onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())} />
                <Text style={{color: "#3c3c3c", fontSize: 22 }}>New Post</Text>
            </View>
        ),
        headerRight: () => (
          <Ionicons name="person-circle-outline" style={{ marginRight: 12, color: "#3c3c3c" }} size={38} />
        ),
      })} />
    </Stack.Navigator>
  );
  
export const IndividualPost = () => (
    <Stack.Navigator>
      <Stack.Screen name="IndividualPost" component={IndividualPostScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <FontAwesome name="bars" style={{ marginRight: 8, color: "#3c3c3c" }} size={32} onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())} />
                <Text style={{color: "#3c3c3c", fontSize: 24 }}>Donations</Text>
            </View>
        ),
        headerRight: () => (
            <Ionicons name="person-circle-outline" style={{ marginRight: 12, color: "#3c3c3c" }} size={38} />
        ),
      })} />
    </Stack.Navigator>
  );
  
export const Search = () => (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (
        <TextInput placeholder='Foguete do Elon Musk' 
        style={{ width: Dimensions.get('window').width /1.5, height: 30, paddingLeft: 15,  backgroundColor: "white", borderRadius: Dimensions.get('window').width, fontSize: 11}}>
          </TextInput>
        ),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <FontAwesome name="bars" style={{ marginRight: 8, color: "#3c3c3c" }} size={32} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
            </View>
        ),
        headerRight: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingRight: 20}}>
                <FontAwesome5 name="search" style={{ color: "#3c3c3c" }} size={28} />
            </View>
        ),
      })} />
    </Stack.Navigator>
  );