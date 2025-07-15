import { Task, Activity, TaskUser } from "../stores/taskStore";

export const mockUsers: TaskUser[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://api.dicebear.com/6.x/adventurer/svg?seed=John",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://api.dicebear.com/6.x/adventurer/svg?seed=Jane",
  },
];

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Implement TypeScript Migration",
    description:
      "Convert all JavaScript files to TypeScript for better type safety",
    status: "in_progress",
    priority: "high",
    assignedTo: ["1"],
    dueDate: "2025-07-20T00:00:00.000Z",
    tags: ["typescript", "migration"],
    createdAt: "2025-07-13T10:00:00.000Z",
    updatedAt: "2025-07-13T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Update Documentation",
    description: "Update project documentation to reflect TypeScript changes",
    status: "todo",
    priority: "medium",
    assignedTo: ["2"],
    dueDate: "2025-07-25T00:00:00.000Z",
    tags: ["documentation"],
    createdAt: "2025-07-13T11:00:00.000Z",
    updatedAt: "2025-07-13T11:00:00.000Z",
  },
];

export const mockActivities: Activity[] = [
  {
    id: "1",
    taskId: "1",
    userId: "1",
    type: "create",
    description: 'Task "Implement TypeScript Migration" was created',
    createdAt: "2025-07-13T10:00:00.000Z",
  },
  {
    id: "2",
    taskId: "2",
    userId: "2",
    type: "create",
    description: 'Task "Update Documentation" was created',
    createdAt: "2025-07-13T11:00:00.000Z",
  },
];
