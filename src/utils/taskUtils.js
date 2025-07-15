// Helper Functions for Task Management

export const getPriorityColor = (priority) => {
  switch (priority) {
    case "urgent":
      return "bg-red-500 text-white border-red-500";
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

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "urgent":
      return "🔴";
    case "high":
      return "🟠";
    case "medium":
      return "🟡";
    case "low":
      return "🟢";
    default:
      return "⚪";
  }
};

export const getPriorityOrder = (priority) => {
  switch (priority) {
    case "urgent":
      return 4;
    case "high":
      return 3;
    case "medium":
      return 2;
    case "low":
      return 1;
    default:
      return 0;
  }
};

export const getStatusColor = (status) => {
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

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

export const getTimeProgress = (spent, estimate) => {
  if (!estimate) return 0;
  return Math.min((spent / estimate) * 100, 100);
};

export const isOverdue = (dueDate) => {
  return new Date(dueDate) < new Date();
};

export const getTaskStats = (tasks) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const inProgress = tasks.filter((t) => t.status === "in_progress").length;
  const todo = tasks.filter((t) => t.status === "todo").length;
  const overdue = tasks.filter(
    (t) => isOverdue(t.dueDate) && t.status !== "completed",
  ).length;

  return { total, completed, inProgress, todo, overdue };
};
