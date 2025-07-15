const RecentActivity = ({ activities, getActivityIcon }) => (
  <div className="col-span-12 mb-6 rounded-xl bg-white p-6 shadow-sm lg:col-span-4">
    <h2 className="mb-6 text-lg font-semibold">Recent Activity</h2>
    <div className="space-y-6">
      {activities.length === 0 ? (
        <p className="text-sm text-gray-500">No recent activity</p>
      ) : (
        activities.slice(0, 10).map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 rounded-lg p-4 transition-colors hover:bg-gray-50"
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
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-sm font-medium">
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

export default RecentActivity;
