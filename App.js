import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "./screens/Chats"
import Settings from "./screens/Settings";
import{Ionicons} from '@expo/vector-icons'
import {colors} from './config/constans'
import SignUp from "./screens/SignUp";
import Chat from "./screens/Chat";

const ChatsStack = createNativeStackNavigator()

const ChatsScreen = () => {
  return(
    <ChatsStack.Navigator>
    <ChatsStack.Screen name="Chats" component={Chats}/>
    <ChatsStack.Screen name="Chat" component={Chat}/>
    </ChatsStack.Navigator>
  )
}

const SettingsStack = createNativeStackNavigator()


const SettingsScreen = () => {
  return(
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Settings" component={Settings}/>
    </ChatsStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator()

const TabsScreen = () => (
  <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Chats') {
        iconName = focused
          ? 'chatbubbles'
          : 'chatbubbles-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: colors.primary
    })} >
    <Tabs.Screen name="Chats" component={ChatsScreen}/>
    <Tabs.Screen name="Settings" component={SettingsScreen}/>
  </Tabs.Navigator>
)

const MainStack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Etiya Company" component={TabsScreen}/>
        <MainStack.Screen name="SignUp" component={SignUp}/>
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
export default App;