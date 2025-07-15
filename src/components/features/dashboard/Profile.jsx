import {
  Briefcase,
  CheckCircle,
  Clock,
  Calendar,
  Mail,
  MapPin,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import DashboardViewHeader from "./DashboardViewHeader";

const profiles = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Frontend Developer",
    avatar:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    email: "sarah.johnson@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    isOnline: true,
    rating: 4.9,
    totalProjects: 24,
    completedProjects: 18,
    activeProjects: [
      {
        id: "1",
        name: "E-commerce Platform",
        status: "active",
        progress: 75,
        dueDate: "2024-02-15",
      },
      {
        id: "2",
        name: "Mobile App UI",
        status: "active",
        progress: 45,
        dueDate: "2024-03-01",
      },
    ],
    completedProjectsList: [
      {
        id: "3",
        name: "Dashboard Redesign",
        status: "completed",
        progress: 100,
        dueDate: "2024-01-10",
      },
      {
        id: "4",
        name: "Landing Page",
        status: "completed",
        progress: 100,
        dueDate: "2023-12-20",
      },
    ],
    pendingTasks: [
      {
        id: "1",
        title: "Review design mockups",
        priority: "high",
        dueDate: "2024-01-25",
      },
      {
        id: "2",
        title: "Update component library",
        priority: "medium",
        dueDate: "2024-01-28",
      },
    ],
    joinDate: "2022-03-15",
    completionRate: 95,
    lastSeen: "2024-01-23T14:30:00Z",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Full Stack Developer",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    email: "michael.chen@company.com",
    phone: "+1 (555) 234-5678",
    location: "New York, NY",
    isOnline: true,
    rating: 4.8,
    totalProjects: 31,
    completedProjects: 26,
    activeProjects: [
      {
        id: "5",
        name: "API Integration",
        status: "active",
        progress: 60,
        dueDate: "2024-02-20",
      },
      {
        id: "6",
        name: "Database Migration",
        status: "active",
        progress: 30,
        dueDate: "2024-03-10",
      },
    ],
    completedProjectsList: [
      {
        id: "7",
        name: "User Authentication",
        status: "completed",
        progress: 100,
        dueDate: "2024-01-05",
      },
      {
        id: "8",
        name: "Payment Gateway",
        status: "completed",
        progress: 100,
        dueDate: "2023-12-15",
      },
    ],
    pendingTasks: [
      {
        id: "3",
        title: "Code review for PR #234",
        priority: "high",
        dueDate: "2024-01-24",
      },
      {
        id: "4",
        title: "Setup CI/CD pipeline",
        priority: "medium",
        dueDate: "2024-01-30",
      },
    ],
    joinDate: "2021-08-20",
    completionRate: 92,
    lastSeen: "2024-01-23T15:45:00Z",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    avatar:
      "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    email: "emily.rodriguez@company.com",
    phone: "+1 (555) 345-6789",
    location: "Austin, TX",
    isOnline: false,
    rating: 4.9,
    totalProjects: 19,
    completedProjects: 15,
    activeProjects: [
      {
        id: "9",
        name: "Brand Identity",
        status: "active",
        progress: 85,
        dueDate: "2024-02-05",
      },
      {
        id: "10",
        name: "User Research",
        status: "active",
        progress: 40,
        dueDate: "2024-02-25",
      },
    ],
    completedProjectsList: [
      {
        id: "11",
        name: "Mobile App Design",
        status: "completed",
        progress: 100,
        dueDate: "2024-01-12",
      },
      {
        id: "12",
        name: "Website Redesign",
        status: "completed",
        progress: 100,
        dueDate: "2023-12-30",
      },
    ],
    pendingTasks: [
      {
        id: "5",
        title: "Create wireframes",
        priority: "high",
        dueDate: "2024-01-26",
      },
      {
        id: "6",
        title: "User testing session",
        priority: "low",
        dueDate: "2024-02-02",
      },
    ],
    joinDate: "2022-01-10",
    completionRate: 97,
    lastSeen: "2024-01-22T09:20:00Z",
  },
  {
    id: "4",
    name: "David Kim",
    role: "Backend Developer",
    avatar:
      "https://images.pexels.com/photos/2826131/pexels-photo-2826131.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    email: "david.kim@company.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    isOnline: true,
    rating: 4.7,
    totalProjects: 28,
    completedProjects: 22,
    activeProjects: [
      {
        id: "13",
        name: "Microservices Architecture",
        status: "active",
        progress: 55,
        dueDate: "2024-03-15",
      },
      {
        id: "14",
        name: "Performance Optimization",
        status: "active",
        progress: 70,
        dueDate: "2024-02-10",
      },
    ],
    completedProjectsList: [
      {
        id: "15",
        name: "REST API Development",
        status: "completed",
        progress: 100,
        dueDate: "2024-01-08",
      },
      {
        id: "16",
        name: "Database Design",
        status: "completed",
        progress: 100,
        dueDate: "2023-12-25",
      },
    ],
    pendingTasks: [
      {
        id: "7",
        title: "Server maintenance",
        priority: "medium",
        dueDate: "2024-01-27",
      },
      {
        id: "8",
        title: "Security audit",
        priority: "high",
        dueDate: "2024-01-29",
      },
    ],
    joinDate: "2021-11-05",
    completionRate: 89,
    lastSeen: "2024-01-23T16:10:00Z",
  },
  {
    id: "5",
    name: "Jessica Taylor",
    role: "Project Manager",
    avatar:
      "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    email: "jessica.taylor@company.com",
    phone: "+1 (555) 567-8901",
    location: "Chicago, IL",
    isOnline: true,
    rating: 4.8,
    totalProjects: 35,
    completedProjects: 30,
    activeProjects: [
      {
        id: "17",
        name: "Team Coordination",
        status: "active",
        progress: 80,
        dueDate: "2024-02-28",
      },
      {
        id: "18",
        name: "Client Relations",
        status: "active",
        progress: 65,
        dueDate: "2024-03-05",
      },
    ],
    completedProjectsList: [
      {
        id: "19",
        name: "Sprint Planning",
        status: "completed",
        progress: 100,
        dueDate: "2024-01-15",
      },
      {
        id: "20",
        name: "Resource Allocation",
        status: "completed",
        progress: 100,
        dueDate: "2023-12-28",
      },
    ],
    pendingTasks: [
      {
        id: "9",
        title: "Weekly team standup",
        priority: "medium",
        dueDate: "2024-01-26",
      },
      {
        id: "10",
        title: "Budget review",
        priority: "high",
        dueDate: "2024-01-31",
      },
    ],
    joinDate: "2020-05-12",
    completionRate: 94,
    lastSeen: "2024-01-23T13:25:00Z",
  },
  {
    id: "6",
    name: "Alex Thompson",
    role: "DevOps Engineer",
    avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    email: "alex.thompson@company.com",
    phone: "+1 (555) 678-9012",
    location: "Denver, CO",
    isOnline: false,
    rating: 4.6,
    totalProjects: 22,
    completedProjects: 17,
    activeProjects: [
      {
        id: "21",
        name: "Infrastructure Setup",
        status: "active",
        progress: 45,
        dueDate: "2024-03-20",
      },
      {
        id: "22",
        name: "Monitoring System",
        status: "active",
        progress: 60,
        dueDate: "2024-02-18",
      },
    ],
    completedProjectsList: [
      {
        id: "23",
        name: "Docker Migration",
        status: "completed",
        progress: 100,
        dueDate: "2024-01-20",
      },
      {
        id: "24",
        name: "AWS Setup",
        status: "completed",
        progress: 100,
        dueDate: "2023-12-18",
      },
    ],
    pendingTasks: [
      {
        id: "11",
        title: "Server deployment",
        priority: "high",
        dueDate: "2024-01-25",
      },
      {
        id: "12",
        title: "Backup configuration",
        priority: "medium",
        dueDate: "2024-02-01",
      },
    ],
    joinDate: "2022-07-08",
    completionRate: 91,
    lastSeen: "2024-01-21T18:30:00Z",
  },
  {
    id: "7",
    name: "Maria Garcia",
    role: "QA Engineer",
    avatar:
      "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    email: "maria.garcia@company.com",
    phone: "+1 (555) 789-0123",
    location: "Miami, FL",
    isOnline: true,
    rating: 4.9,
    totalProjects: 26,
    completedProjects: 21,
    activeProjects: [
      {
        id: "25",
        name: "Automated Testing",
        status: "active",
        progress: 70,
        dueDate: "2024-02-12",
      },
      {
        id: "26",
        name: "Bug Tracking System",
        status: "active",
        progress: 50,
        dueDate: "2024-03-08",
      },
    ],
    completedProjectsList: [
      {
        id: "27",
        name: "Test Suite Development",
        status: "completed",
        progress: 100,
        dueDate: "2024-01-18",
      },
      {
        id: "28",
        name: "Performance Testing",
        status: "completed",
        progress: 100,
        dueDate: "2023-12-22",
      },
    ],
    pendingTasks: [
      {
        id: "13",
        title: "Test case review",
        priority: "medium",
        dueDate: "2024-01-28",
      },
      {
        id: "14",
        title: "Regression testing",
        priority: "high",
        dueDate: "2024-01-30",
      },
    ],
    joinDate: "2021-09-14",
    completionRate: 96,
    lastSeen: "2024-01-23T11:15:00Z",
  },
  {
    id: "8",
    name: "Robert Wilson",
    role: "Data Scientist",
    avatar:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    email: "robert.wilson@company.com",
    phone: "+1 (555) 890-1234",
    location: "Boston, MA",
    isOnline: false,
    rating: 4.7,
    totalProjects: 18,
    completedProjects: 14,
    activeProjects: [
      {
        id: "29",
        name: "ML Model Training",
        status: "active",
        progress: 35,
        dueDate: "2024-03-25",
      },
      {
        id: "30",
        name: "Data Pipeline",
        status: "active",
        progress: 65,
        dueDate: "2024-02-22",
      },
    ],
    completedProjectsList: [
      {
        id: "31",
        name: "Analytics Dashboard",
        status: "completed",
        progress: 100,
        dueDate: "2024-01-25",
      },
      {
        id: "32",
        name: "Data Visualization",
        status: "completed",
        progress: 100,
        dueDate: "2023-12-12",
      },
    ],
    pendingTasks: [
      {
        id: "15",
        title: "Data cleaning script",
        priority: "medium",
        dueDate: "2024-01-29",
      },
      {
        id: "16",
        title: "Model evaluation",
        priority: "low",
        dueDate: "2024-02-05",
      },
    ],
    joinDate: "2022-04-22",
    completionRate: 88,
    lastSeen: "2024-01-20T14:45:00Z",
  },
];

