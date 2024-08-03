import { Checkbox, IconButton } from "@mui/material";

function SingleTask({ task, onDeleteTask, onToggleTask }: any) {
  const handleToggle = () => {
    onToggleTask(task._id);
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
      <Checkbox onChange={() => handleToggle} checked={task.completed} />
      <span style={task.completed ? { textDecoration: "line-through" } : {}}>
        {task.title}
        <IconButton size="small" onClick={() => onDeleteTask(task.id)}>
          ❌
        </IconButton>
      </span>
    </li>
  );
}

export default SingleTask;
