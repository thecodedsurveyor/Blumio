import { create } from "zustand";

interface TimerState {
  isRunning: boolean;
  startTime: number | null;
  elapsedTime: number;
  taskId: string | null;
}

interface TimerActions {
  start: (taskId: string) => void;
  stop: () => void;
  reset: () => void;
  setElapsedTime: (time: number) => void;
}

const initialState: TimerState = {
  isRunning: false,
  startTime: null,
  elapsedTime: 0,
  taskId: null,
};

export const useTimerStore = create<TimerState & TimerActions>((set) => ({
  ...initialState,

  start: (taskId) =>
    set({
      isRunning: true,
      startTime: Date.now(),
      taskId,
    }),

  stop: () =>
    set((state) => ({
      isRunning: false,
      elapsedTime:
        state.startTime != null
          ? state.elapsedTime + (Date.now() - state.startTime)
          : state.elapsedTime,
      startTime: null,
    })),

  reset: () => set(initialState),

  setElapsedTime: (time) => set({ elapsedTime: time }),
}));
