import React from "react";
import { CheckCircle, Plus, Mail, Activity } from "lucide-react";

export const getActivityIcon = (type: string): React.ReactElement => {
  switch (type) {
    case "task_completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "task_created":
      return <Plus className="h-4 w-4 text-blue-500" />;
    case "comment_added":
      return <Mail className="h-4 w-4 text-purple-500" />;
    default:
      return <Activity className="h-4 w-4 text-gray-500" />;
  }
};

export const handleAddSkill = (
  formData: { skills: string[] },
  skill: string,
  onChange: (data: { skills: string[] }) => void,
): void => {
  if (skill && !formData.skills.includes(skill)) {
    onChange({
      ...formData,
      skills: [...formData.skills, skill],
    });
  }
};

export const handleRemoveSkill = (
  formData: { skills: string[] },
  skillToRemove: string,
  onChange: (data: { skills: string[] }) => void,
): void => {
  onChange({
    ...formData,
    skills: formData.skills.filter((skill) => skill !== skillToRemove),
  });
};
