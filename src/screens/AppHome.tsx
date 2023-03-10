import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList, Image, Alert,
} from "react-native";
import { CardItem, Icon } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";
import IMAGE_01 from "../assets/images/01.jpg";
import IMAGE_02 from "../assets/images/02.jpg";
import IMAGE_03 from "../assets/images/03.jpg";
import IMAGE_04 from "../assets/images/04.jpg";
import {useNavigation} from "@react-navigation/native";
import NavigationNames from "../navigation/NavigationNames";
import CardItem2 from "../components/CardItem2";

const AppHome = () => {

  const navigation = useNavigation();

  const APPS = [
    {
      id: 1,
      name: "Dating",
      isOnline: true,
      match: "78",
      description:
          "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
      message:
          "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
      image: IMAGE_01,
      onPress: () => navigation.navigate(NavigationNames.DatingTabs)
    },
    {
      id: 2,
      name: "Social Media",
      match: "93",
      description:
          "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
      isOnline: false,
      message: "Someone like you. Someone who'll rattle the cages.",
      image: IMAGE_02,
      onPress: () => {Alert.alert('GODX', 'Feature coming soon')},
    },
    {
      id: 3,
      name: "Tiktok",
      match: "45",
      description:
          "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
      isOnline: false,
      message:
          "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
      image: IMAGE_03,
      onPress: () => {Alert.alert('GODX', 'Feature coming soon')},
    },
    {
      id: 4,
      name: "Fellowship",
      match: "88",
      description:
          "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
      isOnline: true,
      message: "Bats frighten me. It's time my enemies shared my dread.",
      image: IMAGE_04,
      onPress: () => {Alert.alert('GODX', 'Feature coming soon')},
    },
  ]

  return (<ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
  >
    <View style={styles.containerMatches}>
      <View style={styles.top}>
        <Text style={styles.title}>GODX Apps</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20}/>
        </TouchableOpacity>
      </View>

      <View style={{height: 50}}>

      </View>

      <FlatList
          numColumns={2}
          data={APPS}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
              <TouchableOpacity>
                <CardItem2
                    image={item.image}
                    name={item.name}
                    isOnline={item.isOnline}
                    hasVariant
                    onPress = {item.onPress}
                />
              </TouchableOpacity>
          )}
      />
      {/*<Image source={require('../')}*/}
    </View>
  </ImageBackground>)
};

export default AppHome;
