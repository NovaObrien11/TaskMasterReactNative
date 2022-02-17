import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import DefaultStyles from "../../config/DefaultStyles";

function AppText({ children, style }) {
  return <Text style={[DefaultStyles.text, style]}>{children}</Text>;
}

// const styles = StyleSheet.create({
//   text: {
//     fontWeight: "bold",
//     color: "tomato",

//     ...Platform.select({
//       ios: {
//         fontSize: 20,
//         fontFamily: "Avenir",
//       },
//       android: {
//         fontSize: 24,
//         fontFamily: "Roboto",
//       },
//     }),
//   },
// });

export default AppText;
