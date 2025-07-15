import { useState } from "react";
import PropTypes from "prop-types";
import { Clock } from "lucide-react";

const TimeTracker = ({ task, activeTimer, onStartTimer, onStopTimer }) => {
  const [showTimeLog, setShowTimeLog] = useState(false);

  const isTracking = activeTimer && activeTimer.taskId === task.id;

  const startTracking = () => {
    if (onStartTimer) {
      onStartTimer(task.id, task.timeEstimate);
    }
  };

  const stopTracking = () => {
    if (onStopTimer) {
      onStopTimer();
    }
  };

  const getProgress = () => {
    if (!task.timeEstimate) return 0;
    return Math.min((timeSpent / task.timeEstimate) * 100, 100);
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const getProgressColor = () => {
    const progress = getProgress();
    if (progress > 100) return "bg-red-500";
    if (progress > 80) return "bg-yellow-500";
    return "bg-blue-500";
  };

  const timeSpent = task.timeSpent || 0;

  return (
    <div className="space-y-3">
      {/* Time Tracking Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-700">
            {formatDuration(timeSpent)} /{" "}
            {task.timeEstimate
              ? formatDuration(task.timeEstimate)
              : "No estimate"}
          </span>
        </div>
        <div className="flex gap-2">
          {!isTracking ? (
            <button
              onClick={startTracking}
              className="flex items-center gap-1 rounded-md bg-green-600 px-3 py-1 text-sm text-white transition-colors hover:bg-green-700"
            >
              ▶ Start
            </button>
          ) : (
            <button
              onClick={stopTracking}
              className="flex items-center gap-1 rounded-md bg-red-600 px-3 py-1 text-sm text-white transition-colors hover:bg-red-700"
            >
              ⏸ Stop
            </button>
          )}
          <button
            onClick={() => setShowTimeLog(!showTimeLog)}
            className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-300"
          >
            Log
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      {task.timeEstimate && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Progress</span>
            <span>{Math.round(getProgress())}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${getProgressColor()}`}
              style={{ width: `${Math.min(getProgress(), 100)}%` }}
            />
          </div>
          {getProgress() > 100 && (
            <div className="text-xs text-red-500">
              ⚠️ Over estimate by{" "}
              {formatDuration(timeSpent - task.timeEstimate)}
            </div>
          )}
        </div>
      )}

      {/* Active Timer */}
      {isTracking && activeTimer && (
        <div className="rounded-md border border-green-200 bg-green-50 p-2">
          <div className="text-sm text-green-800">
            ⏱️ Timer active since {activeTimer.startTime.toLocaleTimeString()}
          </div>
        </div>
      )}

      {/* Time Log Modal */}
      {showTimeLog && (
        <div className="mt-2 rounded-md border border-gray-200 bg-gray-50 p-3">
          <h5 className="mb-2 font-medium text-gray-900">Time Entries</h5>
          <div className="max-h-40 space-y-2 overflow-y-auto">
            {(task.timeEntries || []).map((entry) => (
              <div
                key={entry.id}
                className="border-b border-gray-200 pb-1 text-xs text-gray-600"
              >
                <div className="flex justify-between">
                  <span>{new Date(entry.startTime).toLocaleString()}</span>
                  <span>{formatDuration(entry.duration)}</span>
                </div>
                {entry.description && (
                  <div className="mt-1 text-gray-500">{entry.description}</div>
                )}
              </div>
            ))}
            {(!task.timeEntries || task.timeEntries.length === 0) && (
              <div className="text-xs text-gray-500">No time entries yet</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

TimeTracker.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timeSpent: PropTypes.number,
    timeEstimate: PropTypes.number,
    timeEntries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        description: PropTypes.string,
      }),
    ),
  }).isRequired,
  activeTimer: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date).isRequired,
    timeEstimate: PropTypes.number,
    timeSpent: PropTypes.number,
  }),
  onStartTimer: PropTypes.func,
  onStopTimer: PropTypes.func,
};

export default TimeTracker;
