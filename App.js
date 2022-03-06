import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {FeedScreen} from './src/screens/Feed/FeedScreen';
import {RegistrationScreen} from './src/screens/Registration/RegistrationScreen'
import { AntDesign, Ionicons, FontAwesome5, FontAwesome , EvilIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Feed = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={FeedScreen} options={({navigation}) => ({
      headerStyle: {
        backgroundColor: "#F2BC1B",
        height: 50
      },
      headerTitle: () => (
        <Text></Text>
      ),
      headerLeft: () => (
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "50%", paddingLeft: 20}}>
          <FontAwesome name="bars" style={{ marginRight: 8, color: "#3c3c3c" }} size={32} onPress={() =>
            navigation.dispatch(DrawerActions.toggleDrawer())
          } />
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

export default function App(){
  return (
    <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: "#e3b014"}}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Feed">
          <Drawer.Screen name="Feed" component={Feed} options={{headerShown: false}} />
          <Drawer.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}