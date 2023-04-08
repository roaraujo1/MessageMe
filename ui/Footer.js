import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MessageMe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 300,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    color: "pink",
  },
});
export default Footer;
