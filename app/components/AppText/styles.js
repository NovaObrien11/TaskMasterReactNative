import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "black",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avernir",
  },
});

export default styles;
