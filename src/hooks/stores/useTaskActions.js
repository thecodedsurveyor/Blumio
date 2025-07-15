import { useTaskStore } from "../../stores/taskStore";
import { useNotificationStore } from "../../stores/notificationStore";
import { useTimerStore } from "../../stores/timerStore";

export const useTaskActions = () => {
  const {
    addTask,
    updateTask,
    deleteTask,
    assignTask,
    addComment,
    handleFileUpload,
    updateTaskTime,
  } = useTaskStore();

  const { addNotification, showVisualNotification } = useNotificationStore();
  const { stopTaskTimer } = useTimerStore();

  const handleTaskCreation = (taskData) => {
    addTask(taskData);
    addNotification(`Task "${taskData.title}" created successfully`, "success");
    showVisualNotification(
      `Task "${taskData.title}" created successfully`,
      "success",
    );
  };

  const handleTaskUpdate = (taskId, updates) => {
    updateTask(taskId, updates);

    // Add notification for status changes
    if (updates.status) {
      const statusMessages = {
        todo: "moved to To Do",
        in_progress: "started working on",
        completed: "completed",
      };

      const message = statusMessages[updates.status];
      if (message) {
        addNotification(`Task ${message}`, "info", taskId);
      }
    }
  };

  const handleTaskDeletion = (taskId) => {
    deleteTask(taskId);
    addNotification("Task deleted successfully", "info");
  };

  const handleTaskAssignment = (taskId, assignee) => {
    assignTask(taskId, assignee, (message) => {
      addNotification(message, "assignment", taskId);
    });
  };

  const handleCommentAdd = (taskId, text, author) => {
    addComment(taskId, text, author);
    addNotification("Comment added successfully", "info", taskId);
  };

  const handleFileUploadWithNotification = (
    taskId,
    attachment,
    attachmentId,
    action,
  ) => {
    handleFileUpload(taskId, attachment, attachmentId, action);

    if (action === "add") {
      addNotification(
        `File "${attachment.name}" uploaded successfully`,
        "success",
        taskId,
      );
    } else if (action === "remove") {
      addNotification("File removed successfully", "info", taskId);
    }
  };

  const handleTaskCompletion = (taskId) => {
    // Stop any active timer for this task
    const timerResult = stopTaskTimer();

    if (timerResult && timerResult.taskId === taskId) {
      updateTaskTime(taskId, timerResult.timeSpent, timerResult.timeEntry);
    }

    // Update task status
    updateTask(taskId, { status: "completed" });
    addNotification("Task completed! 🎉", "success", taskId);
  };

  return {
    handleTaskCreation,
    handleTaskUpdate,
    handleTaskDeletion,
    handleTaskAssignment,
    handleCommentAdd,
    handleFileUploadWithNotification,
    handleTaskCompletion,
    // Direct access to store actions
    addTask,
    updateTask,
    deleteTask,
    assignTask,
    addComment,
    handleFileUpload,
    updateTaskTime,
  };
};
