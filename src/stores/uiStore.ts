import { create } from "zustand";
import { Theme } from "../types/common";

interface UIState {
  theme: Theme;
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  modalContent: JSX.Element | null;
  isLoading: boolean;
  currentView: "list" | "board" | "calendar";
}

interface UIActions {
  setTheme: (theme: Theme) => void;
  toggleSidebar: () => void;
  openModal: (content: JSX.Element) => void;
  closeModal: () => void;
  setLoading: (isLoading: boolean) => void;
  setView: (view: UIState["currentView"]) => void;
}

const defaultTheme: Theme = {
  primary: "#3B82F6",
  secondary: "#6B7280",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
};

export const useUIStore = create<UIState & UIActions>((set) => ({
  theme: defaultTheme,
  isSidebarOpen: true,
  isModalOpen: false,
  modalContent: null,
  isLoading: false,
  currentView: "list",

  setTheme: (theme) => set({ theme }),

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  openModal: (content) => set({ isModalOpen: true, modalContent: content }),

  closeModal: () => set({ isModalOpen: false, modalContent: null }),

  setLoading: (isLoading) => set({ isLoading }),

  setView: (view) => set({ currentView: view }),
}));
