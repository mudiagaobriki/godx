import React from 'react';
import { Image, StyleSheet, ScrollView, TextInput, Text, View,
useWindowDimensions, SafeAreaView } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import NavigationNames from '../../navigation/NavigationNames';
import { PRIMARY_COLOR } from "../../assets/styles";

// console.log({useKeyboard})

const Login = () => {
    const [checked, setChecked] = React.useState(false);

    const {height, width} = useWindowDimensions()
    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate(NavigationNames.AppHome);
    }

    const handleSignup = () => {
        // console.log(NavigationNames.PhoneSignup)
        navigation.navigate(NavigationNames.PhoneSignup);
    }

    return (
        <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/godx_logo.png')} />
            {/*<Image style={styles.faceid} source={require('../../assets/images/Face_ID_logo.png')} />*/}
            {/*<Text>Face ID</Text>*/}
            <View style={{width: width - 100}}>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                    style={[styles.textInput, {width: width - 100}]}
                    placeholder="Username"
                    keyboardType='numeric'
                />
            </View>

            <View style={{width: width - 100}}>
                <Text style={styles.inputLabel}>Password</Text>
                 <TextInput
                    style={[styles.textInput, {width: width - 100}]}
                    placeholder="Password"
                 />
            </View>
             <View style={{flexDirection: 'row', 
             justifyContent: "space-between",
             width: width-100,
             alignItems: 'center',
             }}>
             <View style={{flexDirection: 'row', 
                            // justifyContent: 'center', 
                            alignItems: 'center',
                            alignSelf: 'flex-start',
                            }}>
             {/*<Checkbox*/}
             {/*   status={checked ? 'checked' : 'unchecked'}*/}
             {/*   onPress={() => {*/}
             {/*       setChecked(!checked);*/}
             {/*   }}*/}
             {/*   />*/}
             {/*<Text>Keep me signed in</Text>*/}
             </View>
             <Text style={{textDecorationLine: 'underline', marginTop: -10, fontSize: 12,}}>Forgot Password?</Text>
             </View>

             <Button dark mode="contained" onPress={handleLogin}
                buttonColor={PRIMARY_COLOR} contentStyle={[styles.button,{width: width - 100}]}
                style={{marginTop: 50, borderRadius: 30}} labelStyle={styles.buttonLabel}>
                Login
             </Button>
            <Text style={{marginVertical: 20}}>Or</Text>

             {/*<Text style={{marginTop: 100}}>Forgot Password?</Text>*/}
             <Button dark mode="contained" onPress={() => handleSignup()}
                buttonColor="#000000" contentStyle={[styles.button,{width: width - 100}]}
                style={{marginTop: 10, borderRadius: 30}} labelStyle={styles.buttonLabel}>
                Login with Phone Number
             </Button>


            <View
                style={{
                    marginTop: 10,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 30,
                }}>
                <Image source={require("../../assets/images/googleLogo.png")} style={styles.socialLogo} />
                <Image source={require("../../assets/images/facebookLogo.png")} style={styles.socialLogo} />
                {/*<Image source={require("../../assets/images/googleLogo.png")} style={styles.socialLogo} />*/}
            </View>
            <View style={{ flexDirection: 'row',
                marginTop: 60,
                width: 150,
                justifyContent: 'space-around',
                alignItems: 'center'}}>
                <Text>New to GODX?</Text>
                <Text onPress={() => navigation.navigate(NavigationNames.Signup)} style={{textDecorationLine: 'underline'}}>Signup</Text>
            </View>
            {/*<Text*/}
            {/*    style={*/}
            {/*        {*/}
            {/*            color: '#000000',*/}
            {/*            alignSelf: 'center',*/}
            {/*            marginTop: 25,*/}
            {/*        }*/}
            {/*    }>*/}
            {/*    New to GODX?{' '}*/}
            {/*    <TouchableOpacity>*/}
            {/*        <Text*/}
            {/*            style={{*/}
            {/*                color: '#000000',*/}
            {/*                textDecorationLine: 'underline',*/}
            {/*            }}>*/}
            {/*            Signup*/}
            {/*        </Text>*/}
            {/*    </TouchableOpacity>*/}
            {/*</Text>*/}
            
        </ScrollView>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingTop: 80,
    },
    logo: {
        width: 200,
        height: 70,
        resizeMode: 'stretch',
        marginBottom: 40,
    },
    socialLogo:{
        width: 30,
        height: 30,
        marginHorizontal: 10,
    },
    faceid: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        marginBottom: 10,
    },
    textInput: {
        // width: "90%",
        borderRadius: 30,
        height: 50,
        backgroundColor:'#e0e0e0',
        marginBottom: 20,
        marginTop: 5,
        paddingHorizontal: 15,
    },
    button: {
        height: 50,
    },
    buttonLabel: {
        fontSize: 16,
    },
    inputLabel: {
        alignSelf: 'flex-start'
    }
})