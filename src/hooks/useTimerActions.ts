import { useCallback } from "react";
import { useTimerStore } from "../stores/timerStore";

export const useTimerActions = () => {
  const {
    isRunning,
    startTime,
    elapsedTime,
    taskId,
    start,
    stop,
    reset,
    setElapsedTime,
  } = useTimerStore();

  const getFormattedTime = useCallback(() => {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours,
      minutes,
      seconds,
      formatted: `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
    };
  }, [elapsedTime]);

  const getCurrentTaskTime = useCallback(() => {
    if (!isRunning || !startTime) return elapsedTime;
    return elapsedTime + (Date.now() - startTime);
  }, [isRunning, startTime, elapsedTime]);

  return {
    isRunning,
    taskId,
    elapsedTime,
    start,
    stop,
    reset,
    setElapsedTime,
    getFormattedTime,
    getCurrentTaskTime,
  };
};
