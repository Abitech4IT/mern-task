import { Container } from "@mui/material";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ITask } from "./types";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [sortBy, setSortBy] = useState("");

  function handleAddTasks(task: ITask) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id: string) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <Container
      sx={{
        backgroundColor: "lightblue",
        height: "400px",
        marginTop: "100px",
        padding: 5,
      }}
    >
      <TaskForm
        sortBy={sortBy}
        setSortBy={setSortBy}
        onAddTask={handleAddTasks}
      />
      <TaskList
        tasks={tasks}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onDeleteTask={handleDeleteTask}
      />
    </Container>
  );
}

export default App;
