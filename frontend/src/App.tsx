import { Container } from "@mui/material";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ITask } from "./types";
import { useAppDispatch } from "./hooks";
import { toggleTaskAsync } from "./features/tasks/taskSlice";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [sortBy, setSortBy] = useState("");
  const dispatch = useAppDispatch();

  function handleAddTasks(task: ITask) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id: string) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id: string) {
    dispatch(toggleTaskAsync(id));
  }

  // function handleClearTaskList() {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete all lists?"
  //   );

  //   if (confirmed) setTasks([]);
  // }

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
        onToggleTask={handleToggleTask}
      />
    </Container>
  );
}

export default App;
