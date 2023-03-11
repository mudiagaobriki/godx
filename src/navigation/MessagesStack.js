// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationNames from './NavigationNames';
import Chat from "../screens/Chat";
// import DatingTabs from "./dating/DatingTabs";
import Messages from "../screens/Messages";


const Stack = createStackNavigator();

function MessagesStack() {
  return (
      <Stack.Navigator initialRouteName={NavigationNames.Messages}>
        <Stack.Screen 
        name={NavigationNames.Messages}
        component={Messages}
        options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerBackVisible: false,
        }} />
        <Stack.Screen 
        name={NavigationNames.Chat}
        component={Chat}
        options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerBackVisible: false,
        }} />
        {/*<Stack.Screen */}
        {/*name={NavigationNames.PhoneSignup} */}
        {/*component={PhoneSignup}*/}
        {/*options={{*/}
        {/*    headerShown: true,*/}
        {/*    headerTitle: '',*/}
        {/*    headerTransparent: true,*/}
        {/*    headerBackVisible: false,*/}
        {/*}} />*/}
        {/*<Stack.Screen */}
        {/*name={NavigationNames.OTPConfirmation} */}
        {/*component={OTPConfirmation}*/}
        {/*options={{*/}
        {/*    headerShown: true,*/}
        {/*    headerTitle: '',*/}
        {/*    headerTransparent: true,*/}
        {/*    headerBackVisible: false,*/}
        {/*}} />*/}
        {/*<Stack.Screen */}
        {/*name={NavigationNames.Chat} */}
        {/*component={Chat}*/}
        {/*options={{*/}
        {/*    headerShown: true,*/}
        {/*    headerTitle: '',*/}
        {/*    headerTransparent: true,*/}
        {/*    headerBackVisible: false,*/}
        {/*}} />*/}
        {/*<Stack.Screen */}
        {/*name={NavigationNames.MessagesList} */}
        {/*component={MessagesList}*/}
        {/*options={{*/}
        {/*    headerShown: true,*/}
        {/*    headerTitle: '',*/}
        {/*    headerTransparent: true,*/}
        {/*    headerBackVisible: false,*/}
        {/*}} />*/}
        {/*<Stack.Screen */}
        {/*name={NavigationNames.PhoneContacts} */}
        {/*component={PhoneContacts}*/}
        {/*options={{*/}
        {/*    headerShown: true,*/}
        {/*    headerTitle: '',*/}
        {/*    headerTransparent: true,*/}
        {/*    headerBackVisible: false,*/}
        {/*}} />*/}
        {/*  <Stack.Screen*/}
        {/*      name="Tab"*/}
        {/*      options={{ headerShown: false, animationEnabled: false }}*/}
        {/*  >*/}
        {/*      <DatingTabs />*/}
        {/*  </Stack.Screen>*/}
      </Stack.Navigator>
  );
}

export default MessagesStack;