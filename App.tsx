import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile } from "./src/screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./src/assets/styles";
import TabBarIcon from "./src/components/TabBarIcon";
import DatingTabs from "./src/navigation/dating/DatingTabs";
import AuthStack from "./src/navigation/AuthStack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => (
  <AuthStack />
);

export default App;
