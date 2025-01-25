import { create } from "zustand";

export interface Task {
    work: string;
    completed: boolean;
}

export interface Store {
    tasks: Task[];
    addTask: (task: string) => void;
    deleteTask: (index: number) => void;
    toggleTask: (index: number) => void;
}

export const useStore = create<Store>((set) => ({
  tasks: [] as Task[],
  addTask: (work) => set((state) => ({ tasks: [...state.tasks, { work, completed: false }] })),
  deleteTask: (index) => set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) })),
  toggleTask: (index) => set((state) => ({
    tasks: state.tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task)
  })),
}));
