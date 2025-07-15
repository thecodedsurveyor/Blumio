import { BarChart3, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useTaskStore } from "../../../stores";

const TaskStats = () => {
  const { getTaskStats } = useTaskStore();
  const taskStats = getTaskStats();

  const stats = [
    {
      title: "Total Tasks",
      value: taskStats.total,
      icon: BarChart3,
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "In Progress",
      value: taskStats.inProgress,
      icon: Clock,
      color: "orange",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Completed",
      value: taskStats.completed,
      icon: CheckCircle,
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Overdue",
      value: taskStats.overdue,
      icon: AlertCircle,
      color: "red",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="rounded-lg border border-gray-200 bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.bgColor}`}
              >
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStats;
