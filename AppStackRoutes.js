import React from 'react';
import { Text, View, Image, Dimensions, TextInput } from 'react-native';

import { Registration2Screen } from './src/screens/Registration2/Registration2Screen';
import { ProfileScreen } from './src/screens/Profile/ProfileScreen'
import { FeedScreen } from './src/screens/Feed/FeedScreen';
import { AllChatsScreen } from './src/screens/Chats/ChatsScreen';
import { IndividualChatScreen } from './src/screens/IndividualChat/IndividualChatScreen';
import { NewPostScreen } from './src/screens/NewPost/NewPostScreen';
import { IndividualPostScreen } from './src/screens/IndividualPost/IndividualPostScreen';
import { SearchScreen } from './src/screens/Search/SearchScreen';
import { Link } from '@react-navigation/native';

import {  DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AntDesign, Ionicons, FontAwesome5, FontAwesome , EvilIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export const Stack_Registration2 = () => (
    <Stack.Navigator>
      <Stack.Screen name="Registration2.2" component={Registration2Screen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
            <Link to={{ screen: 'Feed' }}>
                  <FontAwesome name="home" style={{ marginRight: 8, color: "#3c3c3c" }} size={40}/>
                </Link>
            {/* <Text style={{color: "#3c3c3c", fontSize: 24 }}> Registration</Text> */}
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "30%"}}>
                  <Text style={{color: "#3c3c3c", fontSize: 30, fontWeight: 'bold' }}>Help</Text>
                  <Text style={{color: "#fff", fontSize: 30, fontWeight: 'bold'}}>Nate</Text>
                </View>
          </View>
        )
      })} />
    </Stack.Navigator>
  );
  
export const Stack_Profile = () => (
    <Stack.Navigator>
      <Stack.Screen name="Profile2" component={ProfileScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <Link to={{ screen: 'Feed' }}>
                  <FontAwesome name="home" style={{ marginRight: 8, color: "#3c3c3c" }} size={40}/>
                </Link>
                <Text style={{color: "#3c3c3c", fontSize: 30, fontWeight: "bold", marginLeft: "42%" }}>Perfil</Text>
            </View>
        ),
        headerRight: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center" }}>

            </View>
        ),
      })} />
    </Stack.Navigator>
  );
  
export const Stack_Feed = () => (
    <Stack.Navigator>
      <Stack.Screen name="Feed2" component={FeedScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: Dimensions.get('window').width, position: "absolute", left:0}}>
              <Link to={{ screen: 'NewPost' }} style={{position: 'absolute', left: "4%"}}>
                <FontAwesome name="plus-circle" style={{ color: "#3c3c3c"}} size={32}/>
              </Link>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <Text style={{color: "#3c3c3c", fontSize: 30, fontWeight: 'bold' }}>Help</Text>
                  <Text style={{color: "#fff", fontSize: 30, fontWeight: 'bold'}}>Nate</Text>
                </View>
            </View>
        ),
        headerRight: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginRight: 10}}>
              <Link to={{ screen: 'AllChats' }}>
                  <Ionicons name="send" style={{ marginRight: 10, color: "#3c3c3c" }} size={34} />
                </Link>
                <Text style={{opacity: 0}}>...</Text>
                <Link to={{ screen: 'Profile' }}>
                  <Ionicons name="person-circle-outline" style={{ marginRight: 10, color: "#3c3c3c" }} size={34} />
                </Link>

            </View>
        ),
      })} />
    </Stack.Navigator>
  );
  
export const Stack_AllChats = () => (
    <Stack.Navigator>
      <Stack.Screen name="AllChats2" component={AllChatsScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <AntDesign name="arrowleft" style={{ marginRight: 8, color: "#3c3c3c" }} size={32} onPress={() => navigation.goBack()}/>
                <Image source={require("./assets/images/ismaelSilva.jpg")} style={{width: 35, height: 35, marginRight: 8, borderRadius: Dimensions.get('window').width / 2}}></Image>
                <Text style={{color: "#3c3c3c", fontSize: 22 }}>Olá, Ismael Silva</Text>
            </View>
        ),
        // headerRight: () => (
        //     <Ionicons name="ios-search-circle-outline" style={{ marginRight: 12, color: "#3c3c3c" }} size={45} />
        // ),
      })} />
    </Stack.Navigator>
  );
  
export const Stack_IndividualChat = () => (
    <Stack.Navigator>
    <Stack.Screen name="IndividualChat2" component={IndividualChatScreen} options={({navigation}) => ({
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
  
export const Stack_NewPost = () => (
    <Stack.Navigator>
      <Stack.Screen name="NewPost2" component={NewPostScreen} options={({navigation}) => ({
        headerStyle: { backgroundColor: "#F2BC1B", height: 50},
        headerTitle: () => (<Text></Text>),
        headerLeft: () => (
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: 20}}>
                <Link to={{ screen: 'Feed' }}>
                  <FontAwesome name="home" style={{ marginRight: 8, color: "#3c3c3c" }} size={40}/>
                </Link>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "30%"}}>
                  <Text style={{color: "#3c3c3c", fontSize: 30, fontWeight: 'bold' }}>Help</Text>
                  <Text style={{color: "#fff", fontSize: 30, fontWeight: 'bold'}}>Nate</Text>
                </View>
            </View>
        ),
        headerRight: () => (
          <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginRight: 10}}>
            <Link to={{ screen: 'Profile' }}>
              <Ionicons name="person-circle-outline" style={{ marginRight: 10, color: "#3c3c3c" }} size={38} />
            </Link>
          </View>
        ),
      })} />
    </Stack.Navigator>
  );
  
export const Stack_IndividualPost = () => (
    <Stack.Navigator>
      <Stack.Screen name="IndividualPost2" component={IndividualPostScreen} options={({navigation}) => ({
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