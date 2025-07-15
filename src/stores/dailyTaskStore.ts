import { create } from "zustand";

export type DailyTask = {
  title: string;
  subtitle: string;
  time: string;
  color: string; // hex value
};

type DailyTaskStore = {
  dailyTasks: DailyTask[];
  addTask: (task: DailyTask) => void;
};

export const useDailyTaskStore = create<DailyTaskStore>((set) => ({
  dailyTasks: [],
  addTask: (task) =>
    set((state) => ({ dailyTasks: [...state.dailyTasks, task] })),
}));
