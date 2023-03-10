import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import NavigationNames from '../../navigation/NavigationNames';
import { PRIMARY_COLOR } from "../../assets/styles";

const slides = [
  {
    key: 'one',
    title: 'Meet New People',
    // text: 'with Chat, Voice calls and \n Video calls',
    image: require("../../assets/images/intro-screen/pic1.jpg"),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Make Friends',
    // text: 'Securely send money between \n parrot users',
    image: require("../../assets/images/intro-screen/pic3.jpg"),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Be truly happy',
    // text: 'End-to-end encryption on all \n communication between users',
    image: require("../../assets/images/intro-screen/pic4.jpg"),
    backgroundColor: '#22bcb5',
  }
];

const Splash = () => {
    const [showRealApp, setShowRealApp] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const sliderRef = useRef();
    const navigation = useNavigation();

    // const dimension = useDimensions().window;

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  const _renderNextButton = () => {
    return (
        <TouchableOpacity
            onPress={() => handleNextCLicked()}
            style={{
                // marginTop: -20,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width: "80%",
                height: 50,
                borderRadius: 10,
                backgroundColor: PRIMARY_COLOR,
                marginBottom: 30,
            }}>
                <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
    );
};

const _renderSkipButton = () => {
    return (
            <Text style={styles.skipBtnText}
            onPress={() => navigation.navigate(NavigationNames.Login)}
            >Skip</Text>
    );
};

const _renderDoneButton = () => {
  return (
      <TouchableOpacity
          onPress={() => _onDone()}
          style={{
              // marginTop: -20,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: "80%",
              height: 50,
              borderRadius: 10,
              backgroundColor: PRIMARY_COLOR,
              marginBottom: 30,
          }}>
              <Text style={styles.nextBtnText}>Done</Text>
      </TouchableOpacity>
  );
};

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    navigation.navigate(NavigationNames.Login);
    setShowRealApp(true);
  }


  const handleNextCLicked = () => {
    let current = sliderRef?.current;
    let index = current?.state?.activeIndex;
    console.log(index)

    current?.goToSlide(index + 1);
  }

  const handleSkipClicked = () => {
    // let current = sliderRef?.current;
    // let index = current?.state?.activeIndex;

    // current?.goToSlide(2);
    // navigation.navigate(NavigationNames.PhoneSignup)
  }

    // if (showRealApp) {
    //     return <App />;
    // } else {
        return <AppIntroSlider 
                    renderItem={_renderItem}
                    data={slides} 
                    // onDone={_onDone}
                    dotClickEnabled
                    showSkipButton={true}
                    renderNextButton={_renderNextButton}
                    renderSkipButton={_renderSkipButton}
                    renderDoneButton={_renderDoneButton}
                    bottomButton
                    ref={sliderRef}
                    activeDotStyle={{backgroundColor: '#0aad47'}}
                     />;
    // }
}

export default Splash;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: 'black',
        marginBottom: 30,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    image: {
        width: 250,
        height: 400,
        resizeMode: 'stretch',
        marginBottom: 20,
        borderTopLeftRadius: 10,
    },
    nextBtnText: {
        color: 'white',
    },
    skipBtnText: {
        color: 'black',
        alignSelf: 'center',
        // marginBottom: 20,
    }
})