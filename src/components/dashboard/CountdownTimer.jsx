import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Pause, Play, Square, Timer } from "lucide-react";

const CountdownTimer = ({ activeTimer, onStop, onPause, onResume }) => {
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

  const formatTime = (timeInMs) => {
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
    const totalTimeInMs = activeTimer.timeEstimate * 60 * 1000;
    const elapsedTimeInMs = getElapsedTime();
    return Math.min(100, (elapsedTimeInMs / totalTimeInMs) * 100);
  };

  const remainingTime = getRemainingTime();
  const isOvertime = remainingTime === 0 && activeTimer.timeEstimate;
  const progress = getProgressPercentage();

  const handlePause = () => {
    setIsPaused(true);
    onPause();
  };

  const handleResume = () => {
    setIsPaused(false);
    onResume();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`rounded-xl border-2 bg-white p-4 shadow-2xl transition-all duration-300 ${
          isOvertime ? "border-red-500 bg-red-50" : "border-blue-500 bg-blue-50"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Timer Icon */}
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${
              isOvertime ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            <Timer className="h-6 w-6 text-white" />
          </div>

          {/* Task Info and Timer */}
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <h3 className="truncate text-sm font-semibold text-gray-900">
                {activeTimer.taskTitle}
              </h3>
              {isOvertime && (
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
                  OVERTIME
                </span>
              )}
            </div>

            {/* Time Display */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div
                  className={`font-mono text-lg font-bold ${
                    isOvertime ? "text-red-600" : "text-blue-600"
                  }`}
                >
                  {activeTimer.timeEstimate && remainingTime !== null
                    ? isOvertime
                      ? `-${formatTime(
                          getElapsedTime() -
                            activeTimer.timeEstimate * 60 * 1000,
                        )}`
                      : formatTime(remainingTime)
                    : formatTime(getElapsedTime())}
                </div>
                <div className="text-xs text-gray-500">
                  {activeTimer.timeEstimate && remainingTime !== null
                    ? "remaining"
                    : "elapsed"}
                </div>
              </div>

              {activeTimer.timeEstimate && (
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-700">
                    {Math.round(progress)}%
                  </div>
                  <div className="text-xs text-gray-500">complete</div>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            {activeTimer.timeEstimate && (
              <div className="mt-2 w-full">
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isOvertime
                        ? "bg-red-500"
                        : progress > 80
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Control Buttons */}
          <div className="flex flex-col gap-2">
            {!isPaused ? (
              <button
                onClick={handlePause}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white transition-colors hover:bg-yellow-600"
                title="Pause Timer"
              >
                <Pause className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleResume}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition-colors hover:bg-green-600"
                title="Resume Timer"
              >
                <Play className="h-4 w-4" />
              </button>
            )}

            <button
              onClick={onStop}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
              title="Stop Timer"
            >
              <Square className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CountdownTimer.propTypes = {
  activeTimer: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date).isRequired,
    timeEstimate: PropTypes.number,
    timeSpent: PropTypes.number,
  }),
  onStop: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onResume: PropTypes.func.isRequired,
};

export default CountdownTimer;
