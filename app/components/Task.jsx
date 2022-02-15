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

function Task({ title, completeBy, imageSource, onPress, onDelete }) {
  const swipeOutButton = [{
    text: 'Delete',
    backgroundColor: 'red',
    onPress: () => {
      onDelete();
    }
  }];
  
  return (
    <View style={styles.task}>
      <TouchableHighlight underlayColor={"lightgrey"} onPress={onPress}>
        <Image style={styles.image} source={{ uri: imageSource }} />
      </TouchableHighlight>
      <Swipeout right={swipeOutButton}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.completeBy}>Deadline {completeBy}</AppText>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={ styles.completed }>Completed</AppText>
        </View>
      </Swipeout>
    </View>
  );
}

const styles = StyleSheet.create({

  completeBy: {
    color: "dodgerblue",
    fontSize: 14,
    position: "absolute",
    end: 10,
    padding: 10,
  },
  completed: {
    color: 'green',
  },
  detailsContainer: {
    flexDirection : "row",
    borderColor: "darkgrey",
    backgroundColor: 'white',
    borderTopWidth: 1.5,
    borderBottomLeftRadius: 75,   
    borderTopLeftRadius: 75,
    padding: 40,
    justifyContent: "space-between"


  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    height: 200,
  },
  task: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Task;
