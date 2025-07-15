export const mockProfileData = {
  subscriptionData: {
    plan: "Premium",
    status: "active",
    startDate: "2024-01-15",
    endDate: "2024-12-15",
    nextBillingDate: "2024-12-15",
    billingCycle: "annual",
    price: 119,
    currency: "USD",
    autoRenew: true,
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "10GB file storage",
      "Advanced reporting",
      "Custom fields",
      "Time tracking",
      "Priority support",
    ],
  },
  activityStats: {
    tasksCompleted: 127,
    currentStreak: 12,
    hoursTracked: 89,
    projectsActive: 3,
    weeklyGoal: 75,
  },
  recentActivity: [
    {
      id: 1,
      type: "task_completed",
      description: "Completed 'Design system documentation'",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "task_created",
      description: "Created new task 'User research planning'",
      time: "4 hours ago",
    },
    {
      id: 3,
      type: "comment_added",
      description: "Added comment to 'Mobile app wireframes'",
      time: "1 day ago",
    },
  ],
};
