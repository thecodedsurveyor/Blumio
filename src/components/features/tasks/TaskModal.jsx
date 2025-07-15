import { useState } from "react";
import { X, Send, Calendar, Clock, MessageSquare } from "lucide-react";
import {
  getPriorityColor,
  getStatusColor,
  formatDate,
  getTimeProgress,
} from "../../../utils/taskUtils";
import { mockUsers } from "../../../data/mockData";
import { useUIStore } from "../../../stores";
import { useTaskActions, useTimerActions } from "../../../hooks/stores";
import TimeTracker from "../timer/TimeTracker";
import FileUploader from "../../dashboard/FileUploader";
import TaskAssignment from "./TaskAssignment";

const TaskModal = () => {
  const { selectedTask, isTaskModalOpen, closeTaskModal } = useUIStore();
  const {
    handleTaskUpdate,
    handleCommentAdd,
    handleTaskAssignment,
    handleFileUploadWithNotification,
  } = useTaskActions();
  const { activeTimer, handleStartTimer, handleStopTimer } = useTimerActions();

  const [comment, setComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});

  if (!isTaskModalOpen || !selectedTask) return null;

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      handleCommentAdd(selectedTask.id, comment.trim(), mockUsers[0]);
      setComment("");
    }
  };

  const handleSaveEdit = () => {
    handleTaskUpdate(selectedTask.id, editForm);
    setIsEditing(false);
    setEditForm({});
  };

  const startEdit = () => {
    setEditForm({
      title: selectedTask.title,
      description: selectedTask.description,
      priority: selectedTask.priority,
      status: selectedTask.status,
      dueDate: selectedTask.dueDate,
    });
    setIsEditing(true);
  };

  const handleAssign = (taskId, assignee) => {
    handleTaskAssignment(taskId, assignee);
  };

  const handleFileUpload = (taskId, attachment, attachmentId, action) => {
    handleFileUploadWithNotification(taskId, attachment, attachmentId, action);
  };

  const timeProgress = getTimeProgress(
    selectedTask.timeSpent || 0,
    selectedTask.timeEstimate || 0,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {isEditing ? "Edit Task" : "Task Details"}
          </h2>
          <div className="flex items-center gap-2">
            {!isEditing && (
              <button
                onClick={startEdit}
                className="rounded-md bg-blue-600 px-3 py-1 text-white transition-colors hover:bg-blue-700"
              >
                Edit
              </button>
            )}
            <button
              onClick={closeTaskModal}
              className="text-gray-400 transition-colors hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6">
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={editForm.title || ""}
                  onChange={(e) =>
                    setEditForm({ ...editForm, title: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={editForm.description || ""}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <select
                    value={editForm.priority || ""}
                    onChange={(e) =>
                      setEditForm({ ...editForm, priority: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    value={editForm.status || ""}
                    onChange={(e) =>
                      setEditForm({ ...editForm, status: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="todo">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={editForm.dueDate || ""}
                    onChange={(e) =>
                      setEditForm({ ...editForm, dueDate: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleSaveEdit}
                  className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="rounded-md bg-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  {selectedTask.title}
                </h3>
                <p className="text-gray-600">{selectedTask.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full border px-2 py-1 text-xs font-medium ${getPriorityColor(
                        selectedTask.priority,
                      )}`}
                    >
                      {selectedTask.priority} priority
                    </span>
                    <span
                      className={`rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(
                        selectedTask.status,
                      )}`}
                    >
                      {selectedTask.status.replace("_", " ")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Due: {formatDate(selectedTask.dueDate)}
                    </span>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Assignee
                    </label>
                    <TaskAssignment
                      task={selectedTask}
                      users={mockUsers}
                      onAssign={handleAssign}
                    />
                  </div>
                </div>

                {selectedTask.timeEstimate && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {selectedTask.timeSpent || 0}m /{" "}
                        {selectedTask.timeEstimate}m
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          timeProgress > 100 ? "bg-red-500" : "bg-blue-500"
                        }`}
                        style={{ width: `${Math.min(timeProgress, 100)}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">
                      {Math.round(timeProgress)}% complete
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Time Tracking
                </label>
                <TimeTracker
                  task={selectedTask}
                  activeTimer={activeTimer}
                  onStartTimer={handleStartTimer}
                  onStopTimer={handleStopTimer}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  File Attachments
                </label>
                <FileUploader
                  task={selectedTask}
                  onFileUpload={handleFileUpload}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">
                    Comments ({selectedTask.comments.length})
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedTask.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="rounded-lg border border-gray-200 p-3"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <img
                          src={
                            comment.author.avatar ||
                            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1"
                          }
                          alt={comment.author.name}
                          className="h-6 w-6 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-900">
                          {comment.author.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(comment.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.text}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmitComment} className="flex gap-2">
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
