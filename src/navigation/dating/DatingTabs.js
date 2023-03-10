import React from 'react';
import {BLACK, DARK_GRAY, PRIMARY_COLOR, WHITE} from "../../assets/styles";
import {Home, Matches, Messages, Profile} from "../../screens";
import TabBarIcon from "../../components/TabBarIcon";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MessagesStack from "../MessagesStack";
import NavigationNames from "../NavigationNames";

const DatingTabs = () => {

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    return (

                        <Tab.Navigator
                            tabBarOptions={{
                                showLabel: false,
                                activeTintColor: PRIMARY_COLOR,
                                inactiveTintColor: DARK_GRAY,
                                labelStyle: {
                                    fontSize: 14,
                                    textTransform: "uppercase",
                                    paddingTop: 10,
                                },
                                style: {
                                    backgroundColor: WHITE,
                                    borderTopWidth: 0,
                                    marginBottom: 0,
                                    shadowOpacity: 0.05,
                                    shadowRadius: 10,
                                    shadowColor: BLACK,
                                    shadowOffset: { height: 0, width: 0 },
                                },
                            }}
                        >
                            <Tab.Screen
                                name="Explore"
                                component={Home}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="search"
                                            text="Explore"
                                        />
                                    ),
                                }}
                            />

                            <Tab.Screen
                                name="Matches"
                                component={Matches}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="heart"
                                            text="Matches"
                                        />
                                    ),
                                }}
                            />

                            <Tab.Screen
                                name={NavigationNames.MessagesStack}
                                component={MessagesStack}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="chatbubble"
                                            text="Chat"
                                        />
                                    ),
                                }}
                            />

                            <Tab.Screen
                                name="Profile"
                                component={Profile}
                                options={{
                                    tabBarIcon: ({ focused }) => (
                                        <TabBarIcon
                                            focused={focused}
                                            iconName="person"
                                            text="Profile"
                                        />
                                    ),
                                }}
                            />
                        </Tab.Navigator>
    );
};

export default DatingTabs;