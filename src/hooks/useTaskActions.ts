import { useCallback } from "react";
import { useTaskStore } from "../stores/taskStore";
import type { Task } from "../stores/taskStore";
import type { FilterOptions, SortOptions } from "../types/common";

export const useTaskActions = () => {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    assignTask,
    unassignTask,
    updateTaskStatus,
    updateTaskPriority,
    filterTasks,
    sortTasks,
  } = useTaskStore();

  const getTaskById = useCallback(
    (id: string) => tasks.find((task) => task.id === id),
    [tasks],
  );

  const getFilteredTasks = useCallback(
    (filters: FilterOptions) => {
      let filtered = filterTasks({
        status: filters.status,
        priority: filters.priority,
        assignedTo: filters.assignedTo,
        tags: filters.tags,
      });

      if (filters.dateRange) {
        filtered = filtered.filter((task) => {
          const taskDate = new Date(task.dueDate);
          return (
            taskDate >= filters.dateRange!.startDate &&
            taskDate <= filters.dateRange!.endDate
          );
        });
      }

      return filtered;
    },
    [filterTasks],
  );

  const getSortedTasks = useCallback(
    (options: SortOptions, taskList: Task[] = tasks) => {
      return [...taskList].sort((a, b) => {
        const multiplier = options.direction === "asc" ? 1 : -1;

        switch (options.field) {
          case "priority":
            return (
              multiplier *
              (getPriorityWeight(b.priority) - getPriorityWeight(a.priority))
            );
          case "dueDate":
            return (
              multiplier *
              (new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
            );
          case "createdAt":
            return (
              multiplier *
              (new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime())
            );
          case "title":
            return multiplier * a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
    },
    [tasks],
  );

  return {
    getTaskById,
    getFilteredTasks,
    getSortedTasks,
    addTask,
    updateTask,
    deleteTask,
    assignTask,
    unassignTask,
    updateTaskStatus,
    updateTaskPriority,
  };
};

const getPriorityWeight = (priority: Task["priority"]): number => {
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
