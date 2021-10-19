import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Anton Jeejo",
    photo:
      "https://pbs.twimg.com/profile_images/1292721383546318850/KU8pErTW_400x400.jpg",
  },
  {
    type: "contact",
    name: "Elon Musk",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
  },
  {
    type: "contact",
    name: "Jeff Bezos",
    photo:
      "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg",
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {contactMenuButtons.map((contact, index) => {
        return (
          <View style={styles.row} key={index}>
            {contact.type === "starred" ? (
              <View style={styles.starredIcon}>
                <AntDesign name="star" size={30} color="#efefef" />
              </View>
            ) : (
              <Image source={{ uri: contact.photo }} style={styles.image} />
            )}
            <Text style={styles.text}>{contact.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
