import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Task, TaskState } from "../../types";

const baseURL = "http://localhost:5000/api/v1/tasks";

const initialState: TaskState = {
  tasks: [],
  sortBy: "pending",
  status: "idle",
  error: null,
};

// Async thunk for fetching tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  //   const response = await axios.get<Task[]>(baseURL);
  //   return response.data;
  const res = await fetch(baseURL);
  const { data } = await res.json();
  return data;
});

// Async thunk for adding a task
export const addTaskAsync = createAsyncThunk(
  "tasks/addTask",
  async (title: string) => {
    const response = await axios.post<Task>(`${baseURL}/create`, {
      title,
    });
    return response.data;
  }
);

// Async thunk for toggling a task
export const toggleTaskAsync = createAsyncThunk(
  "tasks/toggleTask",
  async (id: string) => {
    const response = await axios.patch<Task>(`${baseURL}/update-status/${id}`);
    return response.data;
  }
);

// Async thunk for removing a task
export const removeTaskAsync = createAsyncThunk(
  "tasks/removeTask",
  async (id: string) => {
    await axios.delete(`${baseURL}/${id}`);
    return id;
  }
);

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<"pending" | "completed">) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(toggleTaskAsync.fulfilled, (state, action) => {
        const task = state.tasks.find((task) => task.id === action.payload.id);
        if (task) {
          task.completed = action.payload.completed;
        }
      })
      .addCase(removeTaskAsync.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
