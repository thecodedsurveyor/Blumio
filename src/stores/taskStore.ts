import { create } from "zustand";
import { Status, Priority } from "../types/common";
import { mockTasks, mockUsers, mockActivities } from "../data/mockData";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  dueDate: string;
  tags: string[];
  assignedTo: string[];
  createdAt: string;
  updatedAt: string;
};

export type Activity = {
  id: string;
  taskId: string;
  userId: string;
  type: string;
  content: string;
  timestamp: string;
};

export type TaskUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

type TaskState = {
  tasks: Task[];
  activities: Activity[];
  users: TaskUser[];
  filters: {
    status?: Status[];
    priority?: Priority[];
    assignee?: string[];
    tags?: string[];
  };
  sort: {
    field: keyof Task;
    direction: "asc" | "desc";
  };
};

type TaskActions = {
  addTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  assignTask: (taskId: string, userId: string) => void;
  unassignTask: (taskId: string, userId: string) => void;
  updateTaskStatus: (taskId: string, status: Status) => void;
  updateTaskPriority: (taskId: string, priority: Priority) => void;
  addTaskComment: (taskId: string, userId: string, comment: string) => void;
  filterTasks: (filters: {
    status?: Status[];
    priority?: Priority[];
    assignedTo?: string[];
    tags?: string[];
  }) => void;
  sortTasks: (field: keyof Task, direction: "asc" | "desc") => void;
};

type TaskStore = TaskState & TaskActions;

export const useTaskStore = create<TaskStore>((set) => ({
  // State
  tasks: mockTasks,
  activities: [],
  users: mockUsers,
  filters: {},
  sort: {
    field: "createdAt",
    direction: "desc",
  },

  // Actions
  addTask: (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    set((state) => ({
      tasks: [...state.tasks, newTask],
      activities: [
        ...state.activities,
        {
          id: Date.now().toString(),
          taskId: newTask.id,
          userId: task.assignedTo[0] || "",
          type: "create",
          content: `Task "${task.title}" was created`,
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  },

  updateTask: (taskId, updates) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, ...updates, updatedAt: new Date().toISOString() }
          : task,
      ),
      activities: [
        ...state.activities,
        {
          id: Date.now().toString(),
          taskId,
          userId: "",
          type: "update",
          content: `Task was updated`,
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  },

  deleteTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
      activities: [
        ...state.activities,
        {
          id: Date.now().toString(),
          taskId,
          userId: "",
          type: "delete",
          content: `Task was deleted`,
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  },

  assignTask: (taskId, userId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              assignedTo: [...task.assignedTo, userId],
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
      activities: [
        ...state.activities,
        {
          id: Date.now().toString(),
          taskId,
          userId,
          type: "assign",
          content: `User was assigned to task`,
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  },

  unassignTask: (taskId, userId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              assignedTo: task.assignedTo.filter((id) => id !== userId),
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
      activities: [
        ...state.activities,
        {
          id: Date.now().toString(),
          taskId,
          userId,
          type: "assign",
          content: `User was unassigned from task`,
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  },

  updateTaskStatus: (taskId, status) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status,
              updatedAt: new Date().toISOString(),
              ...(status === "completed" && {
                completedAt: new Date().toISOString(),
              }),
            }
          : task,
      ),
      activities: [
        ...state.activities,
        {
          id: Date.now().toString(),
          taskId,
          userId: "",
          type: "status_change",
          content: `Task status was changed to ${status}`,
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  },

  updateTaskPriority: (taskId, priority) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, priority, updatedAt: new Date().toISOString() }
          : task,
      ),
      activities: [
        ...state.activities,
        {
          id: Date.now().toString(),
          taskId,
          userId: "",
          type: "update",
          content: `Task priority was changed to ${priority}`,
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  },

  addTaskComment: (taskId, userId, comment) => {
    set((state) => ({
      activities: [
        ...state.activities,
        {
          id: Date.now().toString(),
          taskId,
          userId,
          type: "comment",
          content: comment,
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  },

  filterTasks: ({ status, priority, assignedTo, tags }) => {
    const state = get();
    return state.tasks.filter((task) => {
      const statusMatch = !status || status.includes(task.status);
      const priorityMatch = !priority || priority.includes(task.priority);
      const assignedMatch =
        !assignedTo ||
        assignedTo.some((userId) => task.assignedTo.includes(userId));
      const tagsMatch = !tags || tags.some((tag) => task.tags.includes(tag));

      return statusMatch && priorityMatch && assignedMatch && tagsMatch;
    });
  },

  sortTasks: (sortBy) => {
    const state = get();
    return [...state.tasks].sort((a, b) => {
      switch (sortBy) {
        case "priority":
          return getPriorityOrder(b.priority) - getPriorityOrder(a.priority);
        case "dueDate":
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        case "createdAt":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        default:
          return 0;
      }
    });
  },
}));
