import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 50,
  },
  text: {
    color: "tomato",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
  },
});

export default AppButton;
