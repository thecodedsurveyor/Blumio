import { CheckCircle } from "lucide-react";
import PropTypes from "prop-types";

const SaveNotification = ({ show, t }) =>
  show ? (
    <div className="fixed right-4 top-4 z-50 rounded-md border border-green-200 bg-green-100 px-4 py-3 shadow-lg">
      <div className="flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <span className="text-sm font-medium text-green-800">
          {t("settings.settingsUpdated")}
        </span>
      </div>
    </div>
  ) : null;

SaveNotification.propTypes = {
  show: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default SaveNotification;
