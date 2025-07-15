import PropTypes from "prop-types";

const IntegrationsPanel = ({ integrations, onChange, t }) => (
  <div className="space-y-6 rounded-lg bg-white p-6 shadow">
    <h3 className="text-lg font-semibold">{t("integrations.title")}</h3>

    <div className="space-y-4">
      {/* Google Calendar */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div>
          <h4 className="font-medium">Google Calendar</h4>
          <p className="text-sm text-gray-500">
            {t("integrations.googleCalendarDesc")}
          </p>
        </div>
        <button
          onClick={() =>
            onChange({
              ...integrations,
              googleCalendar: !integrations.googleCalendar,
            })
          }
          className={`rounded-md px-4 py-2 ${
            integrations.googleCalendar
              ? "bg-red-100 text-red-700 hover:bg-red-200"
              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          {integrations.googleCalendar
            ? t("common.disconnect")
            : t("common.connect")}
        </button>
      </div>

      {/* Slack */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div>
          <h4 className="font-medium">Slack</h4>
          <p className="text-sm text-gray-500">{t("integrations.slackDesc")}</p>
        </div>
        <button
          onClick={() =>
            onChange({ ...integrations, slack: !integrations.slack })
          }
          className={`rounded-md px-4 py-2 ${
            integrations.slack
              ? "bg-red-100 text-red-700 hover:bg-red-200"
              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          {integrations.slack ? t("common.disconnect") : t("common.connect")}
        </button>
      </div>
    </div>
  </div>
);

IntegrationsPanel.propTypes = {
  integrations: PropTypes.shape({
    googleCalendar: PropTypes.bool.isRequired,
    slack: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default IntegrationsPanel;
