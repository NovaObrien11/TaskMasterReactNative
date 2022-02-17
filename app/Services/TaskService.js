import TestData from "../Data/TestData";
import {useState} from "react";

class TaskService {
    
    deleteTaskById (id){
        let tasks = TestData.Tasks
        TestData.Tasks = tasks.filter(t => t.id !== id)
        // console.log(TestData.Tasks)
    }
    
    getMyTasks(){
        let tasks = TestData.Tasks
        return tasks.filter(t => t.taskAssignedTo === TestData.ActiveUser.title)
        
    }
}
export const taskService = new TaskService();
