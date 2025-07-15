import { X } from "lucide-react";
import { handleAddSkill, handleRemoveSkill } from "../../utils/profileUtils";

const Skills = ({ skills, isEditing, onChange, t }) => (
  <section className="mb-8 rounded-lg bg-white p-6 shadow">
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-semibold">{t("profile.skills")}</h2>
    </div>
    <div className="space-y-4">
      {/* Skills list */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
          >
            {skill}
            {isEditing && (
              <button
                onClick={() => handleRemoveSkill(skills, skill, onChange)}
                className="text-blue-600 hover:text-blue-800"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>
      {/* Add skill form */}
      {isEditing && (
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={t("profile.addSkill")}
            className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill(skills, e.target.value, onChange);
                e.target.value = "";
              }
            }}
          />
        </div>
      )}
    </div>
  </section>
);

export default Skills;
