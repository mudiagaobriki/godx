import React, {useRef, useState} from 'react';
import { Image, StyleSheet, ScrollView, TextInput, Text, View,
useWindowDimensions, Platform, TouchableOpacity } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
// import { requestOTP, verifyOTP } from '../../utils/users'
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationNames from '../../navigation/NavigationNames';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSignIn } from '../../redux/slices/authSlice';
// import { storeData } from '../../utils/deviceStorage';

// console.log({useKeyboard})

const OTPConfirmation = () => {
    const [checked, setChecked] = React.useState(false);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");

    const {height, width} = useWindowDimensions()
    const navigation = useNavigation();
    const route = useRoute();
    const otpInput = useRef(null);
    // const dispatch = useDispatch();

    // const username = route?.params?.username;
    // console.log(user)
    // const {username,email} = user;

    // const handleNext = async () => {
    //     console.log('Value : ', value);
    //     let payload = {
    //         username: username,
    //         email: ""
    //     }
    //
    //     console.log({payload})
    //
    //     let k = await verifyOTP("+2348138885831",value)
    //
    //     // perform logic and dispatch user to redux. Also dispatch the user token to redux
    //     storeData("isLoggedIn","yes")
    //     .then(() => {
    //         storeData('username',username)
    //         .then(() => {
    //             dispatch(setSignIn(payload));
    //         })
    //     })
    //
    //     // navigation.navigate(NavigationNames.MessagesList)
    // }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/icon.png')} />
            {/* <TextInput
                style={[styles.textInput, {width: width - 80}]}
                placeholder="Phone Number"
                keyboardType='numeric'
             />
             <TextInput
                style={[styles.textInput, {width: width - 80}]}
                placeholder="Password/OTP"
             /> */}
             <Text style={styles.signupText}>Confirm OTP</Text>

             <OTPTextInput
								ref={otpInput}
								inputCount={6}
								containerStyle={{
									flex: 1,
									justifyContent: 'center',
									width: width - 80,
								}}
								textInputStyle={{
									height: 55,
									width: 40,
									backgroundColor: '#f0f0ef',
									borderColor: '#e0e0e0',
									borderRadius: 10,
									color: 'black',
								}}
								tintColor={'#e0e0e0'}
								offTintColor={'#e0e0e0'}
								// handleTextChange={text => console.log(text)}
								// value={values.otp}
								handleTextChange = {text=>setValue(text)}
								underlineColor="transparent"
								activeUnderlineColor="transparent"
							/>

             <TouchableOpacity
                onPress={() => navigation.navigate(NavigationNames.AppHome)}
                style={[styles.nextButton, {width: width-80}]}>
                <Text
                onPress={() => navigation.navigate(NavigationNames.AppHome)}
                style={styles.nextText}>Next</Text>
             </TouchableOpacity>
            
        </ScrollView>
    );
};

export default OTPConfirmation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingTop: 50,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        marginBottom: 20,
    },
    textInput: {
        // width: "90%",
        color: '#000000',
        borderRadius: 10,
        height: 60,
        backgroundColor:'#f0f0f0',
        marginTop: 20,
        paddingHorizontal: 15,
    },
    nextButton: {
        backgroundColor: 'black',
        height: 60,
        marginTop: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 50,
    },
    signupText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 50
    },
    nextText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
    }
})