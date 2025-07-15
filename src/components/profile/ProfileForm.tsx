import { ProfileFormProps } from "../../types/profile";

function ProfileForm({
  formData,
  onChange,
  onImageUpload,
  profileImage,
  fileInputRef,
  t,
}: ProfileFormProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="space-y-6 p-4">
      {/* Profile Image */}
      <div className="flex items-center space-x-6">
        <div className="relative h-24 w-24">
          <img
            src={profileImage || formData.avatar}
            alt={formData.name}
            className="h-full w-full rounded-full object-cover"
          />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 rounded-full bg-white p-1 shadow-lg"
          >
            <span className="sr-only">{t("profile.changePhoto")}</span>
            {/* Add your edit icon here */}
          </button>
        </div>
        <div>
          <h2 className="text-lg font-medium text-gray-900">{formData.name}</h2>
          <p className="text-sm text-gray-500">{formData.title}</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            {t("profile.bio")}
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            value={formData.bio}
            onChange={(e) => onChange("bio", e.target.value)}
          />
        </div>
        {/* Add other form fields as needed */}
      </div>
    </div>
  );
}

export default ProfileForm;
