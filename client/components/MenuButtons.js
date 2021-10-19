import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const buttons = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#ff751f",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

const MenuButtons = () => {
  const navigation = useNavigation();

  const openMeeting = () => {
    navigation.navigate("Room");
  };
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <View style={styles.buttonContainer} key={button.id}>
          <TouchableOpacity
            onPress={() => openMeeting()}
            style={{
              ...styles.button,
              backgroundColor: button.customColor
                ? button.customColor
                : "0470dc",
            }}
          >
            <FontAwesome name={button.name} size={23} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.menuText}>{button.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 5,
    fontWeight: "600",
  },
});
