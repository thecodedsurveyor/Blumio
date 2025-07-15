// Import refactored components
import DashboardHeader from "../components/features/dashboard/DashboardHeader";
import TaskStats from "../components/features/dashboard/TaskStats";
import TaskFilters from "../components/features/tasks/TaskFilters";
import TaskList from "../components/features/tasks/TaskList";
import ActivityFeed from "../components/features/dashboard/ActivityFeed";

// Import modal components
import TaskModal from "../components/features/tasks/TaskModal";
import CreateTaskModal from "../components/features/tasks/CreateTaskModal";
import CountdownTimer from "../components/features/timer/CountdownTimer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <TaskStats />

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Tasks Section */}
          <div className="lg:col-span-3">
            <TaskFilters />
            <TaskList />
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <ActivityFeed />
          </div>
        </div>
      </div>

      {/* Modals */}
      <TaskModal />
      <CreateTaskModal />

      {/* Countdown Timer */}
      <CountdownTimer />
    </div>
  );
};

export default Dashboard;
