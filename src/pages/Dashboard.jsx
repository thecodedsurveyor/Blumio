import React, { useState, useEffect } from "react";
import {
  Plus,
  Calendar,
  BarChart3,
  Users,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  MessageSquare,
  Paperclip,
  X,
  Send,
  Search,
  Filter,
  Activity,
} from "lucide-react";

// Mock Data
const mockUsers = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@taskflow.com",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    role: "admin",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@taskflow.com",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    role: "member",
  },
  {
    id: "3",
    name: "Emma Davis",
    email: "emma@taskflow.com",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    role: "member",
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david@taskflow.com",
    avatar:
      "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    role: "member",
  },
];

const mockTasks = [
  {
    id: "1",
    title: "Design User Authentication Flow",
    description:
      "Create wireframes and mockups for the user authentication system including login, signup, and password reset flows.",
    status: "in_progress",
    priority: "high",
    assignee: mockUsers[0],
    creator: mockUsers[1],
    dueDate: "2025-01-15",
    tags: ["design", "ux", "authentication"],
    timeEstimate: 480,
    timeSpent: 240,
    comments: [
      {
        id: "1",
        text: "Started working on the wireframes. Should have initial drafts by tomorrow.",
        author: mockUsers[0],
        createdAt: "2025-01-08T10:30:00Z",
      },
    ],
    attachments: [],
    createdAt: "2025-01-07T09:00:00Z",
    updatedAt: "2025-01-08T10:30:00Z",
  },
  {
    id: "2",
    title: "Implement Task Filtering System",
    description:
      "Add filtering functionality to allow users to filter tasks by priority, status, assignee, and due date.",
    status: "todo",
    priority: "medium",
    assignee: mockUsers[1],
    creator: mockUsers[0],
    dueDate: "2025-01-20",
    tags: ["frontend", "feature", "filters"],
    timeEstimate: 360,
    timeSpent: 0,
    comments: [],
    attachments: [],
    createdAt: "2025-01-08T14:00:00Z",
    updatedAt: "2025-01-08T14:00:00Z",
  },
  {
    id: "3",
    title: "Database Schema Migration",
    description:
      "Update the database schema to support the new task priority and tag features.",
    status: "completed",
    priority: "high",
    assignee: mockUsers[2],
    creator: mockUsers[0],
    dueDate: "2025-01-10",
    tags: ["backend", "database", "migration"],
    timeEstimate: 180,
    timeSpent: 165,
    comments: [
      {
        id: "2",
        text: "Migration completed successfully. All tests are passing.",
        author: mockUsers[2],
        createdAt: "2025-01-09T16:45:00Z",
      },
    ],
    attachments: [],
    createdAt: "2025-01-07T11:00:00Z",
    updatedAt: "2025-01-09T16:45:00Z",
  },
  {
    id: "4",
    title: "Setup Team Collaboration Features",
    description:
      "Implement real-time comments and file sharing for team collaboration on tasks.",
    status: "todo",
    priority: "medium",
    assignee: mockUsers[3],
    creator: mockUsers[0],
    dueDate: "2025-01-25",
    tags: ["collaboration", "real-time", "feature"],
    timeEstimate: 600,
    timeSpent: 0,
    comments: [],
    attachments: [],
    createdAt: "2025-01-08T16:00:00Z",
    updatedAt: "2025-01-08T16:00:00Z",
  },
];

const mockActivities = [
  {
    id: "1",
    type: "task_created",
    task: mockTasks[3],
    user: mockUsers[0],
    description: 'created task "Setup Team Collaboration Features"',
    timestamp: "2025-01-08T16:00:00Z",
  },
  {
    id: "2",
    type: "comment_added",
    task: mockTasks[0],
    user: mockUsers[0],
    description: 'added a comment to "Design User Authentication Flow"',
    timestamp: "2025-01-08T10:30:00Z",
  },
  {
    id: "3",
    type: "task_updated",
    task: mockTasks[2],
    user: mockUsers[2],
    description: 'marked "Database Schema Migration" as completed',
    timestamp: "2025-01-09T16:45:00Z",
  },
  {
    id: "4",
    type: "task_assigned",
    task: mockTasks[1],
    user: mockUsers[0],
    description: 'assigned "Implement Task Filtering System" to Michael Chen',
    timestamp: "2025-01-08T14:00:00Z",
  },
];

// Helper Functions
const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800 border-red-200";
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "todo":
      return "bg-gray-100 text-gray-800 border-gray-200";
    case "in_progress":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

const getTimeProgress = (spent, estimate) => {
  if (!estimate) return 0;
  return Math.min((spent / estimate) * 100, 100);
};

const isOverdue = (dueDate) => {
  return new Date(dueDate) < new Date();
};

const getTaskStats = (tasks) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const inProgress = tasks.filter((t) => t.status === "in_progress").length;
  const todo = tasks.filter((t) => t.status === "todo").length;
  const overdue = tasks.filter(
    (t) => isOverdue(t.dueDate) && t.status !== "completed",
  ).length;

  return { total, completed, inProgress, todo, overdue };
};

