import type { Task } from "../stores/taskStore";
import type { Priority, Status } from "../types/common";

export const getPriorityOrder = (priority: Priority): number => {
  switch (priority) {
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

export const getStatusOrder = (status: Status): number => {
  switch (status) {
    case "todo":
      return 1;
    case "in_progress":
      return 2;
    case "completed":
      return 3;
    default:
      return 0;
  }
};

export const getTaskProgress = (task: Task): number => {
  if (task.status === "completed") return 100;
  if (task.status === "todo") return 0;

  // For in_progress tasks, calculate based on subtasks or return default 50%
  return 50;
};

export const getTaskDueStatus = (
  task: Task,
): "overdue" | "due-soon" | "on-track" => {
  const now = new Date();
  const dueDate = new Date(task.dueDate);
  const diffDays = Math.ceil(
    (dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffDays < 0) return "overdue";
  if (diffDays <= 2) return "due-soon";
  return "on-track";
};

export const formatDate = (
  date: Date | string,
  format: "short" | "long" = "short",
): string => {
  const d = new Date(date);

  if (format === "short") {
    return d.toLocaleDateString();
  }

  return d.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getTimeAgo = (date: Date | string): string => {
  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  if (seconds < 60) return `${seconds} seconds ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  return `${years} years ago`;
};
