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
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "yellow",
  },
  title: {
    color: "pink",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontsize: 16,
    textAlign: "center",
  },
});

export default FlatButton;