// Custom Hook
const useTasks = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [activities, setActivities] = useState(mockActivities);
  const [loading, setLoading] = useState(false);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);

    // Add activity
    const newActivity = {
      id: Date.now().toString(),
      type: "task_created",
      task: newTask,
      user: task.creator,
      description: `created task "${task.title}"`,
      timestamp: new Date().toISOString(),
    };
    setActivities((prev) => [newActivity, ...prev]);
  };

  const updateTask = (taskId, updates) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, ...updates, updatedAt: new Date().toISOString() }
          : task,
      ),
    );
  };

  const assignTask = (taskId, assignee) => {
    updateTask(taskId, { assignee });

    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      const newActivity = {
        id: Date.now().toString(),
        type: "task_assigned",
        task: { ...task, assignee },
        user: assignee,
        description: `assigned "${task.title}" to ${assignee.name}`,
        timestamp: new Date().toISOString(),
      };
      setActivities((prev) => [newActivity, ...prev]);
    }
  };

  const addComment = (taskId, text, author) => {
    const comment = {
      id: Date.now().toString(),
      text,
      author,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, comments: [...task.comments, comment] }
          : task,
      ),
    );

    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      const newActivity = {
        id: Date.now().toString(),
        type: "comment_added",
        task,
        user: author,
        description: `added a comment to "${task.title}"`,
        timestamp: new Date().toISOString(),
      };
      setActivities((prev) => [newActivity, ...prev]);
    }
  };

  const filterTasks = (filters) => {
    return tasks.filter((task) => {
      if (filters.status && task.status !== filters.status) return false;
      if (filters.priority && task.priority !== filters.priority) return false;
      if (filters.assignee && task.assignee?.id !== filters.assignee)
        return false;
      if (
        filters.search &&
        !task.title.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;
      return true;
    });
  };

  return {
    tasks,
    activities,
    loading,
    addTask,
    updateTask,
    assignTask,
    addComment,
    filterTasks,
  };
};

