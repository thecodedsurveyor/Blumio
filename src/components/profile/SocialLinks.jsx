import { Github, Linkedin, Twitter } from "lucide-react";

const SocialLinks = ({ social, t }) => (
  <section className="mb-8 rounded-lg bg-white p-6 shadow">
    <h2 className="mb-6 text-xl font-semibold">{t("profile.social")}</h2>
    <div className="space-y-4">
      <a
        href={social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
      >
        <Github className="h-5 w-5" />
        <span>GitHub</span>
      </a>
      <a
        href={social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
      >
        <Linkedin className="h-5 w-5" />
        <span>LinkedIn</span>
      </a>
      <a
        href={social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
      >
        <Twitter className="h-5 w-5" />
        <span>Twitter</span>
      </a>
    </div>
  </section>
);

export default SocialLinks;
