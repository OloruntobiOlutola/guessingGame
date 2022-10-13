import { Button, StyleSheet, View } from "react-native";

export default function MyButton(props) {
  return (
    <View style={{ ...styles.button, ...props.style }}>
      <Button title={props.title} color={props.color} onPress={props.onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    textAlign: "center",
    padding: 7,
    flexGrow: 1.5,
  },
});