const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "text-red-600 bg-red-50";
    case "medium":
      return "text-yellow-600 bg-yellow-50";
    case "low":
      return "text-green-600 bg-green-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
};

const getProgressColor = (progress) => {
  if (progress >= 80) return "bg-green-500";
  if (progress >= 50) return "bg-blue-500";
  if (progress >= 25) return "bg-yellow-500";
  return "bg-red-500";
};

const getTimeAgo = (dateString) => {
  const now = new Date();
  const lastSeen = new Date(dateString);
  const diffInMinutes = Math.floor(
    (now.getTime() - lastSeen.getTime()) / (1000 * 60),
  );
  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  const diffInWeeks = Math.floor(diffInDays / 7);
  return `${diffInWeeks}w ago`;
};

export default function Profile() {
  return (
    <div className="flex h-full flex-col">
      <DashboardViewHeader title="Team Profiles" />
      {/* Profile Controls */}
      <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-4">
        <div className="flex space-x-1">
          <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900">
            All Members
          </button>
          <button className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900">
            Online
          </button>
          <button className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900">
            Developers
          </button>
          <button className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900">
            Designers
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Sort by Activity</span>
          </button>
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white">
            Add Member
          </button>
        </div>
      </div>
      {/* Profiles Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Profile Header */}
            <div className="border-b border-gray-100 p-6">
              <div className="mb-4 flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  {profile.isOnline && (
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-white bg-green-500"></div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-gray-900">
                    {profile.name}
                  </h3>
                  <p className="truncate text-sm text-gray-600">
                    {profile.role}
                  </p>
                  <div className="mt-1">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        profile.isOnline
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {profile.isOnline ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
              </div>
              {/* Contact Info */}
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-center">
                  <Mail className="mr-2 h-3 w-3" />
                  <span className="truncate">{profile.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-3 w-3" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="bg-gray-50 p-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {profile.totalProjects}
                  </div>
                  <div className="text-xs text-gray-600">Total Projects</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">
                    {profile.completedProjects}
                  </div>
                  <div className="text-xs text-gray-600">Completed</div>
                </div>
              </div>
              {/* Completion Rate */}
              <div className="mt-3">
                <div className="mb-1 flex justify-between text-xs text-gray-600">
                  <span>Completion Rate</span>
                  <span>{profile.completionRate}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${profile.completionRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
            {/* Active Projects */}
            <div className="p-4">
              <h4 className="mb-0 flex items-center font-medium text-gray-900">
                <Briefcase className="mr-2 h-4 w-4" />
                Active Projects ({profile.activeProjects.length})
              </h4>
            </div>
            {/* Pending Tasks */}
            <div className="border-t border-gray-100 p-4">
              <h4 className="mb-0 flex items-center font-medium text-gray-900">
                <Clock className="mr-2 h-4 w-4" />
                Pending Tasks ({profile.pendingTasks.length})
              </h4>
            </div>
            {/* Footer */}
            <div className="border-t border-gray-100 bg-gray-50 p-4">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                  Joined: {new Date(profile.joinDate).toLocaleDateString()}
                </span>
                <div className="flex items-center">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  <span>Active</span>
                </div>
              </div>
              {/* Last Seen and Message Button */}
              <div className="flex items-center justify-between pt-3">
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{getTimeAgo(profile.lastSeen)}</span>
                </div>
                <button className="flex items-center rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700">
                  <MessageCircle className="mr-1 h-3 w-3" />
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
