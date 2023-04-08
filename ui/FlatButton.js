import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const FlatButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fdfd96",
    top: 80,
    margin: 5,
    width: 300,
    alignSelf: "center",

  },
  title: {
    color: "pink",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default FlatButton;
