import { AlertCircle, X } from "lucide-react";

export default function ErrorMessage({ message, onClose, type = "error" }) {
  const bgColor = type === "error" ? "bg-red-50 border-red-200" : "bg-yellow-50 border-yellow-200";
  const textColor = type === "error" ? "text-red-800" : "text-yellow-800";
  const iconColor = type === "error" ? "text-red-500" : "text-yellow-500";

  return (
    <div className={`${bgColor} border rounded-lg p-4 mb-4`}>
      <div className="flex items-start">
        <AlertCircle className={`${iconColor} w-5 h-5 mt-0.5 mr-3 flex-shrink-0`} />
        <div className="flex-1">
          <p className={`${textColor} text-sm font-medium`}>{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`${textColor} hover:opacity-75 ml-3`}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}