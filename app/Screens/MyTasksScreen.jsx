import React, {useState} from 'react';
import {FlatList, View, StyleSheet} from "react-native";
import Screen from "../components/Screen";
import {taskService} from "../Services/TaskService";
import Task from "../components/Task";
import colors from "../config/Colors";

const initMyTasks = taskService.getMyTasks();


function MyTasksScreen() {
    const [myTasks, setMyTasks] = useState(initMyTasks);
    
    const handleOnDelete = id =>{
        // taskService.deleteTaskById(id)
        setMyTasks(myTasks.filter(t => t.id !== id))
    }
    return (
        <Screen style={styles.screen}>
            <View>
                <FlatList data={myTasks} renderItem={({item}) =>
                    <Task title={item.title} 
                          imageSource={item.imageSource} 
                          completeBy={item.completeBy} 
                          taskAssignedTo={item.taskAssignedTo}
                            onDelete={() => handleOnDelete(item.id)}
                    />
                }
                keyExtractor={myTask => myTask.id.toString()} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.secondary,
        padding: 5
    },
})

export default MyTasksScreen;