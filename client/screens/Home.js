import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          height: "100%",
        }}
      >
        <Header />
        <SearchBar />
        <MenuButtons />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
