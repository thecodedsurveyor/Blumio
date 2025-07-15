import { useState } from "react";
import PropTypes from "prop-types";
import { Play, Pause, Square, Clock, Eye, EyeOff } from "lucide-react";
import { useTimerActions } from "../../../hooks/stores";

const TimeTracker = ({ task }) => {
  const { activeTimer, handleStartTimer, handleStopTimer, handlePauseTimer } =
    useTimerActions();

  const [showTimeLog, setShowTimeLog] = useState(false);

  const isCurrentTaskActive = activeTimer && activeTimer.taskId === task.id;

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const handleStart = () => {
    handleStartTimer(task.id, task.timeEstimate, task.title);
  };

  const handleStop = () => {
    handleStopTimer();
  };

  const handlePause = () => {
    handlePauseTimer();
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">
            {formatDuration(task.timeSpent || 0)}
            {task.timeEstimate && ` / ${formatDuration(task.timeEstimate)}`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isCurrentTaskActive ? (
            <>
              <button
                onClick={handlePause}
                className="flex items-center gap-1 rounded-md bg-yellow-600 px-2 py-1 text-xs text-white transition-colors hover:bg-yellow-700"
              >
                <Pause className="h-3 w-3" />
                Pause
              </button>
              <button
                onClick={handleStop}
                className="flex items-center gap-1 rounded-md bg-red-600 px-2 py-1 text-xs text-white transition-colors hover:bg-red-700"
              >
                <Square className="h-3 w-3" />
                Stop
              </button>
            </>
          ) : (
            <button
              onClick={handleStart}
              className="flex items-center gap-1 rounded-md bg-green-600 px-2 py-1 text-xs text-white transition-colors hover:bg-green-700"
            >
              <Play className="h-3 w-3" />
              Start
            </button>
          )}

          <button
            onClick={() => setShowTimeLog(!showTimeLog)}
            className="flex items-center gap-1 rounded-md bg-gray-600 px-2 py-1 text-xs text-white transition-colors hover:bg-gray-700"
          >
            {showTimeLog ? (
              <EyeOff className="h-3 w-3" />
            ) : (
              <Eye className="h-3 w-3" />
            )}
            Log
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      {task.timeEstimate && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Progress</span>
            <span>
              {Math.round(((task.timeSpent || 0) / task.timeEstimate) * 100)}%
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-blue-500 transition-all duration-300"
              style={{
                width: `${Math.min(
                  ((task.timeSpent || 0) / task.timeEstimate) * 100,
                  100,
                )}%`,
              }}
            />
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
};

export default TimeTracker;
