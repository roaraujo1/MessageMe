import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FlatButton from "../ui/FlatButton";

const Homescreen = (props) => {
  return(
    <View>
      <FlatButton title={"Login"} onPress={props.handleSubmit} />
      <FlatButton title={"Create Account"} onPress={props.handleSubmit} />
    </View>

  );
};
export default Homescreen;
