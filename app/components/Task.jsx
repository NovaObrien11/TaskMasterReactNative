import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";

import React from "react";
import Swipeout from "react-native-swipeout";

function Task({ title, completeBy, imageSource, onPress, renderRightActions }) {
  return (
    <View style={styles.task}>
      <TouchableHighlight underlayColor={"lightgrey"} onPress={onPress}>
        <Image style={styles.image} source={{ uri: imageSource }} />
      </TouchableHighlight>
      <Swipeout right={renderRightActions}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.completeBy}>Deadline {completeBy}</AppText>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={{ color: "green" }}>Completed</AppText>
        </View>
      </Swipeout>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  completeBy: {
    color: "dodgerblue",
    fontSize: 14,
    position: "absolute",
    end: 10,
    padding: 10,
  },
  detailsContainer: {
    borderColor: "black",
    borderTopWidth: 1.5,
    padding: 20,
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: "bold",
  },
});

export default Task;
