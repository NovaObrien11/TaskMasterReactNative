import { Image, View, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import Notes from "./Notes";

function TaskDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={{ uri: props.imageSource }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.description}>{props.description}</AppText>
        <AppText style={styles.completeBy}>{props.completeBy}</AppText>

        <Notes title="Don't put the cottons in the dryer"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  description: {},
  completeBy: {},
});

export default TaskDetailsScreen;
