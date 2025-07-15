import { memo } from "react";
import type { Task } from "../../stores/taskStore";
import {
  getTaskProgress,
  getTaskDueStatus,
  formatDate,
} from "../../utils/taskUtils";

type TaskCardProps = {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onStatusChange: (taskId: string, status: Task["status"]) => void;
  onPriorityChange: (taskId: string, priority: Task["priority"]) => void;
  isDragging?: boolean;
};

const TaskCard = memo(
  ({
    task,
    onEdit,
    onDelete,
    onStatusChange,
    onPriorityChange,
    isDragging = false,
  }: TaskCardProps) => {
    const progress = getTaskProgress(task);
    const dueStatus = getTaskDueStatus(task);

    return (
      <div
        className={`rounded-lg bg-white p-4 shadow transition-shadow hover:shadow-md ${
          isDragging ? "opacity-50 shadow-lg" : ""
        }`}
      >
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium">{task.title}</h3>
          <div className="flex space-x-2">
            <select
              value={task.priority}
              onChange={(e) =>
                onPriorityChange(task.id, e.target.value as Task["priority"])
              }
              className="rounded border border-gray-200 bg-white px-2 py-1 text-sm"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button
              onClick={() => onEdit(task)}
              className="text-gray-500 hover:text-gray-700"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-600">{task.description}</p>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-1 h-2 rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {task.assignedTo.map((userId) => (
              <div
                key={userId}
                className="h-8 w-8 rounded-full bg-gray-200"
                title={`Assigned to user ${userId}`}
              />
            ))}
          </div>
          <div className="text-sm">
            <span
              className={`rounded px-2 py-1 ${
                dueStatus === "overdue"
                  ? "bg-red-100 text-red-800"
                  : dueStatus === "due-soon"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              Due {formatDate(task.dueDate)}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  },
);

TaskCard.displayName = "TaskCard";

export default TaskCard;
