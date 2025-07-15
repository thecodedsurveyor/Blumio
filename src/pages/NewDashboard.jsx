import { Link } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiMessageSquare,
  FiUser,
  FiSettings,
  FiLogOut,
  FiCalendar,
  FiPlus,
  FiCheck,
  FiUpload,
} from "react-icons/fi";
import { RiPlantFill } from "react-icons/ri";
import { useUIStore } from "../stores/uiStore";
import Projects from "../components/features/dashboard/Projects";
import ProjectOverview from "../components/features/dashboard/ProjectOverview";
import Schedule from "../components/features/dashboard/Schedule";
import Messages from "../components/features/dashboard/Messages";
import Profile from "../components/features/dashboard/Profile";
import DashboardViewHeader from "../components/features/dashboard/DashboardViewHeader";
import { useState } from "react";
import { useTaskStore } from "../stores";
import { dailyTasks, messages } from "../data/dashboard";
import CalendarWidget from "../components/features/dashboard/CalendarWidget";
import DailyTaskList from "../components/features/dashboard/DailyTaskList";
import RecentMessages from "../components/features/dashboard/RecentMessages";
import RecentActivity from "../components/features/dashboard/RecentActivity";

const NewDashboard = () => {
  const { activeView, setActiveView } = useUIStore();
  const [expanded, setExpanded] = useState(false);
  const { activities } = useTaskStore();
  const getActivityIcon = (type) => {
    switch (type) {
      case "task_created":
        return <FiPlus className="h-4 w-4 text-blue-500" />;
      case "task_updated":
        return <FiCheck className="h-4 w-4 text-green-500" />;
      case "task_assigned":
        return <FiUser className="h-4 w-4 text-purple-500" />;
      case "comment_added":
        return <FiMessageSquare className="h-4 w-4 text-orange-500" />;
      case "file_uploaded":
        return <FiUpload className="h-4 w-4 text-indigo-500" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-gray-400" />;
    }
  };
  const getHoverColor = (view) => {
    switch (view) {
      case "dashboard":
        return "hover:bg-blue-900/50";
      case "projects":
        return "hover:bg-purple-900/50";
      case "schedule":
        return "hover:bg-green-900/50";
      case "messages":
        return "hover:bg-yellow-900/50";
      case "profile":
        return "hover:bg-red-900/50";
      case "settings":
        return "hover:bg-indigo-900/50";
      case "help":
        return "hover:bg-pink-900/50";
      case "logout":
        return "hover:bg-gray-800/80";
      default:
        return "hover:bg-gray-800";
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case "projects":
        return <Projects />;
      case "schedule":
        return <Schedule />;
      case "messages":
        return <Messages />;
      case "profile":
        return <Profile />;
      case "settings":
        return <div>Settings View (Coming Soon)</div>;
      default:
        return (
          <div className="h-full">
            <DashboardViewHeader title="Dashboard" />

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-6">
              {/* Project Overview */}
              <div className="col-span-12 lg:col-span-8">
                <ProjectOverview />
              </div>

              {/* Calendar */}
              <CalendarWidget />

              {/* Daily Task */}
              <DailyTaskList dailyTasks={dailyTasks} />

              {/* Recent Messages */}
              <RecentMessages messages={messages} />

              {/* Recent Activity */}
              <RecentActivity
                activities={activities}
                getActivityIcon={getActivityIcon}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#f6f6f6" }}>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 flex h-screen flex-col bg-gray-900 py-8 transition-all duration-300 ${
          expanded ? "w-64 px-4" : "w-16 items-center px-2"
        }`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {/* Logo */}
        <Link to="/" className="mb-8 flex items-center">
          <div className="rounded-lg bg-white/10 p-2">
            <RiPlantFill className="h-6 w-6 text-white" />
          </div>
          {expanded && (
            <span className="ml-3 text-xl font-bold text-white">TaskFlow</span>
          )}
        </Link>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col space-y-2">
          {[
            { view: "dashboard", icon: FiGrid, label: "Dashboard" },
            { view: "projects", icon: FiFolder, label: "Projects" },
            { view: "schedule", icon: FiCalendar, label: "Schedule" },
            { view: "messages", icon: FiMessageSquare, label: "Messages" },
            { view: "profile", icon: FiUser, label: "Members" },
            // Removed settings from here
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.view;
            const hoverColor = getHoverColor(item.view);

            return (
              <button
                key={item.view}
                onClick={() => setActiveView(item.view)}
                className={`flex w-full items-center rounded-lg p-3 text-left transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : `text-gray-400 ${hoverColor}`
                }`}
              >
                <Icon className="h-5 w-5" />
                {expanded && <span className="ml-3">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Settings and Logout at the bottom */}
        <div className="flex flex-col space-y-2">
          <button
            className={`flex w-full items-center rounded-lg p-3 text-left text-gray-400 transition-colors ${getHoverColor(
              "settings",
            )}`}
            onClick={() => setActiveView("settings")}
          >
            <FiSettings className="h-5 w-5" />
            {expanded && <span className="ml-3">Settings</span>}
          </button>
          <button
            className={`flex w-full items-center rounded-lg p-3 text-left text-gray-400 transition-colors ${getHoverColor(
              "logout",
            )}`}
          >
            <FiLogOut className="h-5 w-5" />
            {expanded && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          expanded ? "ml-64" : "ml-16"
        }`}
        style={{ backgroundColor: "#f6f6f6" }}
      >
        {renderContent()}
      </main>
    </div>
  );
};

export default NewDashboard;
