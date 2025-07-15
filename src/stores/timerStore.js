import { create } from "zustand";

export const useTimerStore = create((set, get) => ({
  // State
  activeTimer: null,
  timerHistory: [],

  // Actions
  startTaskTimer: (taskId, timeEstimate, taskTitle) => {
    // Stop any existing timer first
    const { activeTimer } = get();
    if (activeTimer) {
      get().stopTaskTimer();
    }

    const newTimer = {
      taskId,
      timeEstimate,
      taskTitle,
      startTime: new Date(),
      timeSpent: 0, // Previously accumulated time
      isPaused: false,
    };

    set({ activeTimer: newTimer });
  },

  stopTaskTimer: () => {
    const { activeTimer } = get();
    if (!activeTimer) return null;

    const endTime = new Date();
    const minutesWorked = Math.round(
      (endTime - activeTimer.startTime) / (1000 * 60),
    );
    const totalTimeSpent = (activeTimer.timeSpent || 0) + minutesWorked;

    // Create timer history entry
    const historyEntry = {
      id: Date.now().toString(),
      taskId: activeTimer.taskId,
      taskTitle: activeTimer.taskTitle,
      startTime: activeTimer.startTime.toISOString(),
      endTime: endTime.toISOString(),
      duration: minutesWorked,
      totalTimeSpent,
      createdAt: new Date().toISOString(),
    };

    set((state) => ({
      activeTimer: null,
      timerHistory: [historyEntry, ...state.timerHistory],
    }));

    return {
      taskId: activeTimer.taskId,
      timeSpent: totalTimeSpent,
      timeEntry: historyEntry,
    };
  },

  pauseTaskTimer: () => {
    const { activeTimer } = get();
    if (!activeTimer) return;

    const endTime = new Date();
    const minutesWorked = Math.round(
      (endTime - activeTimer.startTime) / (1000 * 60),
    );
    const newTimeSpent = (activeTimer.timeSpent || 0) + minutesWorked;

    // Create timer history entry for the paused session
    const historyEntry = {
      id: Date.now().toString(),
      taskId: activeTimer.taskId,
      taskTitle: activeTimer.taskTitle,
      startTime: activeTimer.startTime.toISOString(),
      endTime: endTime.toISOString(),
      duration: minutesWorked,
      totalTimeSpent: newTimeSpent,
      createdAt: new Date().toISOString(),
    };

    set((state) => ({
      activeTimer: {
        ...activeTimer,
        startTime: new Date(),
        timeSpent: newTimeSpent,
        isPaused: true,
      },
      timerHistory: [historyEntry, ...state.timerHistory],
    }));

    return {
      taskId: activeTimer.taskId,
      timeSpent: newTimeSpent,
      timeEntry: historyEntry,
    };
  },

  resumeTaskTimer: () => {
    const { activeTimer } = get();
    if (!activeTimer) return;

    set({
      activeTimer: {
        ...activeTimer,
        startTime: new Date(),
        isPaused: false,
      },
    });
  },

  // Computed values
  getCurrentElapsedTime: () => {
    const { activeTimer } = get();
    if (!activeTimer) return 0;

    const now = new Date();
    const elapsedMinutes = Math.round(
      (now - activeTimer.startTime) / (1000 * 60),
    );
    return (activeTimer.timeSpent || 0) + elapsedMinutes;
  },

  getRemainingTime: () => {
    const { activeTimer } = get();
    if (!activeTimer || !activeTimer.timeEstimate) return null;

    const elapsedTime = get().getCurrentElapsedTime();
    return Math.max(0, activeTimer.timeEstimate - elapsedTime);
  },

  getTimerProgress: () => {
    const { activeTimer } = get();
    if (!activeTimer || !activeTimer.timeEstimate) return 0;

    const elapsedTime = get().getCurrentElapsedTime();
    return Math.min(100, (elapsedTime / activeTimer.timeEstimate) * 100);
  },

  getTimerHistoryForTask: (taskId) => {
    const { timerHistory } = get();
    return timerHistory.filter((entry) => entry.taskId === taskId);
  },

  getTotalTimeForTask: (taskId) => {
    const { timerHistory } = get();
    return timerHistory
      .filter((entry) => entry.taskId === taskId)
      .reduce((total, entry) => total + entry.duration, 0);
  },

  clearTimerHistory: () => {
    set({ timerHistory: [] });
  },

  removeTimerHistoryEntry: (entryId) => {
    set((state) => ({
      timerHistory: state.timerHistory.filter((entry) => entry.id !== entryId),
    }));
  },
}));
