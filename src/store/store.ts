import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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

export const useStore = create<Store>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (work: string) =>
        set((state) => ({ tasks: [...state.tasks, { work, completed: false }] })),
      deleteTask: (index: number) =>
        set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) })),
      toggleTask: (index: number) =>
        set((state) => ({
          tasks: state.tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
          ),
        })),
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => console.log("rehydrated"),
    }
  )
);






// (set) => ({
//     tasks: [] as Task[],
//     addTask: (work) => set((state) => ({ tasks: [...state.tasks, { work, completed: false }] })),
//     deleteTask: (index) => set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) })),
//     toggleTask: (index) => set((state) => ({
//       tasks: state.tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task)
//     })),
//   })