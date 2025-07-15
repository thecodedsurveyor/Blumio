import { FaCloud } from "react-icons/fa";
import PropTypes from "prop-types";

const BlumioLogo = ({ className = "h-10 w-auto", showText = true }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-2">
        <FaCloud className="h-6 w-6 text-white" />
      </div>
      {showText && (
        <span
          className="text-2xl font-bold text-gray-800"
          style={{
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Blumio
        </span>
      )}
    </div>
  );
};

BlumioLogo.propTypes = {
  className: PropTypes.string,
  showText: PropTypes.bool,
};

export default BlumioLogo;
