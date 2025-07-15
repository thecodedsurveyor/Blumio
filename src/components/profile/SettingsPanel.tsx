import { FC } from "react";
import { Volume2, Wifi, Database, Cpu } from "lucide-react";

interface Preferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  soundNotifications: boolean;
  offlineMode: boolean;
  dataUsage: "low" | "medium" | "high";
  performanceMode: boolean;
}

interface SettingsPanelProps {
  preferences: Preferences;
  onChange: (newPreferences: Preferences) => void;
  t: (key: string) => string;
}

const SettingsPanel: FC<SettingsPanelProps> = ({
  preferences,
  onChange,
  t,
}) => (
  <div className="space-y-6 rounded-lg bg-white p-6 shadow">
    <h3 className="text-lg font-semibold">{t("settings.preferences")}</h3>

    <div className="space-y-4">
      {/* Notifications */}
      <section>
        <h4 className="mb-2 font-medium">{t("settings.notifications")}</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-sm font-medium">
                {t("settings.emailNotifications")}
              </h5>
              <p className="text-sm text-gray-500">
                {t("settings.emailNotificationsDescription")}
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={preferences.emailNotifications}
                onChange={(e) =>
                  onChange({
                    ...preferences,
                    emailNotifications: e.target.checked,
                  })
                }
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-sm font-medium">
                {t("settings.pushNotifications")}
              </h5>
              <p className="text-sm text-gray-500">
                {t("settings.pushNotificationsDescription")}
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={preferences.pushNotifications}
                onChange={(e) =>
                  onChange({
                    ...preferences,
                    pushNotifications: e.target.checked,
                  })
                }
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
            </label>
          </div>
        </div>
      </section>

      {/* Sound */}
      <section>
        <div className="flex items-center space-x-2">
          <Volume2 className="h-5 w-5" />
          <h4 className="font-medium">{t("settings.sound")}</h4>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <h5 className="text-sm font-medium">
              {t("settings.soundNotifications")}
            </h5>
            <p className="text-sm text-gray-500">
              {t("settings.soundNotificationsDescription")}
            </p>
          </div>
          <select
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={preferences.soundNotifications ? "on" : "off"}
            onChange={(e) =>
              onChange({
                ...preferences,
                soundNotifications: e.target.value === "on",
              })
            }
          >
            <option value="on">{t("settings.on")}</option>
            <option value="off">{t("settings.off")}</option>
          </select>
        </div>
      </section>

      {/* Connectivity */}
      <section>
        <div className="flex items-center space-x-2">
          <Wifi className="h-5 w-5" />
          <h4 className="font-medium">{t("settings.connectivity")}</h4>
        </div>
        <div className="mt-2 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-sm font-medium">
                {t("settings.offlineMode")}
              </h5>
              <p className="text-sm text-gray-500">
                {t("settings.offlineModeDescription")}
              </p>
            </div>
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={preferences.offlineMode ? "on" : "off"}
              onChange={(e) =>
                onChange({
                  ...preferences,
                  offlineMode: e.target.value === "on",
                })
              }
            >
              <option value="on">{t("settings.on")}</option>
              <option value="off">{t("settings.off")}</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <div>
                <h5 className="text-sm font-medium">
                  {t("settings.dataUsage")}
                </h5>
                <p className="text-sm text-gray-500">
                  {t("settings.dataUsageDescription")}
                </p>
              </div>
            </div>
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={preferences.dataUsage}
              onChange={(e) =>
                onChange({
                  ...preferences,
                  dataUsage: e.target.value as "low" | "medium" | "high",
                })
              }
            >
              <option value="low">{t("settings.low")}</option>
              <option value="medium">{t("settings.medium")}</option>
              <option value="high">{t("settings.high")}</option>
            </select>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section>
        <div className="flex items-center space-x-2">
          <Cpu className="h-5 w-5" />
          <h4 className="font-medium">{t("settings.performance")}</h4>
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-sm font-medium">
                {t("settings.performanceMode")}
              </h5>
              <p className="text-sm text-gray-500">
                {t("settings.performanceModeDescription")}
              </p>
            </div>
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={preferences.performanceMode ? "high" : "normal"}
              onChange={(e) =>
                onChange({
                  ...preferences,
                  performanceMode: e.target.value === "high",
                })
              }
            >
              <option value="normal">{t("settings.normal")}</option>
              <option value="high">{t("settings.high")}</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default SettingsPanel;
