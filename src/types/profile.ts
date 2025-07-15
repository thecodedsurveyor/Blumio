export type Activity = {
  id: number;
  type: string;
  description: string;
  time: string;
};
import { TFunction } from "i18next";

export type Theme = "light" | "dark";
export type DataUsage = "low" | "medium" | "high";
export type FontSize = "small" | "medium" | "large";
export type CacheSize = "small" | "medium" | "large";
export type SubscriptionPlan = "Free" | "Premium" | "Enterprise";
export type SubscriptionStatus = "active" | "cancelled" | "expired" | "trial";
export type BillingCycle = "monthly" | "annual";

export interface ActivityProps {
  id: number;
  type: string;
  description: string;
  time: string;
}

export type ActivityFeedProps = {
  data: ActivityProps[];
  activities: Activity[];
  t: TFunction;
};

export interface StatsProps {
  tasksCompleted: number;
  currentStreak: number;
  hoursTracked: number;
  projectsActive: number;
  weeklyGoal: number;
}

export interface StatsPanelProps {
  activityStats: StatsProps;
  t: TFunction;
}

export interface Preferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  taskReminders: boolean;
  weeklyDigest: boolean;
  soundNotifications: boolean;
  theme: Theme;
  timezone: string;
  language: string;
  fontSize: FontSize;
  autoSave: boolean;
  offlineMode: boolean;
  dataUsage: DataUsage;
  cacheSize: CacheSize;
  performanceMode: boolean;
}

export interface SecuritySettings {
  twoFactorAuth: boolean;
  loginAlerts: boolean;
  sessionTimeout: number;
  passwordExpiry: number;
  allowedDevices: string;
  ipWhitelist: boolean;
}

export interface IntegrationSettings {
  googleCalendar: boolean;
  slack: boolean;
  github: boolean;
  jira: boolean;
  [key: string]: boolean; // Allow additional integrations
}

export interface SubscriptionData {
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  startDate: string;
  endDate: string;
  nextBillingDate: string;
  billingCycle: BillingCycle;
  price: number;
  currency: string;
  autoRenew: boolean;
  features: string[];
}

export interface ProfileFormProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  onImageUpload: (file: File) => void;
  profileImage: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
  t: TFunction;
}

export interface SettingsPanelProps {
  preferences: Preferences;
  onChange: (newPreferences: Preferences) => void;
  t: TFunction;
}

export interface SecurityPanelProps {
  security: SecuritySettings;
  onChange: (field: string, value: any) => void;
  t: TFunction;
}

export interface IntegrationsPanelProps {
  integrations: IntegrationSettings;
  onChange: (field: string, value: any) => void;
  t: TFunction;
}

export interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
  t: TFunction;
}

export interface SocialLinksProps {
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  t: TFunction;
}

export interface SkillsProps {
  skills: string[];
  isEditing: boolean;
  onChange: (field: string, value: any) => void;
  t: TFunction;
}

export interface SaveNotificationProps {
  show: boolean;
  t: TFunction;
}

export interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  t: TFunction;
}

export interface HeaderProps {
  onBack: () => void;
  title: string;
  hasUnsavedChanges: boolean;
  isEditing: boolean;
  onCancel: () => void;
  onSave: () => void;
  t: TFunction;
}
