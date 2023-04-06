import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./components/Homescreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Homescreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
