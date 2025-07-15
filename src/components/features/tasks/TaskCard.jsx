import PropTypes from "prop-types";
import {
  Calendar,
  Clock,
  AlertCircle,
  User,
  MessageSquare,
  Paperclip,
} from "lucide-react";
import {
  getPriorityColor,
  getPriorityIcon,
  getStatusColor,
  formatDate,
  formatTime,
  getTimeProgress,
  isOverdue,
} from "../../../utils/taskUtils";
import { useUIStore } from "../../../stores";
import { useTimerActions } from "../../../hooks/stores";

const TaskCard = ({ task }) => {
  const { openTaskModal } = useUIStore();
  const { handleStartTimer, activeTimer } = useTimerActions();

  const timeProgress = getTimeProgress(
    task.timeSpent || 0,
    task.timeEstimate || 0,
  );
  const overdueTask = isOverdue(task.dueDate);

  const handleTaskClick = () => {
    openTaskModal(task);
  };

  const handleStartTaskTimer = () => {
    handleStartTimer(task.id, task.timeEstimate);
  };

  return (
    <div
      className="group cursor-pointer rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:border-gray-300 hover:shadow-md"
      onClick={handleTaskClick}
    >
      <div className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
              {task.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-500">
              {task.description}
            </p>
          </div>
          {overdueTask && task.status !== "completed" && (
            <AlertCircle className="ml-2 h-4 w-4 flex-shrink-0 text-red-500" />
          )}
        </div>

        <div className="mb-3 flex items-center gap-2">
          <span
            className={`rounded-full border px-2 py-1 text-xs font-medium ${getPriorityColor(
              task.priority,
            )}`}
          >
            {getPriorityIcon(task.priority)} {task.priority}
          </span>
          <span
            className={`rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(
              task.status,
            )}`}
          >
            {task.status.replace("_", " ")}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-2">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mb-3 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span
              className={
                overdueTask && task.status !== "completed" ? "text-red-500" : ""
              }
            >
              {formatDate(task.dueDate)}
            </span>
          </div>
          {task.timeEstimate && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>
                {formatTime(task.timeSpent || 0)} /{" "}
                {formatTime(task.timeEstimate)}
              </span>
            </div>
          )}
        </div>

        {/* Time Progress Bar */}
        {task.timeEstimate && (
          <div className="mb-3 space-y-1">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Time Progress</span>
              <span>{Math.round(timeProgress)}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  timeProgress > 100 ? "bg-red-500" : "bg-blue-500"
                }`}
                style={{ width: `${Math.min(timeProgress, 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {task.assignee && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4 text-gray-400" />
                <img
                  src={
                    task.assignee.avatar ||
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1"
                  }
                  alt={task.assignee.name}
                  className="h-6 w-6 rounded-full border-2 border-white shadow-sm"
                />
                <span className="text-sm text-gray-600">
                  {task.assignee.name}
                </span>
              </div>
            )}

            {/* Quick Timer Start Button */}
            {task.timeEstimate && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleStartTaskTimer();
                }}
                disabled={activeTimer && activeTimer.taskId === task.id}
                className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs transition-colors ${
                  activeTimer && activeTimer.taskId === task.id
                    ? "cursor-not-allowed bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
                title={
                  activeTimer && activeTimer.taskId === task.id
                    ? "Timer Active"
                    : "Start Timer"
                }
              >
                <Clock className="h-3 w-3" />
                {activeTimer && activeTimer.taskId === task.id
                  ? "Active"
                  : "Start"}
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            {task.comments && task.comments.length > 0 && (
              <div className="flex items-center gap-1 text-gray-400">
                <MessageSquare className="h-4 w-4" />
                <span className="text-xs">{task.comments.length}</span>
              </div>
            )}
            {task.attachments && task.attachments.length > 0 && (
              <div className="flex items-center gap-1 text-gray-400">
                <Paperclip className="h-4 w-4" />
                <span className="text-xs">{task.attachments.length}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    timeSpent: PropTypes.number,
    timeEstimate: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    assignee: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }),
    comments: PropTypes.array,
    attachments: PropTypes.array,
  }).isRequired,
};

export default TaskCard;
