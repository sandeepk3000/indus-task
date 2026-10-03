import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../types";


const getTask = async (taskId: string): Promise<Task | null> => {
    console.log("Fetching task with ID:", taskId);
  try {
    const taskData = await AsyncStorage.getItem(`task_${taskId}`);
    if (taskData) {
      return JSON.parse(taskData) as Task;
    }
    return null;
  } catch (error) {
    console.error("Error retrieving task:", error);
    return null;
  }
};
const saveTask = async (task: Task): Promise<void> => {
    console
  try {
    await AsyncStorage.setItem(`task_${task.id}`, JSON.stringify(task));
  } catch (error) {
    console.error("Error saving task:", error);
  }
};

const deleteTask = async (taskId: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(`task_${taskId}`);    
    } catch (error) {
    console.error("Error deleting task:", error);
    }
};
const getAllTasks = async (): Promise<Task[]> => {
  try {
    const keys = await AsyncStorage.getAllKeys();

    const tasks: Task[] = [];
    for (const key of keys) {
      if (key.startsWith("task_")) {
        const taskData = await AsyncStorage.getItem(key);
    
        if (taskData) {
          tasks.push(JSON.parse(taskData) as Task);
        }
      }
    }
    return tasks;
  } catch (error) {
    console.error("Error retrieving all tasks:", error);
    return [];
  }
};

export { getTask, saveTask, deleteTask, getAllTasks };