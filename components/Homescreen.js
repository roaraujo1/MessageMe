import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FlatButton from "../ui/FlatButton";
import Footer from "../ui/Footer";

const Homescreen = (props) => {
  return (
    <View>
      <Image source={require("../assets/pictures/message.jpeg")} style= {styles.image}></Image>
      <FlatButton title={"Login"} onPress={props.handleSubmit} />
      <FlatButton title={"Create Account"} onPress={props.handleSubmit} />
      <Footer />
    </View>
  );

};

const styles = StyleSheet.create({
  image:{
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: "center",
    bottom: 100,
  },

});
export default Homescreen;
