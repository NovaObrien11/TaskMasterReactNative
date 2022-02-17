import React, {useState} from "react";
import Task from "../components/Task";
import {FlatList} from "react-native";
import Screen from "../components/Screen";
import TestData from "../Data/TestData";
import {ListItemSeparator} from "../components/ListItemSeparator";
import {taskService} from "../Services/TaskService";

const initialTasks = TestData.Tasks;


function TasksScreen(props) {
    
    const [tasks, setTasks] = useState(initialTasks);
    const [refreshing, setRefreshing] = useState(false);
    
    const handleDelete = task => {
        taskService.deleteTaskById(task.id)
        setTasks(tasks.filter(t => t.id !== task.id))
    }
    
  return (
    <Screen>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <Task 
            id={item.id}
            title={item.title}
            imageSource={item.imageSource}
            completeBy={item.completeBy}
            onPress={() => console.log("clicked")}
            onDelete={() => handleDelete(item)}
          />
        )}
        ItemSeparatorComponent={() => ListItemSeparator()}
        refreshing={refreshing}
        onRefresh={() => setTasks(TestData.Tasks)
        }
      />
    </Screen>
  );
}

export default TasksScreen;
