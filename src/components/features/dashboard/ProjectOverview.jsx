import { FiChevronLeft, FiChevronRight, FiMessageSquare } from "react-icons/fi";
import projects from "../../../data/projects";

const ProjectOverview = () => (
  <>
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-lg font-semibold">Project Overview</h2>
      <div className="flex items-center gap-2">
        <button className="rounded-lg p-2 hover:bg-gray-100">
          <FiChevronLeft className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 hover:bg-gray-100">
          <FiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.name} className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${project.logo.bg} text-white`}
              >
                {project.logo.text}
              </div>
              <div>
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-sm text-gray-500">
                  Task Done: {project.tasksDone}
                </p>
              </div>
            </div>
            <button className="text-gray-400">...</button>
          </div>
          <div className="mb-3">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm text-gray-500">Progress</span>
              <span className="text-sm font-medium">{project.percentage}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100">
              <div
                className="h-1.5 rounded-full bg-blue-500"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {project.team.map((member, idx) => (
                <img
                  key={idx}
                  src={member}
                  alt={`Team member ${idx + 1}`}
                  className="h-6 w-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <FiMessageSquare className="h-4 w-4" />
              <span className="text-xs">{project.messages}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default ProjectOverview;
