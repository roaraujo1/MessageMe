import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import FlatButton from "../ui/FlatButton";

const CreateAccount = ({ navigation }) => {
  return (
    <View>
      <Text>Enter Username: </Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Enter Password: </Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <FlatButton title={"Create Account"} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateAccount;
