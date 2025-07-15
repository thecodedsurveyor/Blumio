import {
  ArrowUpDown,
  Filter,
  LayoutGrid,
  Plus,
  MoreHorizontal,
  Heart,
  MessageSquare,
  Paperclip,
} from "lucide-react";
import DashboardViewHeader from "./DashboardViewHeader";
import PropTypes from "prop-types";

const columns = [
  {
    id: "todo",
    title: "To Do",
    count: 12,
    color: "bg-orange-500",
    tasks: [
      {
        id: "1",
        title: "Illustration Creation",
        description:
          "Create custom graphics, illustrations, and icons to enhance the visual aspect of the project.",
        category: "Graphic Design",
        categoryColor: "bg-green-100 text-green-700",
        avatars: ["👨‍💼", "👩‍💼", "👨‍💻"],
        likes: 12,
        comments: 0,
        attachments: 4,
      },
      {
        id: "2",
        title: "Wireframe of ZeCoin",
        description: "",
        category: "UX Design",
        categoryColor: "bg-blue-100 text-blue-700",
        avatars: ["👨‍💼", "👩‍💼"],
        likes: 4,
        comments: 0,
        attachments: 2,
      },
    ],
  },
  {
    id: "progress",
    title: "In Progress",
    count: 6,
    color: "bg-blue-500",
    tasks: [
      {
        id: "3",
        title: "Performance Optimization in Gateway",
        description:
          "Optimize the app's performance by analyzing and improving loading speed, responsiveness, and resource utilization.",
        category: "App Developer",
        categoryColor: "bg-yellow-100 text-yellow-700",
        avatars: ["👨‍💼", "👩‍💼"],
        likes: 10,
        comments: 0,
        attachments: 2,
        progress: 65,
      },
      {
        id: "4",
        title: "Illustration for ZeCoin",
        description: "",
        category: "Graphic Design",
        categoryColor: "bg-green-100 text-green-700",
        avatars: ["👨‍💼", "👩‍💼"],
        likes: 0,
        comments: 0,
        attachments: 0,
        hasImage: true,
      },
    ],
  },
  {
    id: "review",
    title: "Need Review",
    count: 2,
    color: "bg-yellow-500",
    tasks: [
      {
        id: "5",
        title: "Documentation and Reporting",
        description:
          "Prepare detailed reports on payment gateway, including test results, defect summaries, and overall quality assessment.",
        category: "Quality Analysis",
        categoryColor: "bg-orange-100 text-orange-700",
        avatars: ["👨‍💼"],
        likes: 20,
        comments: 0,
        attachments: 3,
      },
      {
        id: "6",
        title: "Performance and Load Testing",
        description:
          "Identify performance bottlenecks, analyze system behavior, and provide recommendations for optimization.",
        category: "Quality Analysis",
        categoryColor: "bg-orange-100 text-orange-700",
        avatars: ["👨‍💼", "👩‍💼"],
        likes: 12,
        comments: 0,
        attachments: 4,
      },
    ],
  },
  {
    id: "completed",
    title: "Completed",
    count: 15,
    color: "bg-green-500",
    tasks: [
      {
        id: "7",
        title: "Ensure Security & Data Protection",
        description:
          "Implemented security measures to protect user data and ensure compliance with relevant regulations.",
        category: "App Developer",
        categoryColor: "bg-yellow-100 text-yellow-700",
        avatars: ["👨‍💼", "👩‍💼", "👨‍💻"],
        likes: 42,
        comments: 0,
        attachments: 7,
      },
      {
        id: "8",
        title: "Hero Section Design for Grit",
        description:
          "Created 2 themes for Grit and implemented prototyping for the same.",
        category: "UI Design",
        categoryColor: "bg-blue-100 text-blue-700",
        avatars: ["👨‍💼", "👩‍💼", "👨‍💻"],
        likes: 15,
        comments: 0,
        attachments: 3,
      },
    ],
  },
];

function TaskCardComponent({ task }) {
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span
          className={`rounded px-2 py-1 text-xs font-medium ${task.categoryColor}`}
        >
          {task.category}
        </span>
        <MoreHorizontal className="h-4 w-4 text-gray-400" />
      </div>

      <h3 className="mb-2 text-sm font-semibold text-gray-900">{task.title}</h3>

      {task.description && (
        <p className="mb-3 text-xs leading-relaxed text-gray-600">
          {task.description}
        </p>
      )}

      {task.progress && (
        <div className="mb-3">
          <div className="mb-1 flex justify-between text-xs">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">{task.progress}%</span>
          </div>
          <div className="h-1 w-full rounded-full bg-gray-200">
            <div
              className="h-1 rounded-full bg-blue-500"
              style={{ width: `${task.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {task.hasImage && (
        <div className="mb-3 flex h-24 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-yellow-50 p-4">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400">
              <span className="font-bold text-white">₹</span>
            </div>
            <span className="text-xs text-gray-600">ZeCoin</span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-1">
            {task.avatars.map((avatar, index) => (
              <div
                key={index}
                className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs"
              >
                {avatar}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3 text-gray-400">
          <div className="flex items-center space-x-1">
            <Heart className="h-3 w-3" />
            <span className="text-xs">{task.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageSquare className="h-3 w-3" />
            <span className="text-xs">{task.comments}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Paperclip className="h-3 w-3" />
            <span className="text-xs">{task.attachments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

TaskCardComponent.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
    categoryColor: PropTypes.string.isRequired,
    avatars: PropTypes.arrayOf(PropTypes.string).isRequired,
    likes: PropTypes.number,
    comments: PropTypes.number,
    attachments: PropTypes.number,
    progress: PropTypes.number,
    hasImage: PropTypes.bool,
  }).isRequired,
};

function Schedule() {
  return (
    <div className="flex h-full flex-col">
      <DashboardViewHeader title="Schedule" />

      {/* Controls */}
      <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-4">
        <div className="flex items-center space-x-4">
          {/* Date Navigation */}
          <div className="flex items-center space-x-2">
            <button className="rounded p-1 hover:bg-gray-100">
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-sm font-medium text-gray-900">
              6 Jul, 2023
            </span>
            <button className="rounded p-1 hover:bg-gray-100">
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 rounded px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
            <ArrowUpDown className="h-4 w-4" />
            <span>Sort</span>
          </button>

          <button className="flex items-center space-x-2 rounded px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>

          <button className="rounded p-2 text-gray-600 hover:bg-gray-100">
            <LayoutGrid className="h-4 w-4" />
          </button>

          <button className="flex items-center space-x-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            <Plus className="h-4 w-4" />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 rounded-lg  p-6">
        <div className="grid h-full grid-cols-4 gap-12">
          {columns.map((column) => (
            <div
              key={column.id}
              className="flex flex-col rounded-lg bg-white shadow-md"
            >
              <div
                className={`border-b-4 p-4 ${
                  column.id === "todo"
                    ? "border-red-500"
                    : column.id === "progress"
                    ? "border-blue-500"
                    : column.id === "review"
                    ? "border-yellow-500"
                    : column.id === "completed"
                    ? "border-orange-500"
                    : "border-gray-200"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={`h-2 w-2 rounded-full ${column.color}`}
                    ></div>
                    <span className="font-medium text-gray-900">
                      {column.title}
                    </span>
                    <span className="text-sm text-gray-500">
                      {column.count}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="rounded p-1 hover:bg-gray-200">
                      <Plus className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="rounded p-1 hover:bg-gray-200">
                      <MoreHorizontal className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto  p-4">
                {column.tasks.map((task) => (
                  <TaskCardComponent key={task.id} task={task} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
