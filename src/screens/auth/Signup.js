import React from 'react';
import { Image, StyleSheet, ScrollView, TextInput, Text, View,
useWindowDimensions, SafeAreaView } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import NavigationNames from '../../navigation/NavigationNames';
import { PRIMARY_COLOR } from "../../assets/styles";
import DropDownPicker from "react-native-dropdown-picker";

// console.log({useKeyboard})

const  GENDERS = [
    {
        key:1,
        value: 'Male'
    },
    {
        key:2,
        value: 'Female'
    },
    {
        key:3,
        value: 'Others'
    }
]

const Signup = () => {
    const [gender, setGender] = React.useState(false);
    const [showGenderPicker, setShowGenderPicker] = React.useState(false);
    // const [showGenderPicker, setShowGenderPicker] = React.useState(false);

    const {height, width} = useWindowDimensions()
    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate(NavigationNames.DatingTabs);
    }

    const handleSignup = () => {
        // console.log(NavigationNames.PhoneSignup)
        navigation.navigate(NavigationNames.Login);
    }

    return (
        <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/godx_logo.png')} />
            {/*<Image style={styles.faceid} source={require('../../assets/images/Face_ID_logo.png')} />*/}
            <Text style={{fontSize: 24, fontWeight: '600', marginBottom: 30}}>Sign Up</Text>
            <View style={{width: width - 100}}>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput
                    style={[styles.textInput, {width: width - 100}]}
                    placeholder="First Name"
                    // keyboardType='numeric'
                />
            </View>

            <View style={{width: width - 100}}>
                <Text style={styles.inputLabel}>Last Name</Text>
                <TextInput
                    style={[styles.textInput, {width: width - 100}]}
                    placeholder="Family Name"
                    // keyboardType='numeric'
                />
            </View>

            <View style={{width: width - 100}}>
                <Text style={styles.inputLabel}>Gender</Text>
                <DropDownPicker
                    schema={{
                        label: 'value', // required
                        value: 'value', // required
                        icon: 'icon',
                        parent: 'parent',
                        selectable: 'selectable',
                        disabled: 'disabled',
                    }}
                    listMode="MODAL"
                    searchable
                    // listMode="SCROLLVIEW"
                    placeholder="Select a gender"
                    //searchable={true}
                    placeholderStyle={{ color: 'darkgray' }}
                    labelStyle={{ color: 'darkgray' }}
                    // textStyle={{color: 'black'}}
                    modalTitle={'Users'}
                    open={showGenderPicker}
                    value={gender}
                    // value={currentGender}
                    mode={'BADGE'}
                    theme={'DARK'}
                    items={GENDERS}
                    setOpen={() => {
                        setShowGenderPicker(true);
                    }}
                    onClose={() => {
                        setShowGenderPicker(false);
                    }}
                    // @ts-ignore
                    setValue={async (val: Function) => {
                        const cc = val();
                        // doHandleNext(cc);
                        // console.log('xsxs', cc);

                        setGender(cc);
                    }}
                    style={[styles.textInput, { color:'black', width: width - 100, borderColor: 'transparent' }]}
                    dropDownContainerStyle={{
                        // width: width - 100,
                        backgroundColor: '#e0e0e0',
                        zIndex: 5000,
                        borderWidth: 0,
                        borderColor: 'transparent',
                        color: 'black'
                    }}
                />
            </View>

            <View style={{width: width - 100}}>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                    style={[styles.textInput, {width: width - 100}]}
                    placeholder="Username"
                    // keyboardType='numeric'
                />
            </View>

            <View style={{width: width - 100}}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={[styles.textInput, {width: width - 100}]}
                    placeholder="Email"
                    // keyboardType='numeric'
                />
            </View>

            <View style={{width: width - 100}}>
                <Text style={styles.inputLabel}>Password</Text>
                 <TextInput
                    style={[styles.textInput, {width: width - 100}]}
                    placeholder="Password"
                 />
            </View>

             <Button dark mode="contained" onPress={handleSignup}
                buttonColor={PRIMARY_COLOR} contentStyle={[styles.button,{width: width - 100}]}
                style={{marginVertical: 30, borderRadius: 30}} labelStyle={styles.buttonLabel}>
                Sign Up
             </Button>
            <View style={{height: 50}}></View>
        </ScrollView>

        </SafeAreaView>
    );
};

export default Signup;

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
        marginBottom: 20,
    },
    socialLogo:{
        width: 30,
        height: 30,
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