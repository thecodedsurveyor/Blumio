import { ArrowLeft } from "lucide-react";

const Header = ({
  onBack,
  title,
  hasUnsavedChanges,
  isEditing,
  onCancel,
  onSave,
  t,
}) => (
  <header className="border-b border-gray-200 bg-white shadow-sm">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Dashboard</span>
          </button>
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          {hasUnsavedChanges && (
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <span className="text-sm text-orange-600">Unsaved changes</span>
            </div>
          )}
          {isEditing ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onCancel}
                className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
              >
                {t("profile.cancel")}
              </button>
              <button
                onClick={onSave}
                className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                {t("profile.save")}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </header>
);

import PropTypes from "prop-types";

Header.propTypes = {
  onBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  hasUnsavedChanges: PropTypes.bool,
  isEditing: PropTypes.bool,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  t: PropTypes.func.isRequired,
};

export default Header;
