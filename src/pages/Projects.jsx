import { Link } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiMessageSquare,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiSearch,
  FiBell,
  FiRefreshCw,
  FiFilter,
  FiList,
  FiMoreHorizontal,
  FiClock,
  FiFile,
  FiUsers,
  FiMessageCircle,
} from "react-icons/fi";
import { RiPlantFill } from "react-icons/ri";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "ZeCoin",
      logo: {
        bg: "bg-orange-500",
        text: "Z",
      },
      date: "10/Sep/2023",
      files: "80 Files",
      members: "14 Members",
      comments: "75 Comments",
      progress: {
        done: 70,
        total: 110,
        percentage: "65%",
      },
      team: [
        "/images/sarah.svg",
        "/images/sarah.svg",
        "/images/sarah.svg",
        "/images/sarah.svg",
      ],
    },
    {
      id: 2,
      name: "Catalyst",
      logo: {
        bg: "bg-blue-500",
        text: "C",
      },
      date: "10/Sep/2023",
      files: "85 Files",
      members: "14 Members",
      comments: "75 Comments",
      progress: {
        done: 81,
        total: 90,
        percentage: "34%",
      },
      team: ["/images/sarah.svg", "/images/sarah.svg", "/images/sarah.svg"],
    },
    {
      id: 3,
      name: "Unzer",
      logo: {
        bg: "bg-green-500",
        text: "U",
      },
      date: "10/Sep/2023",
      files: "85 Files",
      members: "14 Members",
      comments: "75 Comments",
      progress: {
        done: 70,
        total: 110,
        percentage: "65%",
      },
      team: ["/images/sarah.svg", "/images/sarah.svg", "/images/sarah.svg"],
    },
    {
      id: 4,
      name: "Grit",
      logo: {
        bg: "bg-yellow-500",
        text: "G",
      },
      date: "10/Sep/2023",
      files: "85 Files",
      members: "14 Members",
      comments: "80 Comments",
      progress: {
        done: 40,
        total: 140,
        percentage: "40%",
      },
      team: ["/images/sarah.svg", "/images/sarah.svg", "/images/sarah.svg"],
    },
    {
      id: 5,
      name: "Evolve",
      logo: {
        bg: "bg-red-500",
        text: "E",
      },
      date: "10/Sep/2023",
      files: "85 Files",
      members: "14 Members",
      comments: "75 Comments",
      progress: {
        done: 70,
        total: 110,
        percentage: "65%",
      },
      team: ["/images/sarah.svg", "/images/sarah.svg", "/images/sarah.svg"],
    },
    {
      id: 6,
      name: "Apex",
      logo: {
        bg: "bg-gray-500",
        text: "A",
      },
      date: "10/Sep/2023",
      files: "85 Files",
      members: "14 Members",
      comments: "75 Comments",
      progress: {
        done: 70,
        total: 110,
        percentage: "65%",
      },
      team: ["/images/sarah.svg", "/images/sarah.svg", "/images/sarah.svg"],
    },
    {
      id: 7,
      name: "Renaissance",
      logo: {
        bg: "bg-purple-500",
        text: "R",
      },
      date: "10/Sep/2023",
      files: "85 Files",
      members: "14 Members",
      comments: "75 Comments",
      progress: {
        done: 70,
        total: 110,
        percentage: "65%",
      },
      team: ["/images/sarah.svg", "/images/sarah.svg", "/images/sarah.svg"],
    },
    {
      id: 8,
      name: "Horizon",
      logo: {
        bg: "bg-yellow-500",
        text: "H",
      },
      date: "10/Sep/2023",
      files: "85 Files",
      members: "14 Members",
      comments: "75 Comments",
      progress: {
        done: 70,
        total: 110,
        percentage: "65%",
      },
      team: ["/images/sarah.svg", "/images/sarah.svg", "/images/sarah.svg"],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 flex h-screen w-16 flex-col items-center bg-gray-900 py-8">
        <Link to="/" className="mb-8">
          <div className="rounded-lg bg-white/10 p-2">
            <RiPlantFill className="h-6 w-6 text-white" />
          </div>
        </Link>

        <nav className="flex flex-1 flex-col items-center space-y-6">
          <button className="rounded-lg p-2 text-gray-500 hover:bg-white/10">
            <FiGrid className="h-5 w-5" />
          </button>
          <button className="rounded-lg bg-white/10 p-2">
            <FiFolder className="h-5 w-5 text-white" />
          </button>
          <button className="rounded-lg p-2 text-gray-500 hover:bg-white/10">
            <FiMessageSquare className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 text-gray-500 hover:bg-white/10">
            <FiUser className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 text-gray-500 hover:bg-white/10">
            <FiSettings className="h-5 w-5" />
          </button>
        </nav>

        <div className="flex flex-col items-center space-y-6">
          <button className="rounded-lg p-2 text-gray-500 hover:bg-white/10">
            <FiHelpCircle className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 text-gray-500 hover:bg-white/10">
            <FiLogOut className="h-5 w-5" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-16 flex-1 px-8 py-8">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-64 rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button className="rounded-lg p-2 hover:bg-gray-100">
              <FiRefreshCw className="h-5 w-5 text-gray-600" />
            </button>
            <button className="relative rounded-lg p-2 hover:bg-gray-100">
              <FiBell className="h-5 w-5 text-gray-600" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center space-x-3">
              <img
                src="/images/sarah.svg"
                alt="Noah Williams"
                className="h-8 w-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Noah Williams
                </p>
                <p className="text-xs text-gray-500">Project Manager</p>
              </div>
            </div>
          </div>
        </header>

        {/* Tabs and Actions */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex space-x-1">
            <button className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-white hover:text-gray-900">
              All Projects
            </button>
            <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm">
              Active
            </button>
            <button className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-white hover:text-gray-900">
              Upcoming
            </button>
            <button className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-white hover:text-gray-900">
              Completed
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-white">
              <FiFilter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Sort</span>
            </button>
            <button className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-white">
              <FiFilter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Filter</span>
            </button>
            <div className="flex rounded-lg bg-white p-1 shadow-sm">
              <button className="rounded bg-gray-900 p-1 text-white">
                <FiGrid className="h-4 w-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <FiList className="h-4 w-4" />
              </button>
            </div>
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white">
              Add Project
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <button className="absolute right-4 top-4 rounded-lg p-1 opacity-0 transition-opacity hover:bg-gray-100 group-hover:opacity-100">
                <FiMoreHorizontal className="h-5 w-5 text-gray-400" />
              </button>

              <div className="mb-4 flex items-start space-x-4">
                <div
                  className={`rounded-xl ${project.logo.bg} p-3 text-lg font-semibold text-white`}
                >
                  {project.logo.text}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FiClock className="h-3.5 w-3.5" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiFile className="h-3.5 w-3.5" />
                      <span>{project.files}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <FiUsers className="h-3.5 w-3.5" />
                  <span>{project.members}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FiMessageCircle className="h-3.5 w-3.5" />
                  <span>{project.comments}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-gray-600">
                    Task Done: {project.progress.done}/{project.progress.total}
                  </span>
                  <span className="font-medium text-gray-900">
                    {project.progress.percentage}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-gray-100">
                  <div
                    className="h-1.5 rounded-full bg-blue-600"
                    style={{ width: project.progress.percentage }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.team.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="Team member"
                      className="h-8 w-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <button className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white">
                  Last Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
