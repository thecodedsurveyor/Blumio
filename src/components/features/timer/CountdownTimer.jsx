import { useState, useEffect } from "react";
import { Pause, Play, Square, Timer } from "lucide-react";
import { useTimerActions } from "../../../hooks/stores";

const CountdownTimer = () => {
  const {
    activeTimer,
    handleStopTimer,
    handlePauseTimer,
    handleResumeTimer,
    formatTime,
    getFormattedElapsedTime,
    getFormattedRemainingTime,
    getTimerProgress,
  } = useTimerActions();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!activeTimer) return;

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTimer]);

  if (!activeTimer) return null;

  const getRemainingTime = () => {
    if (!activeTimer.timeEstimate) return null;

    const totalTimeInMs = activeTimer.timeEstimate * 60 * 1000; // Convert minutes to milliseconds
    const elapsedTimeInMs = currentTime - activeTimer.startTime;
    const timeSpentInMs = (activeTimer.timeSpent || 0) * 60 * 1000; // Previously spent time
    const totalElapsedInMs = elapsedTimeInMs + timeSpentInMs;
    const remainingTimeInMs = totalTimeInMs - totalElapsedInMs;

    return Math.max(0, remainingTimeInMs);
  };

  const getElapsedTime = () => {
    const elapsedTimeInMs = currentTime - activeTimer.startTime;
    const timeSpentInMs = (activeTimer.timeSpent || 0) * 60 * 1000;
    return elapsedTimeInMs + timeSpentInMs;
  };

  const formatTimeMs = (timeInMs) => {
    const totalSeconds = Math.floor(timeInMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getProgressPercentage = () => {
    if (!activeTimer.timeEstimate) return 0;

    const elapsed = getElapsedTime();
    const totalTime = activeTimer.timeEstimate * 60 * 1000;
    return Math.min(100, (elapsed / totalTime) * 100);
  };

  const remainingTime = getRemainingTime();
  const elapsedTime = getElapsedTime();
  const progress = getProgressPercentage();
  const isOvertime = remainingTime === 0 && activeTimer.timeEstimate;

  const handlePause = () => {
    setIsPaused(true);
    handlePauseTimer();
  };

  const handleResume = () => {
    setIsPaused(false);
    handleResumeTimer();
  };

  const handleStop = () => {
    setIsPaused(false);
    handleStopTimer();
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-blue-600" />
          <div>
            <div className="text-sm font-medium text-gray-900">
              {activeTimer.taskTitle}
            </div>
            <div className="text-xs text-gray-500">
              {formatTimeMs(elapsedTime)}
              {activeTimer.timeEstimate && (
                <span>
                  {" "}
                  / {formatTime(activeTimer.timeEstimate)}
                  {remainingTime !== null && (
                    <span className={isOvertime ? "text-red-500" : ""}>
                      {" "}
                      ({isOvertime
                        ? "Overtime"
                        : formatTimeMs(remainingTime)}{" "}
                      remaining)
                    </span>
                  )}
                </span>
              )}
            </div>
          </div>
        </div>

        {activeTimer.timeEstimate && (
          <div className="flex-1">
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  isOvertime ? "bg-red-500" : "bg-blue-500"
                }`}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          {isPaused ? (
            <button
              onClick={handleResume}
              className="flex items-center gap-1 rounded-md bg-green-600 px-3 py-1 text-white transition-colors hover:bg-green-700"
            >
              <Play className="h-4 w-4" />
              Resume
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center gap-1 rounded-md bg-yellow-600 px-3 py-1 text-white transition-colors hover:bg-yellow-700"
            >
              <Pause className="h-4 w-4" />
              Pause
            </button>
          )}
          <button
            onClick={handleStop}
            className="flex items-center gap-1 rounded-md bg-red-600 px-3 py-1 text-white transition-colors hover:bg-red-700"
          >
            <Square className="h-4 w-4" />
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
