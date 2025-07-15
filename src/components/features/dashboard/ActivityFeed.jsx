import { Plus, CheckCircle } from "lucide-react";
import { useTaskStore } from "../../../stores";

const ActivityFeed = () => {
  const { activities } = useTaskStore();

  const getActivityIcon = (type) => {
    switch (type) {
      case "task_created":
        return <Plus className="h-4 w-4 text-blue-500" />;
      case "task_updated":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "task_assigned":
        return <CheckCircle className="h-4 w-4 text-purple-500" />;
      case "comment_added":
        return <CheckCircle className="h-4 w-4 text-orange-500" />;
      case "file_uploaded":
        return <CheckCircle className="h-4 w-4 text-indigo-500" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-gray-400" />;
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h3 className="mb-4 font-medium text-gray-900">Recent Activity</h3>
      <div className="space-y-3">
        {activities.length === 0 ? (
          <p className="text-sm text-gray-500">No recent activity</p>
        ) : (
          activities.slice(0, 10).map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
            >
              <div className="mt-1 flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <img
                    src={
                      activity.user.avatar ||
                      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1"
                    }
                    alt={activity.user.name}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {activity.user.name}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="mt-1 text-xs text-gray-400">
                  {new Date(activity.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;
