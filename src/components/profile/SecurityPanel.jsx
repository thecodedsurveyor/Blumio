import { Shield, AlertTriangle, Smartphone, Lock } from "lucide-react";
import PropTypes from "prop-types";

const SecurityPanel = ({ security, onChange, t }) => (
  <div className="space-y-6 rounded-lg bg-white p-6 shadow">
    <h3 className="text-lg font-semibold">{t("security.title")}</h3>

    <div className="space-y-4">
      {/* Two-Factor Authentication */}
      <section className="rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-blue-500" />
            <div>
              <h4 className="font-medium">{t("security.twoFactor")}</h4>
              <p className="text-sm text-gray-500">
                {t("security.twoFactorDesc")}
              </p>
            </div>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={security.twoFactorAuth}
              onChange={(e) =>
                onChange({ ...security, twoFactorAuth: e.target.checked })
              }
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
          </label>
        </div>
      </section>

      {/* Login Alerts */}
      <section className="rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <div>
              <h4 className="font-medium">{t("security.loginAlerts")}</h4>
              <p className="text-sm text-gray-500">
                {t("security.loginAlertsDesc")}
              </p>
            </div>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={security.loginAlerts}
              onChange={(e) =>
                onChange({ ...security, loginAlerts: e.target.checked })
              }
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
          </label>
        </div>
      </section>

      {/* Device Management */}
      <section className="rounded-lg border p-4">
        <div className="mb-4 flex items-center gap-3">
          <Smartphone className="h-5 w-5 text-gray-500" />
          <div>
            <h4 className="font-medium">{t("security.devices")}</h4>
            <p className="text-sm text-gray-500">{t("security.devicesDesc")}</p>
          </div>
        </div>
        <select
          value={security.allowedDevices}
          onChange={(e) =>
            onChange({ ...security, allowedDevices: e.target.value })
          }
          className="block w-full rounded-md border-gray-300 text-sm"
        >
          <option value="unlimited">{t("security.devicesUnlimited")}</option>
          <option value="1">{t("security.devices1")}</option>
          <option value="2">{t("security.devices2")}</option>
          <option value="3">{t("security.devices3")}</option>
        </select>
      </section>

      {/* Password Settings */}
      <section className="rounded-lg border p-4">
        <div className="mb-4 flex items-center gap-3">
          <Lock className="h-5 w-5 text-gray-500" />
          <div>
            <h4 className="font-medium">{t("security.password")}</h4>
            <p className="text-sm text-gray-500">
              {t("security.passwordDesc")}
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700">
              {t("security.sessionTimeout")}
            </label>
            <select
              value={security.sessionTimeout}
              onChange={(e) =>
                onChange({
                  ...security,
                  sessionTimeout: parseInt(e.target.value),
                })
              }
              className="mt-1 block w-full rounded-md border-gray-300 text-sm"
            >
              <option value="15">15 {t("common.minutes")}</option>
              <option value="30">30 {t("common.minutes")}</option>
              <option value="60">1 {t("common.hour")}</option>
              <option value="240">4 {t("common.hours")}</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              {t("security.passwordExpiry")}
            </label>
            <select
              value={security.passwordExpiry}
              onChange={(e) =>
                onChange({
                  ...security,
                  passwordExpiry: parseInt(e.target.value),
                })
              }
              className="mt-1 block w-full rounded-md border-gray-300 text-sm"
            >
              <option value="30">30 {t("common.days")}</option>
              <option value="60">60 {t("common.days")}</option>
              <option value="90">90 {t("common.days")}</option>
              <option value="180">180 {t("common.days")}</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  </div>
);

SecurityPanel.propTypes = {
  security: PropTypes.shape({
    twoFactorAuth: PropTypes.bool.isRequired,
    loginAlerts: PropTypes.bool.isRequired,
    sessionTimeout: PropTypes.number.isRequired,
    passwordExpiry: PropTypes.number.isRequired,
    allowedDevices: PropTypes.oneOf(["unlimited", "1", "2", "3"]).isRequired,
    ipWhitelist: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default SecurityPanel;
