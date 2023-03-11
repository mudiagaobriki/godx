// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationNames from './NavigationNames';
import Splash from '../screens/intro/splash';
import Login from '../screens/auth/Login';
import PhoneSignup from '../screens/auth/PhoneSignup';
import OTPConfirmation from '../screens/auth/OTPConfirmation';
import DatingTabs from "./dating/DatingTabs";
import Signup from "../screens/auth/Signup";
import AppHome from "../screens/AppHome";
import Chat from "../screens/Chat";


const Stack = createStackNavigator();

function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationNames.Splash}>
        <Stack.Screen 
        name={NavigationNames.Splash} 
        component={Splash}
        options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerBackVisible: false,
        }} />
        <Stack.Screen 
        name={NavigationNames.Login} 
        component={Login}
        options={{
            headerShown: false,
            headerTitle: '',
            headerTransparent: true,
            headerBackVisible: false,
        }} />
        <Stack.Screen 
        name={NavigationNames.PhoneSignup} 
        component={PhoneSignup}
        options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerBackVisible: false,
        }} />
        <Stack.Screen 
        name={NavigationNames.OTPConfirmation} 
        component={OTPConfirmation}
        options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerBackVisible: false,
        }} />
      <Stack.Screen
          name={NavigationNames.DatingTabs}
          component={DatingTabs}
          options={{
              headerShown: false,
              headerTitle: '',
              headerTransparent: true,
              headerBackVisible: false,
      }} />
      <Stack.Screen
          name={NavigationNames.Signup}
          component={Signup}
          options={{
              headerShown: false,
              headerTitle: '',
              headerTransparent: true,
              headerBackVisible: false,
          }} />
      <Stack.Screen
          name={NavigationNames.AppHome}
          component={AppHome}
          options={{
              headerShown: false,
              headerTitle: '',
              headerTransparent: true,
              headerBackVisible: false,
          }} />
      <Stack.Screen
          name={NavigationNames.Chat}
          component={Chat}
          options={{
              headerShown: false,
              headerTitle: '',
              headerTransparent: true,
              headerBackVisible: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStack;