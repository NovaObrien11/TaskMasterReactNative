import React from "react";
import Task from "../components/Task";
import { FlatList, View } from "react-native";
import Screen from "../components/Screen";
import TestData from "../Data/TestData";
const tasks = TestData.Tasks;

function TasksScreen(props) {
  return (
    <Screen>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            imageSource={item.imageSource}
            completeBy={item.completeBy}
            onPress={() => console.log("clicked")}
            onDelete={() => console.log("Delete clicked")}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              left: "25%",
              width: "50%",
              height: 1,
              backgroundColor: "lightblue",
            }}
          />
        )}
      />
    </Screen>
  );
}

export default TasksScreen;
