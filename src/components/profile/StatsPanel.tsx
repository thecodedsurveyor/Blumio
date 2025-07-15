import { StatsPanelProps } from "../../types/profile";

function StatsPanel({ activityStats, t }: StatsPanelProps) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
      <div className="rounded-lg bg-gray-50 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          {t("profile.stats.tasksCompleted")}
        </h3>
        <p className="mt-2 text-3xl font-semibold text-gray-900">
          {activityStats.tasksCompleted}
        </p>
      </div>
      <div className="rounded-lg bg-gray-50 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          {t("profile.stats.currentStreak")}
        </h3>
        <p className="mt-2 text-3xl font-semibold text-gray-900">
          {activityStats.currentStreak}
        </p>
      </div>
      <div className="rounded-lg bg-gray-50 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          {t("profile.stats.hoursTracked")}
        </h3>
        <p className="mt-2 text-3xl font-semibold text-gray-900">
          {activityStats.hoursTracked}
        </p>
      </div>
      <div className="rounded-lg bg-gray-50 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          {t("profile.stats.projectsActive")}
        </h3>
        <p className="mt-2 text-3xl font-semibold text-gray-900">
          {activityStats.projectsActive}
        </p>
      </div>
    </div>
  );
}

export default StatsPanel;
