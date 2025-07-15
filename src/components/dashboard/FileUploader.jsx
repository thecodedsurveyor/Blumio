import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Paperclip, X } from "lucide-react";

const FileUploader = ({ task, onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    files.forEach((file) => {
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }

      // Simulate upload progress
      const fileId = Date.now().toString() + Math.random();
      setUploadProgress((prev) => ({ ...prev, [fileId]: 0 }));

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const progress = (prev[fileId] || 0) + 10;
          if (progress >= 100) {
            clearInterval(interval);

            // Create file attachment object
            const attachment = {
              id: fileId,
              name: file.name,
              size: file.size,
              type: file.type,
              url: URL.createObjectURL(file), // In real app, this would be server URL
              uploadedAt: new Date().toISOString(),
              uploadedBy: "Sarah Johnson", // Current user
            };

            if (onFileUpload) {
              onFileUpload(task.id, attachment);
            }

            // Remove from progress
            setTimeout(() => {
              setUploadProgress((prev) => {
                const updated = { ...prev };
                delete updated[fileId];
                return updated;
              });
            }, 1000);

            return { ...prev, [fileId]: 100 };
          }
          return { ...prev, [fileId]: progress };
        });
      }, 200);
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (type) => {
    if (type.startsWith("image/")) return "🖼️";
    if (type.startsWith("video/")) return "🎥";
    if (type.startsWith("audio/")) return "🎵";
    if (type.includes("pdf")) return "📄";
    if (type.includes("word")) return "📝";
    if (type.includes("excel") || type.includes("spreadsheet")) return "📊";
    if (type.includes("powerpoint") || type.includes("presentation"))
      return "📈";
    if (type.includes("zip") || type.includes("rar")) return "📦";
    return "📁";
  };

  const removeFile = (attachmentId) => {
    // This would call an API to remove the file
    if (onFileUpload) {
      onFileUpload(task.id, null, attachmentId, "remove");
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        className={`cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors
          ${
            isDragging
              ? "border-blue-400 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <Paperclip className="mx-auto mb-4 h-12 w-12 text-gray-400" />
        <p className="mb-2 text-sm text-gray-600">
          Drop files here or click to browse
        </p>
        <p className="text-xs text-gray-500">Maximum file size: 10MB</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      {/* Upload Progress */}
      {Object.keys(uploadProgress).length > 0 && (
        <div className="space-y-2">
          <h5 className="text-sm font-medium text-gray-700">Uploading...</h5>
          {Object.entries(uploadProgress).map(([fileId, progress]) => (
            <div key={fileId} className="rounded-md bg-gray-50 p-3">
              <div className="mb-1 flex justify-between text-xs text-gray-600">
                <span>Uploading file...</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Uploaded Files */}
      {task.attachments && task.attachments.length > 0 && (
        <div className="space-y-2">
          <h5 className="text-sm font-medium text-gray-700">
            Attachments ({task.attachments.length})
          </h5>
          <div className="space-y-2">
            {task.attachments.map((attachment) => (
              <div
                key={attachment.id}
                className="flex items-center gap-3 rounded-md border bg-gray-50 p-3"
              >
                <span className="text-lg">{getFileIcon(attachment.type)}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {attachment.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(attachment.size)} •{" "}
                    {new Date(attachment.uploadedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.open(attachment.url)}
                    className="text-xs text-blue-600 hover:text-blue-700"
                  >
                    View
                  </button>
                  <button
                    onClick={() => removeFile(attachment.id)}
                    className="text-xs text-red-600 hover:text-red-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

FileUploader.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    attachments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        uploadedAt: PropTypes.string.isRequired,
        uploadedBy: PropTypes.string,
      }),
    ),
  }).isRequired,
  onFileUpload: PropTypes.func,
};

export default FileUploader;
