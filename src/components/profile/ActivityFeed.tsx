import { FC } from "react";
import { ActivityFeedProps } from "../../types/profile";

type Activity = {
  id: number;
  type: string;
  description: string;
  time: string;
};

const ActivityFeed: FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <div className="divide-y divide-gray-200">
      {activities.map((activity: Activity) => (
        <div key={activity.id} className="p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.description}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
