import { CheckCircle, Plus } from "lucide-react";
import { useUIStore } from "../../../stores";
import NotificationCenter from "../notifications/NotificationCenter";

const DashboardHeader = () => {
  const { openCreateModal } = useUIStore();

  const handleCreateTask = () => {
    openCreateModal();
  };

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">TaskFlow</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleCreateTask}
              className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              New Task
            </button>
            <NotificationCenter />
            <div className="flex items-center gap-2">
              <button
                onClick={() => (window.location.href = "/profile")}
                className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-100"
              >
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1"
                  alt="User"
                  className="h-8 w-8 rounded-full border-2 border-gray-200"
                />
                <span className="text-sm text-gray-700">Sarah Johnson</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
