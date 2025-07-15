import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = ({ email, phone, location, t }) => (
  <section className="mb-8 rounded-lg bg-white p-6 shadow">
    <h2 className="mb-6 text-xl font-semibold">{t("profile.contact")}</h2>
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 text-gray-400" />
        <div>
          <div className="text-sm text-gray-500">{t("profile.email")}</div>
          <div>{email}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="h-5 w-5 text-gray-400" />
        <div>
          <div className="text-sm text-gray-500">{t("profile.phone")}</div>
          <div>{phone}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MapPin className="h-5 w-5 text-gray-400" />
        <div>
          <div className="text-sm text-gray-500">{t("profile.location")}</div>
          <div>{location}</div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfo;