// Components
const TaskCard = ({ task, onTaskClick, onStatusChange }) => {
  const timeProgress = getTimeProgress(
    task.timeSpent || 0,
    task.timeEstimate || 0,
  );
  const overdueTask = isOverdue(task.dueDate);

  return (
    <div
      className="group cursor-pointer rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:border-gray-300 hover:shadow-md"
      onClick={() => onTaskClick(task)}
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
            {task.priority}
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

        {task.timeEstimate && (
          <div className="mb-3">
            <div className="mb-1 flex justify-between text-xs text-gray-500">
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
          </div>
          <div className="flex items-center gap-2">
            {task.comments.length > 0 && (
              <div className="flex items-center gap-1 text-gray-400">
                <MessageSquare className="h-4 w-4" />
                <span className="text-xs">{task.comments.length}</span>
              </div>
            )}
            {task.attachments.length > 0 && (
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

const TaskModal = ({ task, isOpen, onClose, onUpdate, onAddComment }) => {
  const [comment, setComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});

  if (!isOpen || !task) return null;

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(task.id, comment.trim(), mockUsers[0]);
      setComment("");
    }
  };

  const handleSaveEdit = () => {
    onUpdate(task.id, editForm);
    setIsEditing(false);
    setEditForm({});
  };

  const startEdit = () => {
    setEditForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate,
    });
    setIsEditing(true);
  };

  const timeProgress = getTimeProgress(
    task.timeSpent || 0,
    task.timeEstimate || 0,
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
              onClick={onClose}
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
                  {task.title}
                </h3>
                <p className="text-gray-600">{task.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full border px-2 py-1 text-xs font-medium ${getPriorityColor(
                        task.priority,
                      )}`}
                    >
                      {task.priority} priority
                    </span>
                    <span
                      className={`rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(
                        task.status,
                      )}`}
                    >
                      {task.status.replace("_", " ")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Due: {formatDate(task.dueDate)}
                    </span>
                  </div>

                  {task.assignee && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <img
                        src={
                          task.assignee.avatar ||
                          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1"
                        }
                        alt={task.assignee.name}
                        className="h-6 w-6 rounded-full"
                      />
                      <span className="text-sm text-gray-600">
                        {task.assignee.name}
                      </span>
                    </div>
                  )}
                </div>

                {task.timeEstimate && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {formatTime(task.timeSpent || 0)} /{" "}
                        {formatTime(task.timeEstimate)}
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

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">
                    Comments ({task.comments.length})
                  </span>
                </div>

                <div className="max-h-48 space-y-3 overflow-y-auto">
                  {task.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="flex gap-3 rounded-lg bg-gray-50 p-3"
                    >
                      <img
                        src={
                          comment.author.avatar ||
                          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1"
                        }
                        alt={comment.author.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">
                            {comment.author.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {formatDate(comment.createdAt)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{comment.text}</p>
                      </div>
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

const CreateTaskModal = ({ isOpen, onClose, onCreateTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    status: "todo",
    assigneeId: "",
    dueDate: "",
    timeEstimate: "",
    tags: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.dueDate) newErrors.dueDate = "Due date is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const assignee = formData.assigneeId
      ? mockUsers.find((u) => u.id === formData.assigneeId)
      : undefined;
    const tags = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);

    const task = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      priority: formData.priority,
      status: formData.status,
      assignee,
      creator: mockUsers[0],
      dueDate: formData.dueDate,
      timeEstimate: formData.timeEstimate
        ? parseInt(formData.timeEstimate)
        : undefined,
      tags,
      comments: [],
      attachments: [],
    };

    onCreateTask(task);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      status: "todo",
      assigneeId: "",
      dueDate: "",
      timeEstimate: "",
      tags: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-lg bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Create New Task
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 transition-colors hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="Enter task title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="Enter task description"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="todo">To Do</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Assignee
              </label>
              <select
                value={formData.assigneeId}
                onChange={(e) =>
                  setFormData({ ...formData, assigneeId: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select assignee</option>
                {mockUsers.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Due Date *
              </label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
                className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.dueDate ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.dueDate && (
                <p className="mt-1 text-sm text-red-500">{errors.dueDate}</p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Time Estimate (minutes)
            </label>
            <input
              type="number"
              value={formData.timeEstimate}
              onChange={(e) =>
                setFormData({ ...formData, timeEstimate: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter estimated time in minutes"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Tags
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter tags separated by commas"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Create Task
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-md bg-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TaskFilters = ({ filters, onFilterChange }) => {
  const clearFilters = () => {
    onFilterChange({
      search: "",
      status: "",
      priority: "",
      assignee: "",
    });
  };

  const hasActiveFilters =
    filters.search || filters.status || filters.priority || filters.assignee;

  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Filters</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-700"
          >
            <X className="h-4 w-4" />
            Clear all
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={filters.search}
            onChange={(e) =>
              onFilterChange({ ...filters, search: e.target.value })
            }
            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={filters.status}
          onChange={(e) =>
            onFilterChange({ ...filters, status: e.target.value })
          }
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={filters.priority}
          onChange={(e) =>
            onFilterChange({ ...filters, priority: e.target.value })
          }
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select
          value={filters.assignee}
          onChange={(e) =>
            onFilterChange({ ...filters, assignee: e.target.value })
          }
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Assignees</option>
          <option value="unassigned">Unassigned</option>
          <option value="1">Sarah Johnson</option>
          <option value="2">Michael Chen</option>
          <option value="3">Emma Davis</option>
          <option value="4">David Wilson</option>
        </select>
      </div>
    </div>
  );
};

const ActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case "task_created":
        return <Plus className="h-4 w-4 text-blue-500" />;
      case "task_updated":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "task_assigned":
        return <User className="h-4 w-4 text-purple-500" />;
      case "comment_added":
        return <MessageSquare className="h-4 w-4 text-orange-500" />;
      case "file_uploaded":
        return <Paperclip className="h-4 w-4 text-teal-500" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-gray-400" />;
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="mb-4 font-medium text-gray-900">Recent Activity</h3>

      <div className="space-y-3">
        {activities.length === 0 ? (
          <p className="text-sm text-gray-500">No recent activity</p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
            >
              <div className="mt-1 flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <img
                    src={
                      activity.user.avatar ||
                      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1"
                    }
                    alt={activity.user.name}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {activity.user.name}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="mt-1 text-xs text-gray-400">
                  {formatDate(activity.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const { tasks, activities, addTask, updateTask, addComment, filterTasks } =
    useTasks();
  const [selectedTask, setSelectedTask] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    priority: "",
    assignee: "",
  });

  const filteredTasks = filterTasks(filters);
  const taskStats = getTaskStats(filteredTasks);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsTaskModalOpen(true);
  };

  const handleStatusChange = (taskId, status) => {
    updateTask(taskId, { status });
  };

  const handleCreateTask = (task) => {
    addTask(task);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">TaskFlow</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                New Task
              </button>
              <div className="flex items-center gap-2">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1"
                  alt="User"
                  className="h-8 w-8 rounded-full border-2 border-gray-200"
                />
                <span className="text-sm text-gray-700">Sarah Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Tasks</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {taskStats.total}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {taskStats.inProgress}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {taskStats.completed}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overdue</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {taskStats.overdue}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Tasks Section */}
          <div className="lg:col-span-3">
            <TaskFilters filters={filters} onFilterChange={setFilters} />

            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">
                Tasks ({filteredTasks.length})
              </h2>

              {filteredTasks.length === 0 ? (
                <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                  <Calendar className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                  <p className="mb-2 text-gray-500">No tasks found</p>
                  <p className="text-sm text-gray-400">
                    Try adjusting your filters or create a new task
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {filteredTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onTaskClick={handleTaskClick}
                      onStatusChange={handleStatusChange}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <ActivityFeed activities={activities} />
          </div>
        </div>
      </div>

      {/* Modals */}
      <TaskModal
        task={selectedTask}
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onUpdate={updateTask}
        onAddComment={addComment}
      />

      <CreateTaskModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateTask={handleCreateTask}
      />
    </div>
  );
};

export default Dashboard;
