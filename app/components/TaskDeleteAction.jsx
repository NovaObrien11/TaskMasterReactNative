import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TaskDeleteAction(props) {
  return (
    <View style={styles.container}>
      {/* <MaterialCommunityIcons>
        name="trash-can" size={35}
        color={"green"}
      </MaterialCommunityIcons> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    width: 70,
  },
});

export default TaskDeleteAction;
