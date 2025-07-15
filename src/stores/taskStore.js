import { create } from "zustand";
import { mockTasks, mockActivities, mockUsers } from "../data/mockData";
import { getPriorityOrder } from "../utils/taskUtils";

export const useTaskStore = create((set, get) => ({
  // State
  tasks: mockTasks,
  activities: mockActivities,
  loading: false,
  error: null,

  // Actions
  addTask: (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    set((state) => ({
      tasks: [newTask, ...state.tasks],
    }));

    // Add activity
    const newActivity = {
      id: Date.now().toString(),
      type: "task_created",
      task: newTask,
      user: task.creator,
      description: `created task "${task.title}"`,
      timestamp: new Date().toISOString(),
    };

    set((state) => ({
      activities: [newActivity, ...state.activities],
    }));
  },

  updateTask: (taskId, updates) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, ...updates, updatedAt: new Date().toISOString() }
          : task,
      ),
    }));
  },

  deleteTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
  },

  assignTask: (taskId, assignee, notificationCallback) => {
    const { tasks } = get();

    // Update task
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, assignee } : task,
      ),
    }));

    // Add activity
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      const newActivity = {
        id: Date.now().toString(),
        type: "task_assigned",
        task: { ...task, assignee },
        user: mockUsers[0], // Current user doing the assignment
        description: `assigned "${task.title}" to ${assignee.name}`,
        timestamp: new Date().toISOString(),
      };

      set((state) => ({
        activities: [newActivity, ...state.activities],
      }));

      // Trigger notification
      if (notificationCallback && assignee.id !== mockUsers[0].id) {
        notificationCallback(
          `Task "${task.title}" assigned to ${assignee.name}`,
        );
      }
    }
  },

  addComment: (taskId, text, author) => {
    const { tasks } = get();

    const comment = {
      id: Date.now().toString(),
      text,
      author,
      createdAt: new Date().toISOString(),
    };

    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, comments: [...task.comments, comment] }
          : task,
      ),
    }));

    // Add activity
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

      set((state) => ({
        activities: [newActivity, ...state.activities],
      }));
    }
  },

  filterTasks: (filters) => {
    const { tasks } = get();

    let filteredTasks = tasks.filter((task) => {
      if (filters.status && task.status !== filters.status) return false;
      if (filters.priority && task.priority !== filters.priority) return false;
      if (filters.assignee && task.assignee?.id !== filters.assignee)
        return false;
      if (
        filters.search &&
        !task.title.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;

      // Tag filtering
      if (filters.tags) {
        const searchTags = filters.tags
          .toLowerCase()
          .split(",")
          .map((t) => t.trim());
        const hasMatchingTag = searchTags.some((searchTag) =>
          task.tags.some((taskTag) =>
            taskTag.toLowerCase().includes(searchTag),
          ),
        );
        if (!hasMatchingTag) return false;
      }

      // Date range filtering
      if (filters.dateRange) {
        const taskDate = new Date(task.dueDate);
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        switch (filters.dateRange) {
          case "today":
            if (taskDate.toDateString() !== today.toDateString()) return false;
            break;
          case "thisWeek":
            if (
              taskDate < startOfWeek ||
              taskDate >
                new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000)
            )
              return false;
            break;
          case "thisMonth":
            if (taskDate < startOfMonth) return false;
            break;
          case "overdue":
            if (taskDate >= today || task.status === "completed") return false;
            break;
        }
      }

      return true;
    });

    // Apply sorting
    if (filters.sortBy) {
      filteredTasks.sort((a, b) => {
        let aValue, bValue;

        switch (filters.sortBy) {
          case "priority":
            aValue = getPriorityOrder(a.priority);
            bValue = getPriorityOrder(b.priority);
            break;
          case "dueDate":
            aValue = new Date(a.dueDate);
            bValue = new Date(b.dueDate);
            break;
          case "created":
            aValue = new Date(a.createdAt);
            bValue = new Date(b.createdAt);
            break;
          case "title":
            aValue = a.title.toLowerCase();
            bValue = b.title.toLowerCase();
            break;
          default:
            return 0;
        }

        if (filters.sortOrder === "desc") {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        } else {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        }
      });
    }

    return filteredTasks;
  },

  handleFileUpload: (
    taskId,
    attachment,
    attachmentId = null,
    action = "add",
  ) => {
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id !== taskId) return task;

        let updatedAttachments = [...(task.attachments || [])];

        if (action === "add") {
          updatedAttachments.push(attachment);
        } else if (action === "remove" && attachmentId) {
          updatedAttachments = updatedAttachments.filter(
            (att) => att.id !== attachmentId,
          );
        } else if (action === "update" && attachmentId) {
          updatedAttachments = updatedAttachments.map((att) =>
            att.id === attachmentId ? { ...att, ...attachment } : att,
          );
        }

        return {
          ...task,
          attachments: updatedAttachments,
          updatedAt: new Date().toISOString(),
        };
      }),
    }));

    // Add activity for file upload
    if (action === "add") {
      const { tasks } = get();
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        const newActivity = {
          id: Date.now().toString(),
          type: "file_uploaded",
          task,
          user: mockUsers[0],
          description: `uploaded file "${attachment.name}" to "${task.title}"`,
          timestamp: new Date().toISOString(),
        };

        set((state) => ({
          activities: [newActivity, ...state.activities],
        }));
      }
    }
  },

  updateTaskTime: (taskId, newTimeSpent, timeEntry) => {
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id !== taskId) return task;

        const updatedTimeEntries = [...(task.timeEntries || [])];
        if (timeEntry) {
          updatedTimeEntries.push(timeEntry);
        }

        return {
          ...task,
          timeSpent: newTimeSpent,
          timeEntries: updatedTimeEntries,
          updatedAt: new Date().toISOString(),
        };
      }),
    }));
  },

  // Computed values
  getTaskStats: () => {
    const { tasks } = get();
    const total = tasks.length;
    const completed = tasks.filter(
      (task) => task.status === "completed",
    ).length;
    const inProgress = tasks.filter(
      (task) => task.status === "in_progress",
    ).length;
    const overdue = tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      const today = new Date();
      return dueDate < today && task.status !== "completed";
    }).length;

    return { total, completed, inProgress, overdue };
  },

  // Loading states
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
