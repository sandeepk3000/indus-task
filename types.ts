export type TaskFilter = "all" | "active" | "completed";
export type Task = {
  id: string;
  title: string;
  content?: string;
  time: string;
  date: string;
  completed: boolean;
};