import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import SingleTask from "./SingleTask";
import { fetchTasks } from "../features/tasks/taskSlice";
import { Task } from "../types";
import { toggleTaskAsync } from "../features/tasks/taskSlice";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
  sortBy: string;
  setSortBy: (sortBy: "pending" | "completed") => void;
}

function TaskList({
  onDeleteTask,
  onToggleTask,
  sortBy,
  setSortBy,
}: TaskListProps) {
  const dispatch = useAppDispatch();
  const { tasks, status, error } = useAppSelector((state) => state.tasks);

  console.log(tasks);

  useEffect(
    function () {
      if (status === "idle") {
        dispatch(fetchTasks());
      }
    },
    [status, dispatch]
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(tasks)) {
    return <div>No tasks available</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  let sortedTasks = [...tasks];
  if (sortBy === "completed") {
    sortedTasks.sort((a, b) => Number(b.completed) - Number(a.completed));
  }

  //   if (sortBy === "pending") sortedTasks = tasks;

  //   if (sortBy === "completed")
  //     sortedTasks = tasks
  //       .slice()
  //       .sort((a, b) => Number(b.completed) - Number(a.completed));

  const handleToggleTask = (id: string) => {
    dispatch(toggleTaskAsync(id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 3.2,
        alignItems: "center",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          width: "80%",
          overflow: "scroll",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.2rem",
          justifyContent: "center",
          alignContent: "start",
        }}
      >
        {sortedTasks?.map((task) => (
          <SingleTask
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={handleToggleTask}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
