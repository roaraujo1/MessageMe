import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FlatButton from "../ui/FlatButton";
import Footer from "../ui/Footer";

const Homescreen = (props) => {
  return(
    <View>
      <FlatButton title={"Login"} onPress={props.handleSubmit} />
      <FlatButton title={"Create Account"} onPress={props.handleSubmit} />
      <Footer/>
    </View>

  );
};
export default Homescreen;
