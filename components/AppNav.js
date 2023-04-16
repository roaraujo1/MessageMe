import StackNavigator from "../StackNavigator";
import Homescreen from "./Homescreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

const AppNav = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
        <Homescreen />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default AppNav;
