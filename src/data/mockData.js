// Mock Data for Dashboard

export const mockUsers = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@taskflow.com",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    role: "admin",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@taskflow.com",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    role: "member",
  },
  {
    id: "3",
    name: "Emma Davis",
    email: "emma@taskflow.com",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    role: "member",
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david@taskflow.com",
    avatar:
      "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    role: "member",
  },
];

export const mockTasks = [
  {
    id: "1",
    title: "Design User Authentication Flow",
    description:
      "Create wireframes and mockups for the user authentication system including login, signup, and password reset flows.",
    status: "in_progress",
    priority: "urgent",
    assignee: mockUsers[0],
    creator: mockUsers[1],
    dueDate: "2025-01-15",
    tags: ["design", "ux", "authentication"],
    timeEstimate: 480,
    timeSpent: 240,
    comments: [
      {
        id: "1",
        text: "Started working on the wireframes. Should have initial drafts by tomorrow.",
        author: mockUsers[0],
        createdAt: "2025-01-08T10:30:00Z",
      },
    ],
    attachments: [],
    createdAt: "2025-01-07T09:00:00Z",
    updatedAt: "2025-01-08T10:30:00Z",
  },
  {
    id: "2",
    title: "Implement Task Filtering System",
    description:
      "Add filtering functionality to allow users to filter tasks by priority, status, assignee, and due date.",
    status: "todo",
    priority: "medium",
    assignee: mockUsers[1],
    creator: mockUsers[0],
    dueDate: "2025-01-20",
    tags: ["frontend", "feature", "filters"],
    timeEstimate: 360,
    timeSpent: 0,
    comments: [],
    attachments: [],
    createdAt: "2025-01-08T14:00:00Z",
    updatedAt: "2025-01-08T14:00:00Z",
  },
  {
    id: "3",
    title: "Database Schema Migration",
    description:
      "Update the database schema to support the new task priority and tag features.",
    status: "completed",
    priority: "high",
    assignee: mockUsers[2],
    creator: mockUsers[0],
    dueDate: "2025-01-10",
    tags: ["backend", "database", "migration"],
    timeEstimate: 180,
    timeSpent: 165,
    comments: [
      {
        id: "2",
        text: "Migration completed successfully. All tests are passing.",
        author: mockUsers[2],
        createdAt: "2025-01-09T16:45:00Z",
      },
    ],
    attachments: [],
    createdAt: "2025-01-07T11:00:00Z",
    updatedAt: "2025-01-09T16:45:00Z",
  },
  {
    id: "4",
    title: "Setup Team Collaboration Features",
    description:
      "Implement real-time comments and file sharing for team collaboration on tasks.",
    status: "todo",
    priority: "medium",
    assignee: mockUsers[3],
    creator: mockUsers[0],
    dueDate: "2025-01-25",
    tags: ["collaboration", "real-time", "feature"],
    timeEstimate: 600,
    timeSpent: 0,
    comments: [],
    attachments: [],
    createdAt: "2025-01-08T16:00:00Z",
    updatedAt: "2025-01-08T16:00:00Z",
  },
];

export const mockActivities = [
  {
    id: "1",
    type: "task_created",
    task: mockTasks[3],
    user: mockUsers[0],
    description: 'created task "Setup Team Collaboration Features"',
    timestamp: "2025-01-08T16:00:00Z",
  },
  {
    id: "2",
    type: "comment_added",
    task: mockTasks[0],
    user: mockUsers[0],
    description: 'added a comment to "Design User Authentication Flow"',
    timestamp: "2025-01-08T10:30:00Z",
  },
  {
    id: "3",
    type: "task_updated",
    task: mockTasks[2],
    user: mockUsers[2],
    description: 'marked "Database Schema Migration" as completed',
    timestamp: "2025-01-09T16:45:00Z",
  },
  {
    id: "4",
    type: "task_assigned",
    task: mockTasks[1],
    user: mockUsers[0],
    description: 'assigned "Implement Task Filtering System" to Michael Chen',
    timestamp: "2025-01-08T14:00:00Z",
  },
];
