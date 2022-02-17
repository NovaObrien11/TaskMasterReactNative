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
import colors from "../config/Colors";

function Task({id, title, completeBy, imageSource, onPress, onDelete, taskAssignedTo }) {
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
      <Swipeout style={styles.swipeout} right={swipeOutButton}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.completeBy}>Deadline {completeBy}</AppText>
            <View style={{flexDirection: "row",     justifyContent: "space-between"
            }}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={ styles.completed }>Completed</AppText>
            </View>
          <AppText style={ styles.assignedTo }>Assigned: {taskAssignedTo}</AppText>
        </View>
      </Swipeout>
    </View>
  );
}

const styles = StyleSheet.create({
  assignedTo: {
    color: colors.secondary,
    fontSize: 14,
  },
  completeBy: {
    color: colors.warning,
    fontSize: 14,
    position: "absolute",
    end: 10,
    padding: 10,
  },
  completed: {
    color: 'green',
  },
  detailsContainer: {
    borderColor: "darkgrey",
    backgroundColor: colors.primary,
    borderTopWidth: 1.5,
    borderBottomLeftRadius: 75,   
    borderTopLeftRadius: 75,
    padding: 30,
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    height: 200,
  },
  swipeout: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: colors.dark,
    paddingLeft: 10,
    paddingVertical: 10
  },
  task: {
    marginBottom: 20,
    borderRadius: 15,
    
  },
  title: {
    fontSize: 24,
    color: colors.dark,
    fontWeight: "bold",
  },
});

export default Task;
