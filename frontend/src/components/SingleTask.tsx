import { Checkbox, IconButton } from "@mui/material";
import { useAppDispatch } from "../hooks";
import { toggleTaskAsync } from "../features/tasks/taskSlice";

function SingleTask({ task, onDeleteTask, onToggleTask }: any) {
  const dispatch = useAppDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTaskAsync(task._id));
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.2rem",
        fontSize: "18px",
      }}
    >
      <Checkbox onChange={() => handleToggleTask} checked={task.status} />
      <span style={task.status ? { textDecoration: "line-through" } : {}}>
        {task.title}
        <IconButton size="small" onClick={() => onDeleteTask(task.id)}>
          ❌
        </IconButton>
      </span>
    </li>
  );
}

export default SingleTask;
