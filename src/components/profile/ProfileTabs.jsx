import PropTypes from "prop-types";

const TABS = ["profile", "settings", "security", "integrations", "privacy"];

const ProfileTabs = ({ activeTab, setActiveTab, t }) => (
  <nav className="flex gap-4 border-b bg-white px-4 py-2">
    {TABS.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
          activeTab === tab
            ? "bg-blue-100 text-blue-700"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        {t(`profile.tabs.${tab}`)}
      </button>
    ))}
  </nav>
);

ProfileTabs.propTypes = {
  activeTab: PropTypes.oneOf(TABS).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default ProfileTabs;
