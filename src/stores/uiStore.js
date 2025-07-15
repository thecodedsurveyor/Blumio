import { create } from "zustand";

export const useUIStore = create((set, get) => ({
  // Modal states
  selectedTask: null,
  isTaskModalOpen: false,
  isCreateModalOpen: false,
  isProfileModalOpen: false,

  // Active view state
  activeView: "dashboard", // "dashboard" | "projects" | "schedule" | "messages" | "profile" | "settings"
  setActiveView: (view) => set({ activeView: view }),

  // Filter states
  filters: {
    search: "",
    status: "",
    priority: "",
    assignee: "",
    tags: "",
    dateRange: "",
    sortBy: "priority",
    sortOrder: "desc",
  },

  // Loading states
  isLoading: false,
  loadingMessage: "",

  // Sidebar and navigation
  sidebarOpen: false,
  activeTab: "dashboard",

  // Actions for modals
  openTaskModal: (task) => {
    set({
      selectedTask: task,
      isTaskModalOpen: true,
    });
  },

  closeTaskModal: () => {
    set({
      selectedTask: null,
      isTaskModalOpen: false,
    });
  },

  openCreateModal: () => {
    set({ isCreateModalOpen: true });
  },

  closeCreateModal: () => {
    set({ isCreateModalOpen: false });
  },

  openProfileModal: () => {
    set({ isProfileModalOpen: true });
  },

  closeProfileModal: () => {
    set({ isProfileModalOpen: false });
  },

  // Actions for filters
  setFilters: (newFilters) => {
    set({ filters: newFilters });
  },

  updateFilter: (key, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    }));
  },

  clearFilters: () => {
    set({
      filters: {
        search: "",
        status: "",
        priority: "",
        assignee: "",
        tags: "",
        dateRange: "",
        sortBy: "priority",
        sortOrder: "desc",
      },
    });
  },

  // Actions for loading states
  setLoading: (isLoading, message = "") => {
    set({
      isLoading,
      loadingMessage: message,
    });
  },

  // Actions for navigation
  setSidebarOpen: (open) => {
    set({ sidebarOpen: open });
  },

  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }));
  },

  setActiveTab: (tab) => {
    set({ activeTab: tab });
  },

  // Computed values
  hasActiveFilters: () => {
    const { filters } = get();
    return !!(
      filters.search ||
      filters.status ||
      filters.priority ||
      filters.assignee ||
      filters.tags ||
      filters.dateRange
    );
  },

  getFilterCount: () => {
    const { filters } = get();
    let count = 0;
    if (filters.search) count++;
    if (filters.status) count++;
    if (filters.priority) count++;
    if (filters.assignee) count++;
    if (filters.tags) count++;
    if (filters.dateRange) count++;
    return count;
  },
}));
