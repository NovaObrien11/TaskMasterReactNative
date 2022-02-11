import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TasksScreen from "./app/Screens/TasksScreen";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "lightgrey",
        flex: 1,
      }}
    >
      <TasksScreen />
    </View>
  );
}
