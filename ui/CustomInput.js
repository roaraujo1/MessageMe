import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CustomInput;
