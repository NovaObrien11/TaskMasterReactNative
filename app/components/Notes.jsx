import { View, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

function Notes(props) {
  return (
    <View>
      <AppText style={styles.title}>{props.title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "tomato",
  },
});
export default Notes;
