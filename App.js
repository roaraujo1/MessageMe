import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./components/Homescreen";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator>
        <View>
          <Homescreen />
        </View>
      </StackNavigator>
    </NavigationContainer>
  );
}
