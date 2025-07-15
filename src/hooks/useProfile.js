import { useState } from "react";
import { mockProfileData } from "../data/profileData";

export const useProfileForm = (currentUser) => {
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    title: "Senior Product Manager",
    bio: "Passionate about creating innovative solutions that empower teams to achieve their goals. 5+ years of experience in product management and team leadership.",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    website: "https://sarahjohnson.dev",
    skills: [
      "Product Management",
      "Team Leadership",
      "UX Design",
      "Data Analysis",
      "Agile",
      "Scrum",
    ],
    social: {
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
    },
    preferences: {
      emailNotifications: true,
      pushNotifications: true,
      taskReminders: true,
      weeklyDigest: true,
      soundNotifications: true,
      theme: "light",
      timezone: "America/Los_Angeles",
      language: "en",
      fontSize: "medium",
      autoSave: true,
      offlineMode: false,
      dataUsage: "standard",
      cacheSize: "medium",
      performanceMode: false,
    },
    security: {
      twoFactorAuth: false,
      loginAlerts: true,
      sessionTimeout: 30,
      passwordExpiry: 90,
      allowedDevices: "unlimited",
      ipWhitelist: false,
    },
    integrations: {
      googleCalendar: false,
      slack: false,
    },
    privacy: {
      profileVisibility: "team",
      showActivity: true,
      showStats: true,
      allowDirectMessages: true,
      shareAnalytics: false,
      cookieConsent: true,
    },
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleFormChange = (newData) => {
    setFormData(newData);
    setHasUnsavedChanges(true);
  };

  return {
    formData,
    hasUnsavedChanges,
    handleFormChange,
    setHasUnsavedChanges,
  };
};

export const useProfileImage = (initialImage) => {
  const [profileImage, setProfileImage] = useState(initialImage);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    profileImage,
    setProfileImage,
    handleImageUpload,
  };
};

export const useProfileData = () => {
  return {
    subscriptionData: mockProfileData.subscriptionData,
    activityStats: mockProfileData.activityStats,
    recentActivity: mockProfileData.recentActivity,
  };
};
