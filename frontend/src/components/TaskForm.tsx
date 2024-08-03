import { Box, Grid, Typography } from "@mui/material";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import SelectInput from "../components/SelectInput";
import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { addTaskAsync } from "../features/tasks/taskSlice";

function TaskForm({ onAddTask, sortBy, setSortBy }: any) {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = { title, status: false };
    dispatch(addTaskAsync(title.trim()));
    console.log(newTask);

    onAddTask(newTask);

    setTitle("");
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h4" align="center">
          Task Management System
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <TextInput
                title="Task Title"
                name="task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your task"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button type="submit" variant="contained" sx={{ marginTop: 4 }}>
                Add Task
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectInput
                size="small"
                name="country"
                value={sortBy}
                onChange={(e) => setSortBy(() => e.target.value)}
                title={
                  <Typography fontSize={16} fontWeight={600}>
                    Filter By
                  </Typography>
                }
                menuItems={[
                  { title: "Completed", value: "completed" },
                  { title: "Pending", value: "pending" },
                ]}
                sx={{
                  marginBottom: 3,
                  p: 0.5,
                  borderRadius: 1,
                  outline: "none",
                  border: "1px solid",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderStyle: "none",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default TaskForm;
