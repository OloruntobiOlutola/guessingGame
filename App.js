import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "./src/components/MyButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MyButton title="Add" color="#cab" style={styles.button} />
      <StatusBar style="auto" />
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
  button: {
    color: "#090",
  },
});
