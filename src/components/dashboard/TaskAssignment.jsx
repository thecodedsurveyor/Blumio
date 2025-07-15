import { useState } from "react";
import PropTypes from "prop-types";
import { User } from "lucide-react";

const TaskAssignment = ({ task, users, onAssign, onNotification }) => {
  const [selectedUser, setSelectedUser] = useState(task.assignee?.id || "");
  const [isAssigning, setIsAssigning] = useState(false);

  const handleAssign = async () => {
    if (!selectedUser) return;

    setIsAssigning(true);
    const assignee = users.find((u) => u.id === selectedUser);

    // Simulate API delay
    setTimeout(() => {
      onAssign(task.id, assignee, onNotification);
      setIsAssigning(false);
    }, 300);
  };

  return (
    <div className="flex items-center gap-2">
      <User className="h-4 w-4 text-gray-400" />
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        disabled={isAssigning}
        className="flex-1 rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        <option value="">Unassigned</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      {selectedUser !== (task.assignee?.id || "") && (
        <button
          onClick={handleAssign}
          disabled={isAssigning}
          className="rounded-md bg-blue-600 px-3 py-1 text-xs text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {isAssigning ? (
            <div className="h-3 w-3 animate-spin rounded-full border border-white border-t-transparent"></div>
          ) : (
            "Assign"
          )}
        </button>
      )}
    </div>
  );
};

TaskAssignment.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    assignee: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onAssign: PropTypes.func.isRequired,
  onNotification: PropTypes.func,
};

export default TaskAssignment;
