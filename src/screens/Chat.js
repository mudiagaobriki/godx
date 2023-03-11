import React, {useCallback, useEffect, useRef, useState} from "react"
import {
    StyleSheet, Text, View, Button, Dimensions, KeyboardAvoidingView,
    SafeAreaView, TextInput, FlatList, TouchableOpacity, Image
} from "react-native"
import { useNavigation } from "@react-navigation/native";
import {GiftedChat, Bubble} from "react-native-gifted-chat";
import { PRIMARY_COLOR } from "../assets/styles";

export default function Chat() {
    // Define position state: {latitude: number, longitude: number}

    const navigation = useNavigation()
    const [messages, setMessages] = useState([]);
    // const loginStyles = LoginStyles()

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello Jeremy',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


    return (
        <View style={styles.container}>
            {/*<TopBar title="Messages" rightMenu={true}  />*/}
            <TouchableOpacity style={{ alignItems: "center", marginTop:30}} >
                <Image source={require("../assets/images/08.jpg")}
                       style={{width: 50, height: 50, marginBottom: 10, borderRadius: 50,}}  />
                <Text style={{fontWeight: '700'}}>Samuel Serif</Text>
            </TouchableOpacity>
            <View style={{flex:3}}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    timeTextStyle={{
                        left: {
                            color: "black"
                        },
                        right: {
                            color: "white"
                        }
                    }}
                    imageStyle={{
                        left:{
                            marginBottom: 25
                        },
                        right: {
                            marginBottom: 10
                        }
                    }}
                    renderSend={(props) => {
                        const {text,messageIdGenerator,user, onSend} = props
                        return (<TouchableOpacity
                            style={{paddingHorizontal: 0,
                                paddingVertical: 7, width: 90, marginRight: -15, backgroundColor: 'transparent'}}
                            onPress={
                                ()=>{
                                    if (text && onSend) {
                                        onSend({ text: text.trim(), user:user,_id:messageIdGenerator()}, true);
                                    }
                                }
                            }>
                            <Text style={{
                                color: 'black'
                            }}>Send</Text>
                        </TouchableOpacity>)}}
                    inverted={true}
                    // messagesContainerStyle={{backgroundColor: colors.secondary}}
                    // style={{backgroundColor: colors.secondary}}
                    renderBubble={props => {
                        return (
                            <Bubble
                                {...props}

                                textStyle={{
                                    right: {
                                        color: "white",
                                        fontSize: 16,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        // fontFamily: "OpenSans_600SemiBold"
                                    },
                                    left: {
                                        color: 'black',
                                        fontSize: 16,
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        // fontFamily: "OpenSans_600SemiBold"
                                    },
                                }}
                                wrapperStyle={{
                                    left: {
                                        // backgroundColor: '#E6F5F3',
                                        backgroundColor: '#e0e0e0',
                                        borderRadius: 20,
                                        // padding: 15,
                                        borderBottomLeftRadius: 0,
                                        marginBottom: 25
                                    },
                                    right: {
                                        backgroundColor: '#9966cc',
                                        borderRadius: 20,
                                        // padding: 15,
                                        borderBottomRightRadius: 0,
                                        borderTopRightRadius: 20,
                                        marginBottom: 10,
                                        marginRight: 10
                                    },
                                }}
                            />
                        );
                    }}
                    user={{
                        _id: 1,
                    }}
                />
            </View>

        </View>
        // </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        marginTop: 15,
    },
    separator: {
        marginVertical: 8,
    },
})
