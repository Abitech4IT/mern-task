export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}
export interface TaskResponse {
  data: ITask[];
  message?: string;
  success?: boolean;
}

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export interface TaskState {
  tasks: Task[];
  sortBy: "pending" | "completed";
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const initialState: TaskState = {
  tasks: [],
  sortBy: "pending",
  status: "idle",
  error: null,
};
