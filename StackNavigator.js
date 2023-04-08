import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./components/Homescreen";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
  );
};
export default MyStack;
