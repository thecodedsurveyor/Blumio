import { create } from "zustand";

export const useNotificationStore = create((set, get) => ({
  // State
  notifications: [
    {
      id: "1",
      message: "Task 'Design User Authentication Flow' is overdue",
      type: "overdue",
      timestamp: new Date().toISOString(),
      read: false,
      taskId: "1",
    },
    {
      id: "2",
      message: "You've been assigned to 'Implement Task Filtering System'",
      type: "assignment",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      read: false,
      taskId: "2",
    },
  ],

  // Actions
  addNotification: (message, type, taskId = null) => {
    const newNotification = {
      id: Date.now().toString(),
      message,
      type,
      timestamp: new Date().toISOString(),
      read: false,
      taskId,
    };

    set((state) => ({
      notifications: [newNotification, ...state.notifications],
    }));
  },

  showVisualNotification: (message, type = "info") => {
    // Create temporary visual notification
    const notification = document.createElement("div");
    notification.className =
      "fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg z-50 transition-all transform translate-x-full";

    // Set color based on type
    if (type === "success") {
      notification.className = notification.className.replace(
        "bg-blue-600",
        "bg-green-600",
      );
    } else if (type === "error") {
      notification.className = notification.className.replace(
        "bg-blue-600",
        "bg-red-600",
      );
    } else if (type === "warning") {
      notification.className = notification.className.replace(
        "bg-blue-600",
        "bg-yellow-600",
      );
    }

    notification.innerHTML = `
      <div class="flex items-center gap-2">
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
        </svg>
        ${message}
      </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.classList.remove("translate-x-full");
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add("translate-x-full");
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  },

  markNotificationAsRead: (notificationId) => {
    set((state) => ({
      notifications: state.notifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification,
      ),
    }));
  },

  markAllNotificationsAsRead: () => {
    set((state) => ({
      notifications: state.notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    }));
  },

  removeNotification: (notificationId) => {
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== notificationId,
      ),
    }));
  },

  clearAllNotifications: () => {
    set({ notifications: [] });
  },

  // Computed values
  getUnreadCount: () => {
    const { notifications } = get();
    return notifications.filter((n) => !n.read).length;
  },

  getNotificationsByType: (type) => {
    const { notifications } = get();
    return notifications.filter((n) => n.type === type);
  },
}));
