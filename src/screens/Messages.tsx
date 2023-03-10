import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import { Icon, Message } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";
import {useNavigation} from "@react-navigation/native";
import NavigationNames from "../navigation/NavigationNames";

const Messages = () => {
  const navigation = useNavigation();

  return (<ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
  >
    <View style={styles.containerMessages}>
      <View style={styles.top}>
        <Text style={[styles.title,{marginLeft: 30}]}>Messages</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={DEMO}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>navigation.navigate(NavigationNames.Chat)}>
            <Message
              image={item.image}
              name={item.name}
              lastMessage={item.message}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </ImageBackground>
)};

export default Messages;
