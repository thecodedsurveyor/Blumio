import { Search, MessageCircle, Bell } from "lucide-react";
import PropTypes from "prop-types";

const DashboardViewHeader = ({ title, showDateNavigation = false }) => {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

        {/* Date Navigation - only shown for Schedule view */}
        {showDateNavigation && (
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
        )}
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative rounded-full bg-white p-2">
          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="round w-64 rounded-full bg-white py-2 pl-12 pr-4 text-sm focus:outline-none"
          />
        </div>
        <button className="rounded-full bg-white p-2 hover:bg-gray-100">
          <MessageCircle className="h-5 w-5 text-gray-600" />
        </button>
        <button className="relative rounded-full bg-white p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center space-x-3 rounded-full bg-white p-2">
          <img
            src="/images/sarah.svg"
            alt="Noah Williams"
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">Noah Williams</p>
            <p className="text-xs text-gray-500">Project Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
};

DashboardViewHeader.propTypes = {
  title: PropTypes.string.isRequired,
  showDateNavigation: PropTypes.bool,
};

export default DashboardViewHeader;
