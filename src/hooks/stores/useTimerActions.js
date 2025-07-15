import { useTimerStore } from "../../stores/timerStore";
import { useTaskStore } from "../../stores/taskStore";
import { useNotificationStore } from "../../stores/notificationStore";

export const useTimerActions = () => {
  const {
    startTaskTimer,
    stopTaskTimer,
    pauseTaskTimer,
    resumeTaskTimer,
    activeTimer,
    getCurrentElapsedTime,
    getRemainingTime,
    getTimerProgress,
  } = useTimerStore();

  const { updateTaskTime, tasks } = useTaskStore();
  const { addNotification } = useNotificationStore();

  const handleStartTimer = (taskId, timeEstimate) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    startTaskTimer(taskId, timeEstimate, task.title);
    addNotification(`Timer started for "${task.title}"`, "info", taskId);
  };

  const handleStopTimer = () => {
    const timerResult = stopTaskTimer();

    if (timerResult) {
      updateTaskTime(
        timerResult.taskId,
        timerResult.timeSpent,
        timerResult.timeEntry,
      );

      const task = tasks.find((t) => t.id === timerResult.taskId);
      if (task) {
        addNotification(
          `Timer stopped for "${task.title}". Time logged: ${timerResult.timeEntry.duration} minutes`,
          "success",
          timerResult.taskId,
        );
      }
    }
  };

  const handlePauseTimer = () => {
    const timerResult = pauseTaskTimer();

    if (timerResult) {
      updateTaskTime(
        timerResult.taskId,
        timerResult.timeSpent,
        timerResult.timeEntry,
      );

      const task = tasks.find((t) => t.id === timerResult.taskId);
      if (task) {
        addNotification(
          `Timer paused for "${task.title}"`,
          "info",
          timerResult.taskId,
        );
      }
    }
  };

  const handleResumeTimer = () => {
    if (activeTimer) {
      resumeTaskTimer();
      addNotification(
        `Timer resumed for "${activeTimer.taskTitle}"`,
        "info",
        activeTimer.taskId,
      );
    }
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const getFormattedElapsedTime = () => {
    const elapsed = getCurrentElapsedTime();
    return formatTime(elapsed);
  };

  const getFormattedRemainingTime = () => {
    const remaining = getRemainingTime();
    return remaining !== null ? formatTime(remaining) : null;
  };

  return {
    handleStartTimer,
    handleStopTimer,
    handlePauseTimer,
    handleResumeTimer,
    formatTime,
    getFormattedElapsedTime,
    getFormattedRemainingTime,
    // Direct access to store values
    activeTimer,
    getCurrentElapsedTime,
    getRemainingTime,
    getTimerProgress,
  };
};
