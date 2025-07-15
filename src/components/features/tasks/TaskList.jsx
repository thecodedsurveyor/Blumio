import { CheckCircle } from "lucide-react";
import { useTaskStore, useUIStore } from "../../../stores";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { filterTasks } = useTaskStore();
  const { filters } = useUIStore();

  const filteredTasks = filterTasks(filters);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">
          Tasks ({filteredTasks.length})
        </h2>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-gray-400" />
          <p className="mb-2 text-gray-500">No tasks found</p>
          <p className="text-sm text-gray-400">
            Try adjusting your filters or create a new task
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
