import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { mockUsers } from "../data/mockData";
import {
  useProfileForm,
  useProfileImage,
  useProfileData,
} from "../hooks/useProfile";

import Header from "../components/profile/Header";
import SaveNotification from "../components/profile/SaveNotification";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfileForm from "../components/profile/ProfileForm";
import ActivityFeed from "../components/profile/ActivityFeed";
import StatsPanel from "../components/profile/StatsPanel";
import SettingsPanel from "../components/profile/SettingsPanel";
import SecurityPanel from "../components/profile/SecurityPanel";
import IntegrationsPanel from "../components/profile/IntegrationsPanel";
import ContactInfo from "../components/profile/ContactInfo";
import SocialLinks from "../components/profile/SocialLinks";
import Skills from "../components/profile/Skills";

import type {
  ActivityProps,
  StatsProps,
  SecuritySettings,
  IntegrationSettings,
  SubscriptionData,
} from "../types/profile";

// Local Preferences type to match SettingsPanel
interface Preferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  soundNotifications: boolean;
  offlineMode: boolean;
  dataUsage: "low" | "medium" | "high";
  performanceMode: boolean;
}

interface FormData {
  preferences: Preferences;
  security: SecuritySettings;
  integrations: IntegrationSettings;
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  skills: string[];
}

function Profile() {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Current user (in real app, this would come from auth context)
  const [currentUser] = useState(mockUsers[0]);
  const [isEditing] = useState(false);
  const [activeTab] = useState("profile");
  const [showSaveNotification] = useState(false);

  // Custom hooks for form, image, and data management
  const {
    formData: rawFormData,
    hasUnsavedChanges,
    handleFormChange,
  } = useProfileForm(currentUser);

  // Cast formData to the correct type
  const formData = rawFormData as unknown as FormData;

  const { profileImage, handleImageUpload } = useProfileImage(
    currentUser.avatar,
  );

  const { activityStats, recentActivity } = useProfileData() as {
    subscriptionData: SubscriptionData;
    activityStats: StatsProps;
    recentActivity: ActivityProps[];
  };

  // Handlers
  const handlePreferencesChange = (newPreferences: Preferences) => {
    handleFormChange({
      ...formData,
      preferences: newPreferences,
    });
  };

  const handleSecurityChange = (field: string, value: any) => {
    handleFormChange({
      ...formData,
      security: {
        ...formData.security,
        [field]: value,
      },
    });
  };

  const handleIntegrationsChange = (field: string, value: any) => {
    handleFormChange({
      ...formData,
      integrations: {
        ...formData.integrations,
        [field]: value,
      },
    });
  };

  // Missing handler functions
  const handleBack = () => {
    // Navigate back logic
  };

  const handleCancel = () => {
    // Cancel editing logic
  };

  const handleSave = () => {
    // Save changes logic
  };

  const handleTabChange = (_tab: string) => {
    // Tab change logic
  };

  // Render different panels based on active tab
  const renderActivePanel = () => {
    switch (activeTab) {
      case "profile":
        return (
          <ProfileForm
            formData={formData}
            onChange={handleFormChange}
            onImageUpload={handleImageUpload}
            profileImage={profileImage}
            fileInputRef={fileInputRef}
            t={t}
          />
        );
      case "activity":
        return (
          <ActivityFeed
            activities={recentActivity}
            data={recentActivity}
            t={t}
          />
        );
      case "stats":
        return <StatsPanel activityStats={activityStats} t={t} />;
      case "settings":
        return (
          <SettingsPanel
            preferences={formData.preferences}
            onChange={handlePreferencesChange}
            t={t}
          />
        );
      case "security":
        return (
          <SecurityPanel
            security={formData.security}
            onChange={handleSecurityChange}
            t={t}
          />
        );
      case "integrations":
        return (
          <IntegrationsPanel
            integrations={formData.integrations}
            onChange={handleIntegrationsChange}
            t={t}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onBack={handleBack}
        title={t("profile.title")}
        hasUnsavedChanges={hasUnsavedChanges}
        isEditing={isEditing}
        onCancel={handleCancel}
        onSave={handleSave}
        t={t}
      />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <ProfileTabs
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            t={t}
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-white shadow">
                {renderActivePanel()}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              <ContactInfo
                email={formData.email}
                phone={formData.phone}
                location={formData.location}
                t={t}
              />
              <SocialLinks social={formData.social} t={t} />
              <Skills
                skills={formData.skills}
                isEditing={isEditing}
                onChange={handleFormChange}
                t={t}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Save notification */}
      <SaveNotification show={showSaveNotification} t={t} />
    </div>
  );
}

export default Profile;
